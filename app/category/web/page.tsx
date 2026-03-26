import styles from "./page.module.css";

const projects = [
  {
    slug: "softwear-directory",
    title: "Softwear Directory",
    year: "2023–2025",
    images: [
      "/img/projects/softwear-directory/cover.png",
      "/img/projects/softwear-directory/detail-01.png",
    ],
    excerpt:
      "Structured, searchable publishing directory built from an archive and shaped for browsing, filtering, and long-term editorial use.",
    meta: ["MediaWiki", "Semantic MediaWiki", "JavaScript"],
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
              <p className={styles.kicker}>{project.year}</p>
              <h2 className={styles.title}>
                <a href={`/project/${project.slug}`}>{project.title}</a>
              </h2>
            </div>

            <p className={styles.excerpt}>{project.excerpt}</p>

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
