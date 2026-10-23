import {useMemo, useState} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const catalogs = {
  en: [
    {name:'deku-linux', category:'core', kind:'Project foundation', status:'Foundation', limited:false, summary:'Project scope, engineering principles, repository map and current prototype boundaries.', keywords:'project overview governance foundation'},
    {name:'deku-recipes', category:'packages', kind:'Package inputs', status:'Metadata prototype', limited:true, summary:'Validates recipe metadata and pinned source declarations. It does not fetch sources, run recipes or publish packages.', keywords:'source recipe license dependency metadata'},
    {name:'deku-build', category:'packages', kind:'Build planning', status:'Validation only', limited:true, summary:'Validates bounded build plans. It does not download source archives, execute builds or provide isolated workers.', keywords:'build sandbox artifact plan'},
    {name:'deku-pkg', category:'packages', kind:'Native packages', status:'Experimental', limited:true, summary:'Metadata, digest verification and dependency planning. It does not install host packages or recover transactions.', keywords:'package manager rust digest install transaction'},
    {name:'deku-system', category:'system', kind:'System composition', status:'Prototype', limited:true, summary:'Validates composition manifests. It does not assemble a root filesystem, initramfs or bootable ISO.', keywords:'system image boot rootfs kernel'},
    {name:'deku-installer', category:'system', kind:'Installation planning', status:'Plan only', limited:true, summary:'Validates a non-destructive install plan. It does not discover disks, partition storage or write to a device.', keywords:'install disk partition live system'},
    {name:'deku-infra', category:'system', kind:'Release foundations', status:'Docs / bootstrap', limited:true, summary:'Documents future release controls. No production package repository, signing service, mirrors or monitoring is configured.', keywords:'infrastructure signing repository release security'},
  ],
  fr: [
    {name:'deku-linux', category:'core', kind:'Fondations du projet', status:'Fondations', limited:false, summary:'Périmètre, principes d’ingénierie, carte des dépôts et limites actuelles des prototypes.', keywords:'projet gouvernance fondations'},
    {name:'deku-recipes', category:'packages', kind:'Sources des paquets', status:'Prototype de métadonnées', limited:true, summary:'Valide les métadonnées et sources épinglées. Il ne télécharge pas les sources, n’exécute pas les recettes et ne publie pas de paquets.', keywords:'source recette licence dépendance métadonnées'},
    {name:'deku-build', category:'packages', kind:'Planification de compilation', status:'Validation uniquement', limited:true, summary:'Valide les plans de compilation. Il ne télécharge pas les sources, n’exécute pas de compilations et ne fournit pas d’ouvriers isolés.', keywords:'compilation sandbox artefact plan'},
    {name:'deku-pkg', category:'packages', kind:'Paquets natifs', status:'Expérimental', limited:true, summary:'Métadonnées, vérification des empreintes et planification des dépendances. Il n’installe pas les paquets sur l’hôte.', keywords:'gestionnaire de paquets rust empreinte installation transaction'},
    {name:'deku-system', category:'system', kind:'Composition du système', status:'Prototype', limited:true, summary:'Valide les manifestes de composition. Il ne construit pas de système de fichiers racine, d’initramfs ou d’ISO amorçable.', keywords:'image système démarrage noyau rootfs'},
    {name:'deku-installer', category:'system', kind:'Planification de l’installation', status:'Plan uniquement', limited:true, summary:'Valide un plan non destructif. Il ne détecte pas les disques, ne partitionne pas et n’écrit sur aucun périphérique.', keywords:'installation disque partition système'},
    {name:'deku-infra', category:'system', kind:'Fondations des versions', status:'Docs / bootstrap', limited:true, summary:'Documente les futurs contrôles de publication. Aucun dépôt de paquets, service de signature, miroir ou système de surveillance de production n’est configuré.', keywords:'infrastructure signature dépôt publication sécurité'},
  ],
  ar: [
    {name:'deku-linux', category:'core', kind:'أساس المشروع', status:'مرحلة تأسيس', limited:false, summary:'نطاق المشروع ومبادئ الهندسة وخريطة المستودعات وحدود النماذج الأولية الحالية.', keywords:'المشروع الحوكمة الأساس'},
    {name:'deku-recipes', category:'packages', kind:'مدخلات الحزم', status:'نموذج بيانات', limited:true, summary:'يتحقق من بيانات الوصفات والمصادر المثبتة. لا ينزّل المصادر ولا ينفذ الوصفات ولا ينشر الحزم.', keywords:'المصدر الوصفة الترخيص الاعتمادية البيانات'},
    {name:'deku-build', category:'packages', kind:'تخطيط البناء', status:'تحقق فقط', limited:true, summary:'يتحقق من خطط البناء المحدودة. لا ينزّل المصادر ولا ينفذ البناء ولا يوفر عمال بناء معزولين.', keywords:'البناء العزل الآثار الخطة'},
    {name:'deku-pkg', category:'packages', kind:'الحزم الأصلية', status:'تجريبي', limited:true, summary:'البيانات وبصمات الملفات وتخطيط الاعتماديات. لا يثبت الحزم على النظام المضيف ولا ينفذ استعادة المعاملات.', keywords:'مدير الحزم Rust بصمة التثبيت المعاملات'},
    {name:'deku-system', category:'system', kind:'تركيب النظام', status:'نموذج أولي', limited:true, summary:'يتحقق من ملفات وصف التركيب. لا ينشئ نظام ملفات جذريًا أو initramfs أو صورة ISO قابلة للإقلاع.', keywords:'صورة النظام الإقلاع النواة rootfs'},
    {name:'deku-installer', category:'system', kind:'تخطيط التثبيت', status:'خطة فقط', limited:true, summary:'يتحقق من خطة تثبيت غير مدمرة. لا يكتشف الأقراص ولا يقسمها ولا يكتب إلى جهاز فعلي.', keywords:'التثبيت القرص التقسيم النظام الحي'},
    {name:'deku-infra', category:'system', kind:'أساسيات الإصدار', status:'توثيق وتأسيس', limited:true, summary:'يوثق ضوابط الإصدار المستقبلية. لا يوجد مستودع حزم إنتاجي أو خدمة توقيع أو مرايا أو مراقبة إنتاجية.', keywords:'البنية التحتية التوقيع المستودع الإصدار الأمان'},
  ],
};

