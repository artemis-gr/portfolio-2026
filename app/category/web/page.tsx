import styles from "./page.module.css";

const projects = [
  {
    slug: "softwear-directory",
    title: "Softwear Directory",
    year: "2023–2025",
    images: [
      "/img/projects/softwear-directory/cover.png",
      // "/img/projects/softwear-directory/detail-01.png",
    ],
    excerpt:
      "Structured, searchable publishing directory built from an archive and shaped for browsing, filtering, and long-term editorial use.",
    meta: ["MediaWiki", "Semantic MediaWiki", "JavaScript"],
  },
  {
    slug: "iamair",
    title: "IAMAIR",
    year: "2024–2025",
    images: [
      "/img/projects/iamair/cover.png",
      "/img/projects/iamair/detail-01.png",
    ],
    excerpt:
      "Website with a light editorial structure, balancing atmosphere, clarity, and navigation for a cultural mediation agency.",
    meta: ["Frontend", "Layout", "Visual system"],
  },
  {
    slug: "mumories",
    title: "Mumories",
    year: "2023",
    images: ["/img/projects/mumories/cover.png"],
    excerpt:
      "Audio-memory platform for visitors to record exhibition memories in a living archive research context.",
    meta: ["Node.js", "Python", "HTML/CSS/JS"],
  },
  {
    slug: "birdcall-wiki",
    title: "Birdcall Wiki",
    year: "2024–2025",
    images: ["/img/projects/birdcall-wiki/cover.png"],
    excerpt:
      "MediaWiki-based platform for collaborative reading, contextual notes, and shared community documentation.",
    meta: ["Linux", "MediaWiki", "Workflows"],
  },
  {
    slug: "exdisco",
    title: "EX DISCO Website",
    year: "2024–2025",
    images: [
      "/img/projects/exdisco/detail-01.png",
      // "/img/projects/exdisco/detail-02.png",
    ],
    excerpt:
      "Development of a custom WordPress theme for EX DISCO, based on a supplied visual identity and UI. The project focused on translating bold graphic layouts into a responsive frontend, refining performance, and reworking the mobile experience.",
    meta: ["WordPress", "Frontend", "Implementation", "Responsive"],
  },
  {
    slug: "amysuowu",
    title: "Amy Suo Wu Website",
    year: "2024–2025",
    images: [
      "/img/projects/amysuowu/detail-01.png",
      // "/img/projects/amysuowu/detail-02.png",
    ],
    excerpt:
      "Redevelopment of artist Amy Suo Wu’s website from Drupal to a custom WordPress theme. The project involved restructuring content, rebuilding the frontend, and reworking the mobile experience. Ongoing work includes server setup, hosting on a VPS, backups, and maintenance.",
    meta: ["WordPress", "Frontend", "Migration", "Maintenance"],
  },
  {
    slug: "boogieland",
    title: "Boogieland Website",
    year: "2024–2025",
    images: [
      "/img/projects/boogieland/detail-01.png",
      "/img/projects/boogieland/detail-02.png",
    ],
    excerpt:
      "Development of a custom WordPress platform for Boogieland Boxing Club, in collaboration with the graphic design team. The project includes a flexible block-based system for building pages, alongside integrated features such as events, scheduling, news, and booking connections. Ongoing work covers hosting, server management, and maintenance.",
    meta: [
      "WordPress",
      "Frontend",
      "Blocks",
      "Maintenance",
    ],
  },
  {
    slug: "kat",
    title: "Kat Portfolio Website",
    year: "2024",
    images: [
      "/img/projects/kat/detail-01.png",
      "/img/projects/kat/detail-02.png",
    ],
    excerpt:
      "Development of a lightweight portfolio website for designer Kat, based on a supplied visual identity. Built with static HTML, CSS, and JavaScript, focusing on clarity, performance, and responsive behaviour. Includes setup, deployment, and hosting.",
    meta: ["Frontend", "Static site", "Responsive", "Hosting"],
  },
  {
    slug: "brca",
    title: "Borough Road Collection Archive",
    year: "2023",
    images: [
      // "/img/projects/brca/detail-01.png",
      "/img/projects/brca/detail-02.png",
    ],
    excerpt:
      "Design and development of an experimental online archive built on MediaWiki, exploring collective annotation and alternative ways of engaging with digital collections. Created in collaboration with a research team at London South Bank University, the platform invites users to act as curators, storytellers, and interpreters through structured prompts and interactive roles.",
    meta: ["Web platform", "Interaction design", "MediaWiki", "Research"],
  },
  {
    slug: "them-all",
    title: "Them, All Magazine",
    year: "2023",
    images: [
      "/img/projects/them-all/detail-01.png",
      "/img/projects/them-all/detail-02.png",
    ],
    excerpt:
      "Re-development of an online publishing platform for Them, All, a research-driven magazine exploring feminist, queer, and antiracist perspectives. Migrated from a previous system to a lightweight static website, improving performance and maintainability while preserving the project's experimental structure. Deployed and hosted on Systerserver, a feminist community-run infrastructure using open-source tools.",
    meta: ["Frontend", "Static site", "Migration", "FOSS hosting"],
  },
  {
    slug: "37-degrees",
    title: "37° Architecture Studio",
    year: "2024",
    images: [
      "/img/projects/37/detail-01.png",
      "/img/projects/37/detail-02.png",
    ],
    excerpt:
      "Development of a custom WordPress portfolio for 37° Architecture Studio, based on a supplied design. Focus on precise layout implementation, typography, and a calm browsing experience for presenting architectural projects. Includes CMS setup, deployment, and hosting.",
    meta: ["WordPress", "Frontend", "CMS", "Hosting"],
  },
  {
    slug: "tap-peertube",
    title: "TAP Video Platform",
    year: "2023",
    images: ["/img/projects/tube/detail-01.png"],
    excerpt:
      "Setup and customization of a PeerTube-based video platform for a collective of artists, researchers, and activists. Deployed on a community-run server, the project supports autonomous publishing, open licenses, and alternative distribution infrastructures. Includes theming, configuration, and ongoing maintenance.",
    meta: ["PeerTube", "Infrastructure", "FOSS", "Hosting"],
  },
  {
    slug: "prikbord",
    title: "Prikbord.page",
    year: "2023",
    images: [
      "/img/projects/prikbord/detail-01.png",
    ],
    excerpt:
      "Infrastructure and backend development for Prikbord.page, a collective agenda for cultural events in Rotterdam. Work included server migration, reverse proxy setup, backups, and ongoing system administration to support a shared platform used by independent venues and communities.",
    meta: ["Backend", "Infrastructure", "Sysadmin", "Migration"],
  },
];

