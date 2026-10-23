import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const layers = [
  {
    index: '01',
    title: <Translate id="home.layer.packages">Package system</Translate>,
    detail: <Translate id="home.layer.packagesDetail">Metadata and dependency planning</Translate>,
    mark: '◇',
  },
  {
    index: '02',
    title: <Translate id="home.layer.build">Build validation</Translate>,
    detail: <Translate id="home.layer.buildDetail">Pinned inputs and bounded plans</Translate>,
    mark: '↗',
  },
  {
    index: '03',
    title: <Translate id="home.layer.system">System composition</Translate>,
    detail: <Translate id="home.layer.systemDetail">Manifest and profile validation</Translate>,
    mark: '⌘',
  },
  {
    index: '04',
    title: <Translate id="home.layer.install">Installation planning</Translate>,
    detail: <Translate id="home.layer.installDetail">Non-destructive plan checks</Translate>,
    mark: '＋',
  },
];

export default function Home() {
  return (
    <Layout
      title={translate({id: 'home.meta.title', message: 'Built in the open'})}
      description={translate({
        id: 'home.meta.description',
        message: 'Deku Linux is an independent Linux distribution in its foundation and prototype stage. Follow the public source, architecture and engineering roadmap.',
      })}
    >
      <main className="deku-page">
        <section className="deku-hero">
          <div className="container deku-hero-grid">
            <div>
              <p className="deku-eyebrow"><Translate id="home.eyebrow">Independent Linux project</Translate></p>
              <h1>
                <Translate id="home.titleLead">A Linux desktop.</Translate>
                <span><Translate id="home.titleAccent">In development.</Translate></span>
              </h1>
              <p className="deku-hero-copy">
                <Translate id="home.lede">
                  Deku Linux is an early-stage independent distribution. Its public repositories contain prototypes for package metadata, build-plan validation, system composition and non-destructive installer planning. No installable ISO or supported release is available.
                </Translate>
              </p>
              <div className="deku-actions">
                <Link className="button button--secondary button--lg" to="/ecosystem/">
                  <Translate id="home.ctaEcosystem">Explore the ecosystem</Translate> <span aria-hidden="true">↗</span>
                </Link>
                <Link className="button button--outline button--lg" to="/docs/">
                  <Translate id="home.ctaDocs">Read the technical overview</Translate> <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>

            <aside className="deku-system-panel" aria-label={translate({id: 'home.panel.aria', message: 'Deku Linux component overview'})}>
              <div className="deku-panel-top">
                <span><Translate id="home.panel.label">System map / Current prototypes</Translate></span>
                <span className="deku-panel-state"><Translate id="home.panel.status">In development</Translate></span>
              </div>
              <h2 className="deku-panel-title"><Translate id="home.panel.title">Separate components. Explicit boundaries.</Translate></h2>
              <p className="deku-panel-copy"><Translate id="home.panel.copy">Each repository has a defined responsibility. End-to-end image production and installation are still future milestones.</Translate></p>
              <div className="deku-layer-list">
                {layers.map((layer) => (
                  <div className="deku-layer" key={layer.index}>
                    <span className="deku-layer-index">{layer.index}</span>
                    <span><strong>{layer.title}</strong><small>{layer.detail}</small></span>
                    <span className="deku-layer-mark" aria-hidden="true">{layer.mark}</span>
                  </div>
                ))}
              </div>
              <div className="deku-panel-foot">
                <span><Translate id="home.panel.footerLeft">Public engineering</Translate></span>
                <span><Translate id="home.panel.footerRight">Status: prototype</Translate></span>
              </div>
            </aside>
          </div>
        </section>

        <section className="deku-status-band" aria-label={translate({id: 'home.status.aria', message: 'Release status'})}>
          <div className="container deku-status-row">
            <div>
              <strong><Translate id="home.status.title">Foundation and prototype stage</Translate></strong>
              <p><Translate id="home.status.body">Source and documentation are public; a bootable operating-system image is not.</Translate></p>
            </div>
            <Link to="https://deku-foundation.github.io/install/">
              <Translate id="home.status.link">Check release status</Translate> <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="deku-section">
          <div className="container">
            <div className="deku-section-heading">
              <div>
                <p className="deku-eyebrow"><Translate id="home.principles.kicker">01 / Engineering principles</Translate></p>
                <h2><Translate id="home.principles.title">Build the trust path before the release.</Translate></h2>
              </div>
              <p className="deku-section-intro">
                <Translate id="home.principles.intro">A distribution needs more than a desktop theme. It must explain where software comes from, how it is built, how it is installed and how a failed change can be recovered.</Translate>
              </p>
            </div>
            <div className="deku-feature-grid">
              <article className="deku-feature">
                <span className="deku-feature-index">01 / SOURCE</span>
                <h3><Translate id="home.feature.source.title">Reviewable decisions</Translate></h3>
                <p><Translate id="home.feature.source.body">Architecture choices, repository changes and known limits belong in public version control, backed by source and tests.</Translate></p>
                <Link to="/docs/architecture/"><Translate id="home.feature.source.link">Read architecture notes</Translate> ↗</Link>
              </article>
              <article className="deku-feature">
                <span className="deku-feature-index">02 / SECURITY</span>
                <h3><Translate id="home.feature.security.title">Narrow trust boundaries</Translate></h3>
                <p><Translate id="home.feature.security.body">Pinned inputs, bounded parsers, least privilege and isolated execution are requirements, not launch slogans.</Translate></p>
                <Link to="/docs/security/"><Translate id="home.feature.security.link">Review security constraints</Translate> ↗</Link>
              </article>
              <article className="deku-feature">
                <span className="deku-feature-index">03 / RECOVERY</span>
                <h3><Translate id="home.feature.recovery.title">Evidence before promises</Translate></h3>
                <p><Translate id="home.feature.recovery.body">Installation, upgrades, rollback and boot need repeatable integration tests before a release can be called ready.</Translate></p>
                <Link to="https://deku-foundation.github.io/roadmap/"><Translate id="home.feature.recovery.link">View release gates</Translate> ↗</Link>
              </article>
            </div>
          </div>
        </section>

        <section className="deku-section deku-section-soft">
          <div className="container">
            <div className="deku-section-heading">
              <div>
                <p className="deku-eyebrow"><Translate id="home.repositories.kicker">02 / Public repositories</Translate></p>
                <h2><Translate id="home.repositories.title">One project, clear responsibilities.</Translate></h2>
              </div>
              <p className="deku-section-intro"><Translate id="home.repositories.intro">The work is divided so each component can be read, tested and reviewed on its own. The directory records what each repository does today.</Translate></p>
            </div>
            <div className="deku-repo-strip">
              <div className="deku-repo-mini"><code>deku-recipes</code><p><Translate id="home.repo.recipes">Source pins and package recipe metadata.</Translate></p></div>
              <div className="deku-repo-mini"><code>deku-build</code><p><Translate id="home.repo.build">Build-plan validation, not package execution.</Translate></p></div>
              <div className="deku-repo-mini"><code>deku-pkg</code><p><Translate id="home.repo.pkg">Metadata, digests and dependency planning.</Translate></p></div>
              <div className="deku-repo-mini"><code>deku-system</code><p><Translate id="home.repo.system">Validated system-composition manifests.</Translate></p></div>
            </div>
            <div className="deku-release-warning">
              <span aria-hidden="true">i</span>
              <p><strong><Translate id="home.notice.title">No official ISO is available.</Translate></strong> <Translate id="home.notice.body">The package manager, build tooling, image composition and installer remain prototypes. The site will not advertise downloads, dates or capabilities without a verifiable artifact.</Translate></p>
            </div>
            <div className="deku-actions">
              <Link className="button button--secondary" to="/ecosystem/"><Translate id="home.repositories.cta">Open the ecosystem directory</Translate> ↗</Link>
              <Link className="button button--outline" to="/updates/"><Translate id="home.updates.cta">Follow engineering updates</Translate> ↗</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
