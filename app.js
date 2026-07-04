// Shared renderer for every static page. Each HTML file declares its page type
// with body[data-page], then this script fills only the containers on that page.
const data = SITE_DATA;
const currentPage = document.body.dataset.page;

const $ = (selector) => document.querySelector(selector);

const ICONS = {
  email:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.75 5.75h16.5v12.5H3.75z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m4.4 6.7 7.6 6.1 7.6-6.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  scholar:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 8.1 12 13.2l9.2-5.1L12 3Z" fill="currentColor"/><path d="M6.2 11.1v4.1c1.5 1.9 3.4 2.8 5.8 2.8s4.3-.9 5.8-2.8v-4.1L12 14.3l-5.8-3.2Z" fill="currentColor"/><path d="M20.2 9.4v5.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.12.68-3.78-1.33-3.78-1.33-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1 1.55 2.05 3.19 1.46.1-.72.39-1.22.71-1.5-2.49-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15A10.7 10.7 0 0 1 12 6.2c.95 0 1.9.13 2.8.38 2.13-1.45 3.07-1.15 3.07-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.25-5.12 5.53.41.35.77 1.03.77 2.08v3.09c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z"/></svg>',
};

function makeLink(item, className = "") {
  const link = document.createElement("a");
  link.href = item.href;
  link.className = className;
  if (/^https?:\/\//.test(item.href)) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  if (item.icon) {
    link.innerHTML = `${ICONS[item.icon] || ""}<span>${item.label}</span>`;
  } else {
    link.textContent = item.label;
  }
  return link;
}

function renderProfile() {
  const profile = $(".profile");
  profile.innerHTML = "";

  const portrait = document.createElement("div");
  portrait.className = "portrait";
  const img = document.createElement("img");
  img.src = data.profile.photo;
  img.alt = `${data.profile.name} portrait`;
  portrait.appendChild(img);
  profile.appendChild(portrait);

  const name = document.createElement("h1");
  name.textContent = data.profile.name;
  profile.appendChild(name);

  const chineseName = document.createElement("p");
  chineseName.className = "name-cn";
  chineseName.textContent = data.profile.chineseName;
  profile.appendChild(chineseName);

  const title = document.createElement("p");
  title.className = "profile-title";
  title.textContent = data.profile.title;
  profile.appendChild(title);

  for (const value of [
    data.profile.affiliation,
    data.profile.advisor,
    data.profile.location,
  ]) {
    const line = document.createElement("p");
    line.className = "profile-meta";
    line.textContent = value;
    profile.appendChild(line);
  }

  const links = document.createElement("nav");
  links.className = "profile-links";
  links.setAttribute("aria-label", "External links");
  data.profile.links.forEach((item) => links.appendChild(makeLink(item, "profile-link")));
  profile.appendChild(links);
}

function renderNav() {
  const nav = $(".top-nav");
  if (!nav) return;

  data.nav.forEach(([label, href, key]) => {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    if (key === currentPage) link.setAttribute("aria-current", "page");
    nav.appendChild(link);
  });
}

function renderTags(selector, tags) {
  const container = $(selector);
  if (!container) return;

  tags.forEach((tag) => {
    const badge = document.createElement("span");
    badge.textContent = tag;
    container.appendChild(badge);
  });
}

function renderTimeline(selector, items) {
  const container = $(selector);
  if (!container) return;

  items.forEach((entry) => {
    const block = document.createElement("article");
    block.className = "timeline-item";
    block.innerHTML = `
      <div class="timeline-date">${entry.period}</div>
      <div>
        <h3>${entry.title}</h3>
        <p class="role">${entry.role}</p>
        ${entry.summary ? `<p>${entry.summary}</p>` : ""}
      </div>
    `;
    container.appendChild(block);
  });
}

function renderBio() {
  const bio = $("#bio");
  if (!bio) return;

  const highlights = data.bioHighlights || [];
  const pattern = highlights
    .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

  if (!pattern) {
    bio.textContent = data.bio;
    return;
  }

  data.bio.split(new RegExp(`(${pattern})`, "g")).forEach((part) => {
    if (!part) return;
    if (highlights.includes(part)) {
      const span = document.createElement("strong");
      span.className = "highlight-name";
      span.textContent = part;
      bio.appendChild(span);
    } else {
      bio.append(part);
    }
  });
}

