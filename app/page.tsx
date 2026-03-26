"use client";

import { useState } from "react";

type Folder = {
  slug: string;
  title: string;
  href: string;
  projects: { title: string; href: string }[];
};

const folders: Folder[] = [
  {
    slug: "web",
    title: "Web & Infrastructure/",
    href: "/category/web",
    projects: [
      { title: "Softwear Directory", href: "/project/softwear-directory" },
      { title: "Birdcall Wiki", href: "/project/birdcall-wiki" },
      { title: "Mumories", href: "/project/mumories" },
      { title: "IAMAIR", href: "/project/iamair" },
      { title: "EXDISCO", href: "/project/exdisco" },
      { title: "Phlea Farm", href: "/project/phlea-farm" },
      { title: "Theotocatou", href: "/project/theotocatou" },
      { title: "BRCA", href: "/project/brca" },
      { title: "BOOGIELAND", href: "/project/boogieland" },
      { title: "AmySuoWu", href: "/project/amysuowu" },
      { title: "FHM wiki", href: "/project/fhm-wiki" },
      { title: "Them All Magazine", href: "/project/them-all" },
      { title: "Prikbord Page", href: "/project/prikbord" },
      { title: "Varia Server", href: "/project/varia" },
      { title: "Permacomputing", href: "/project/pmc" },
    ],
  },
  {
    slug: "design",
    title: "Design/",
    href: "/category/design",
    projects: [
      { title: "Fed Up Poster", href: "/project/fed-up" },
      { title: "Servpub Cover", href: "/project/servpub" },
      { title: "Fhm Zine", href: "/project/fhm-zine" },
      { title: "The Library is Open", href: "/project/the-library-is-open" },
      { title: "Syster Papyri Magicae", href: "/project/systers" },
      { title: "Auditpedia", href: "/project/auditpedia" },
      { title: "BRCA", href: "/project/brca" },
      { title: "Cook 8", href: "/project/cook8" },
    ],
  },
  {
    slug: "publishing",
    title: "Publishing & Research/",
    href: "/category/publishing",
    projects: [
      { title: "Goind Hybrid", href: "/project/going-hybrid" },
      { title: "Infra Digging", href: "/project/infradigging" },
      { title: "Syster Systems", href: "/project/syster-systems" },
      { title: "The Library is Open", href: "/project/the-library-is-open" },
      { title: "The question about the commons", href: "/project/commons" },
      {
        title: "Questions around Networks",
        href: "/project/questions-on-networks",
      },
      { title: "ATNOFS", href: "/project/atnofs" },
    ],
  },
  {
    slug: "teaching",
    title: "Workshops & Teaching/",
    href: "/category/teaching",
    projects: [
      { title: "Fediverse", href: "/project/fediverse" },
      { title: "Marginal Conversations", href: "/project/marginal" },
      {
        title: "Feminist Futurotopias",
        href: "/project/feminist-futurotopias",
      },
      { title: "Tarot, Candles, Games", href: "/project/tarot" },
      { title: "Wireless Orchestra", href: "/project/wireless-orchestra" },
      { title: "cha-cha-chat", href: "/project/chachachat" },
      { title: "Zineing with FHM", href: "/project/zineing-fhm" },
      { title: "FHM series", href: "/project/fhm-series" },
      { title: "InfraSchool", href: "/project/infraschool" },
    ],
  },
  {
    slug: "exhibitions",
    title: "Events & Exhibitions/",
    href: "/category/exhibitions",
    projects: [
      { title: "Fem Fest", href: "/project/femfest" },
      { title: "RadioRaak", href: "/project/raak-radio" },
      { title: "Worm Radio", href: "/project/radio-worm" },
      { title: "Them All Podcast", href: "/project/them-all-podcast" },
      { title: "Radio Centraal", href: "/project/radio-centraal" },
      { title: "Voice in Conduct", href: "/project/voice-of-conduct" },
      { title: "Transmediale Participation", href: "/project/transmediale" },
    ],
  },
];

export default function Home() {
  return (
    <main className="site">
      <header className="site-header">
        <h1>
          Index of / <a href="/">Artemis Gryllaki</a> /
        </h1>

        <p className="intro">
          Web development, infrastructure, design, publishing, and collective
          practice
        </p>
        <p className="intro">
          — a selected index of projects, publications, workshops, and
          ongoing work.
        </p>
      </header>

      <div className="layout">
        <div className="main">
          <section className="index-columns" aria-label="Portfolio index">
            {folders.map((folder) => (
              <div className="index-item" key={folder.slug}>
                <div className="folder-row">
                  <img
                    className="folder-icon"
                    src="/img/ui/pixel-folder.png"
                    alt=""
                  />

                  <a className="folder-link" href={folder.href}>
                    {folder.title}
                  </a>
                </div>

                <ul className="sublist">
                  {folder.projects.map((project) => (
                    <li key={project.href}>
                      <a href={project.href}>{project.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>

        <aside className="meta" aria-label="Portfolio files">
          <div className="files-block">
            <div className="file-item">
              <img className="file-icon" src="/img/ui/text-file.png" alt="" />
              <a
                className="file-link"
                href="/about.txt"
                target="_blank"
                rel="noreferrer"
              >
                about.txt
              </a>
            </div>

            <div className="file-item">
              <img className="file-icon" src="/img/ui/text-file.png" alt="" />
              <a
                className="file-link"
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                cv.pdf
              </a>
            </div>

            <div className="file-item">
              <img className="file-icon" src="/img/ui/text-file.png" alt="" />
              <a
                className="file-link"
                href="/contact.txt"
                target="_blank"
                rel="noreferrer"
              >
                contact.txt
              </a>
            </div>
          </div>
        </aside>
      </div>

      <footer className="site-footer">
        <p>
          <i>Portfolio currently being updated.</i>
        </p>
      </footer>
    </main>
  );
}