const filters = [
  {id:'all', label:<Translate id="ecosystem.filter.all">All repositories</Translate>},
  {id:'core', label:<Translate id="ecosystem.filter.core">Project core</Translate>},
  {id:'packages', label:<Translate id="ecosystem.filter.packages">Recipes and packages</Translate>},
  {id:'system', label:<Translate id="ecosystem.filter.system">System and trust</Translate>},
];

export default function Ecosystem() {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale || 'en';
  const repos = catalogs[locale] || catalogs.en;
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('all');
  const normalizedQuery = query.trim().normalize('NFKC').toLocaleLowerCase(locale);
  const visible = useMemo(() => repos.filter((repo) => {
    const categoryMatch = selected === 'all' || repo.category === selected;
    const searchText = [repo.name, repo.kind, repo.status, repo.summary, repo.keywords].join(' ').normalize('NFKC').toLocaleLowerCase(locale);
    return categoryMatch && (!normalizedQuery || searchText.includes(normalizedQuery));
  }), [repos, selected, normalizedQuery, locale]);

  return (
    <Layout
      title={translate({id:'ecosystem.meta.title', message:'Ecosystem directory'})}
      description={translate({id:'ecosystem.meta.description', message:'A practical directory for Deku Linux repositories and verified project boundaries.'})}
    >
      <main className="deku-page">
        <header className="deku-directory-hero">
          <div className="container">
            <p className="deku-eyebrow"><Translate id="ecosystem.eyebrow">Project directory / Public work</Translate></p>
            <h1><Translate id="ecosystem.title">One map for the whole project.</Translate><span><Translate id="ecosystem.titleAccent">Source, services, honest status.</Translate></span></h1>
            <p><Translate id="ecosystem.lede">Find the repository, documentation or contribution route that matches your goal. This directory joins the project's public work without presenting prototypes as finished services.</Translate></p>
          </div>
        </header>

        <section className="deku-section">
          <div className="container">
            <div className="deku-section-heading">
              <div><p className="deku-eyebrow"><Translate id="ecosystem.repos.kicker">01 / Source map</Translate></p><h2><Translate id="ecosystem.repos.title">Seven repositories.<span> Separate responsibilities.</span></Translate></h2></div>
              <p className="deku-section-intro"><Translate id="ecosystem.repos.intro">Search or filter the workstreams. The status labels summarize documented scope; inspect each repository's README and tests before relying on a capability.</Translate></p>
            </div>
            <div className="deku-directory-controls">
              <div className="deku-search">
                <label htmlFor="repo-search"><Translate id="ecosystem.search.label">Search repositories</Translate></label>
                <input id="repo-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={translate({id:'ecosystem.search.placeholder', message:'Try “package”, “build”, or “security”'})} autoComplete="off" />
              </div>
              <div className="deku-filter-list" role="group" aria-label={translate({id:'ecosystem.filter.aria',message:'Filter repositories'})}>
                {filters.map((filter) => (
                  <button key={filter.id} className="deku-filter" type="button" aria-pressed={selected === filter.id} onClick={() => setSelected(filter.id)}>{filter.label}</button>
                ))}
              </div>
            </div>
            <p className="deku-result-count" aria-live="polite">{translate({id:'ecosystem.resultCount',message:'{visible} of {total} repositories shown', values:{visible:visible.length,total:repos.length}})}</p>
            <div className="deku-repo-grid">
              {visible.map((repo) => (
                <article className="deku-repo-card" key={repo.name}>
                  <div className="deku-repo-top">
                    <div><span className="deku-repo-kind">{repo.kind}</span><h2>{repo.name}</h2></div>
                    <span className={`deku-status-pill ${repo.limited ? 'deku-status-pill--limited' : ''}`}>{repo.status}</span>
                  </div>
                  <p className="deku-repo-summary">{repo.summary}</p>
                  <div className="deku-repo-links">
                    <a href={`https://github.com/Deku-Foundation/${repo.name}`} target="_blank" rel="noopener noreferrer"><Translate id="ecosystem.repo.source">Source repository</Translate> ↗</a>
                    <a href={`https://github.com/Deku-Foundation/${repo.name}/issues`} target="_blank" rel="noopener noreferrer"><Translate id="ecosystem.repo.issues">Issues</Translate> ↗</a>
                  </div>
                </article>
              ))}
            </div>
            <div className="deku-note"><strong><Translate id="ecosystem.note.title">Read status carefully.</Translate></strong> <Translate id="ecosystem.note.body">These are documented scopes, not live CI telemetry. A passing prototype test does not prove an installable operating system or production service exists.</Translate></div>
          </div>
        </section>

        <section className="deku-section deku-section-soft">
          <div className="container">
            <div className="deku-section-heading">
              <div><p className="deku-eyebrow"><Translate id="ecosystem.areas.kicker">02 / Project areas</Translate></p><h2><Translate id="ecosystem.areas.title">One front door. <span>Clear paths to work.</span></Translate></h2></div>
              <p className="deku-section-intro"><Translate id="ecosystem.areas.intro">These are the current information and contribution areas. Production build, repository-signing and installation services are not available yet.</Translate></p>
            </div>
            <div className="deku-feature-grid">
              <article className="deku-feature"><span className="deku-feature-index">01 / DESIGN</span><h3><Translate id="ecosystem.area.architecture">Architecture</Translate></h3><p><Translate id="ecosystem.area.architectureBody">System boundaries, upstream research and compatibility decisions.</Translate></p><a href="https://deku-foundation.github.io/architecture/"><Translate id="ecosystem.area.open">Open area</Translate> ↗</a></article>
              <article className="deku-feature"><span className="deku-feature-index">02 / ENGINEERING</span><h3><Translate id="ecosystem.area.engineering">Engineering</Translate></h3><p><Translate id="ecosystem.area.engineeringBody">Repositories, issues, pull requests and automated checks.</Translate></p><a href="https://deku-foundation.github.io/development/"><Translate id="ecosystem.area.open2">Open workspace</Translate> ↗</a></article>
              <article className="deku-feature"><span className="deku-feature-index">03 / RELEASE</span><h3><Translate id="ecosystem.area.release">Release status</Translate></h3><p><Translate id="ecosystem.area.releaseBody">Know what exists before trying to install or test the distribution.</Translate></p><a href="https://deku-foundation.github.io/install/"><Translate id="ecosystem.area.statusLink">Check status</Translate> ↗</a></article>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