export default function WebCategoryPage() {
  return (
    <main className="site">
      <header className="site-header">
        <h1>
          Index of / <a href="/">Artemis Gryllaki</a> /{" "}
          <a href="/category/web">Web &amp; Infrastructure</a> /
        </h1>

        <p className="intro">
          Websites, publishing platforms, backend systems, hosting, deployment,
          and infrastructure work for cultural, editorial, and collective
          contexts.
        </p>
      </header>

      <div className={styles.topline}>
        <a className={styles.backLink} href="/">
          &lt;&lt; Parent Directory
        </a>
      </div>

      <section
        className={styles.catalog}
        aria-label="Web and infrastructure projects"
      >
        {projects.map((project) => (
          <article className={styles.entry} key={project.slug}>
            <div className={styles.previewStack}>
              {project.images.map((image, index) => (
                <a
                  key={image}
                  className={styles.preview}
                  href={`/project/${project.slug}`}
                  aria-label={`Open ${project.title}`}
                >
                  <img
                    src={image}
                    alt={`${project.title} preview ${index + 1}`}
                  />
                </a>
              ))}
            </div>

            <div className={styles.header}>
              <h2 className={styles.title}>
                <a href={`/project/${project.slug}`}>{project.title}</a>
              </h2>
            </div>

            <span className={styles.excerpt}>
              {project.year} — {project.excerpt}
            </span>

            <ul className={styles.meta}>
              {project.meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <footer className="site-footer">
        <p>
          <i>Web &amp; Infrastructure archive.</i>
        </p>
      </footer>
    </main>
  );
}
