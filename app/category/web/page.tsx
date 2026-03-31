import styles from "./page.module.css";

const projects = [
  {
    slug: "exdisco",
    title: "EX DISCO Website",
    year: "2024–2025",
    images: [
      "/img/projects/exdisco/detail-01.png",
      // "/img/projects/exdisco/detail-02.png",
    ],
    excerpt:
      "Custom WordPress theme translating bold graphic layouts into a responsive frontend, with performance and mobile optimisation.",
    meta: ["WordPress", "Frontend", "Implementation", "Responsive"],
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
    slug: "syster-papyri-magicae",
    title: "Syster Papyri Magicae",
    year: "2020",
    images: [
      "/img/projects/syster-papyri-magicae/cover.png",
      "/img/projects/syster-papyri-magicae/detail-01.png",
    ],
    excerpt:
      "Experimental website exploring gender exclusion in tech through feminist stories, practices, and references, using narrative interface design and playful, editable structures.",
    meta: ["Web platform", "Wiki", "Interaction design"],
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
      "Lightweight portfolio website for designer Kat, built with HTML, CSS, and JavaScript. Focused on clarity, performance, and responsive behaviour.",
    meta: ["Frontend", "Static site", "Responsive", "Hosting"],
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
      "Custom WordPress site for Boogieland Boxing Club, built with a flexible block-based system and integrated events, scheduling, and booking features.",
    meta: ["WordPress", "Frontend", "Blocks", "Maintenance"],
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
      "Redevelopment of artist Amy Suo Wu’s website from Drupal to a custom WordPress theme, with content restructuring, frontend rebuild, and new mobile view.",
    meta: ["WordPress", "Frontend", "Migration", "Maintenance"],
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
      "Re-development of the Them, All publishing platform into a lightweight static site. Deployed on Systerserver, a feminist community-run infrastructure.",
    meta: ["Frontend", "Static site", "Migration", "FOSS hosting"],
  },
  {
    slug: "brca",
    title: "Borough Road Collection Archive",
    year: "2023",
    images: [
      "/img/projects/brca/detail-01.png",
      "/img/projects/brca/detail-02.png",
    ],
    excerpt:
      "Experimental MediaWiki-based archive exploring collective annotation and alternative ways of engaging with digital collections. Visitors act as curators and storytellers through speculative promts",
    meta: ["Web platform", "Interaction design", "MediaWiki", "Research"],
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
      "Custom WordPress portfolio for 37° Architecture Studio, focusing on precise layout implementation, typography, and a calm browsing experience.",
    meta: ["WordPress", "Frontend", "CMS", "Hosting"],
  },
  {
    slug: "softwear-directory",
    title: "Softwear Directory",
    year: "2023–2025",
    images: [
      "/img/projects/softwear-directory/detail-01.png",
      "/img/projects/softwear-directory/cover.png",
    ],
    excerpt:
      "Structured, searchable publishing directory built from an archive and shaped for browsing, filtering, and long-term editorial use.",
    meta: ["MediaWiki", "Semantic MediaWiki", "JavaScript"],
  },
  {
    slug: "prikbord",
    title: "Prikbord.page",
    year: "2023",
    images: ["/img/projects/prikbord/detail-01.png"],
    excerpt:
      "Infrastructure and backend development for Prikbord.page, a collective agenda for cultural events in Rotterdam. Includes server migration, reverse proxy setup, backups, and ongoing system administration.",
    meta: ["Backend", "Infrastructure", "Sysadmin", "Migration"],
  },
  {
    slug: "feminist-hack-meetings",
    title: "Feminist Hack Meetings Wiki",
    year: "2021–2024",
    images: [
      "/img/projects/fhm-wiki/cover.png",
      "/img/projects/fhm-wiki/detail-01.png",
    ],
    excerpt:
      "Wiki documenting the Feminist Hack Meetings (FHM), archiving sessions, discussions, and collective outputs from research gatherings on feminist technological practices.",
    meta: ["Wiki", "Documentation", "Community infrastructure"],
  },
  {
    slug: "tap-peertube",
    title: "TAP Video Platform",
    year: "2023",
    images: ["/img/projects/tube/detail-01.png"],
    excerpt:
      "Collective work, setting up and customising a PeerTube instance for flinta* artists, researchers, and activists. Deployed on systerserver, the project supports autonomous publishing, open licenses, and alternative distribution infrastructures.",
    meta: ["PeerTube", "Infrastructure", "FOSS", "Hosting"],
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
    slug: "mumories",
    title: "Mumories",
    year: "2023",
    images: ["/img/projects/mumories/cover.png"],
    excerpt:
      "Audio-memory platform for visitors to record exhibition memories in a living archive research context.",
    meta: ["Node.js", "Python", "HTML/CSS/JS"],
  },
];

export default function WebCategoryPage() {
  return (
    <main className="site">
      <header className="site-header">
        <h1>
          Index of / <a href="/">Artemis Gryllaki</a> /{" "}
          <a href="/category/web" className="active">Web &amp; Infrastructure</a> /
        </h1>

        <p className="intro">
          Websites and infrastructure for cultural, research, collective, and commissioned projects.
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
              {project.excerpt}
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