function renderPublications() {
  const container = $("#publication-groups");
  if (!container) return;

  const sections = [
    {
      title: "First-Author / Co-first Publications",
      papers: data.publications.filter((paper) => paper.primaryContribution),
    },
    {
      title: "Other Publications",
      papers: data.publications.filter((paper) => !paper.primaryContribution),
    },
  ];

  sections.forEach((section) => {
    const sectionBlock = document.createElement("section");
    sectionBlock.className = "publication-category";
    sectionBlock.innerHTML = `<h3>${section.title}</h3>`;

    const years = [...new Set(section.papers.map((paper) => paper.year))].sort(
      (a, b) => Number(b) - Number(a),
    );

    years.forEach((year) => {
      const group = document.createElement("section");
      group.className = "publication-year";
      group.innerHTML = `<h4>${year}</h4>`;

      const list = document.createElement("ol");
      list.className = "publication-list";

      section.papers
        .filter((paper) => paper.year === year)
        .forEach((paper) => list.appendChild(renderPublication(paper)));

      group.appendChild(list);
      sectionBlock.appendChild(group);
    });

    container.appendChild(sectionBlock);
  });
}

function renderPublication(paper) {
  const item = document.createElement("li");
  item.className = "publication";

  const header = document.createElement("div");
  header.className = "publication-header";
  const title = document.createElement("h4");
  title.textContent = paper.title;
  header.appendChild(title);
  item.appendChild(header);

  const authors = document.createElement("p");
  authors.className = "authors";
  paper.authors.forEach((author, index) => {
    authors.appendChild(renderAuthor(author, paper));
    if (index < paper.authors.length - 1) authors.append(", ");
  });
  item.appendChild(authors);

  const venue = document.createElement("p");
  venue.className = "venue";
  venue.textContent = paper.venue;
  item.appendChild(venue);

  const meta = document.createElement("div");
  meta.className = "publication-meta";
  paper.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    meta.appendChild(span);
  });
  item.appendChild(meta);

  // Every publication keeps visible Paper and Code markers; unavailable links
  // render as disabled badges rather than disappearing.
  const actions = document.createElement("div");
  actions.className = "paper-actions";
  actions.appendChild(publicationAction("Paper", paper.paper, "Paper TBD"));
  actions.appendChild(publicationAction("Code", paper.code, "Code TBD"));
  item.appendChild(actions);

  return item;
}

function renderAuthor(author, paper) {
  const wrapper = document.createElement("span");
  wrapper.className = "author-with-marker";

  const name = document.createElement("strong");
  name.className = "author-name";
  name.textContent = author;
  if (author === data.profile.name) name.classList.add("self-author");
  wrapper.appendChild(name);

  authorMarkers(author, paper).forEach((markerText) => {
    const marker = document.createElement("sup");
    marker.className = "author-marker";
    marker.textContent = markerText;
    wrapper.appendChild(marker);
  });

  return wrapper;
}

function authorMarkers(author, paper) {
  const markers = [];
  if ((paper.equalContributionAuthors || []).includes(author)) markers.push("*");
  if ((paper.correspondingAuthors || []).includes(author)) markers.push("#");
  return markers;
}

function publicationAction(label, href, fallbackLabel) {
  if (href) return makeLink({ label, href }, "paper-link");

  const span = document.createElement("span");
  span.className = "paper-link disabled";
  span.textContent = fallbackLabel;
  span.setAttribute("aria-disabled", "true");
  return span;
}

function renderAwards() {
  const list = $("#award-list");
  if (!list) return;

  data.awards.forEach(([year, award]) => {
    const item = document.createElement("li");
    item.innerHTML = `<span>${year}</span><p>${award}</p>`;
    list.appendChild(item);
  });
}

function init() {
  renderProfile();
  renderNav();

  renderBio();
  renderTags("#research-tags", data.researchInterests);
  renderTimeline("#education-list", data.education);
  renderTimeline("#project-list", data.projects);
  renderPublications();
  renderAwards();
}

init();
