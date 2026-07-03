// Rendering helpers keep index.html template-like and make the site easy to edit.
const data = SITE_DATA;

const $ = (selector) => document.querySelector(selector);

function makeLink(item, className = "") {
  const link = document.createElement("a");
  link.textContent = item.label;
  link.href = item.href;
  link.className = className;
  if (/^https?:\/\//.test(item.href)) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
}

function renderProfileLinks() {
  const container = $("#profile-links");
  data.profile.links.forEach((item) => {
    container.appendChild(makeLink(item, "profile-link"));
  });
}

function renderProfile() {
  $("#profile-name").textContent = data.profile.name;
  $("#profile-name-cn").textContent = data.profile.chineseName;
  $("#profile-title").textContent = data.profile.title;
  $("#profile-affiliation").textContent = data.profile.affiliation;
  $("#profile-location").textContent = data.profile.location;

  const portrait = $("#portrait");
  if (data.profile.photo) {
    const img = document.createElement("img");
    img.src = data.profile.photo;
    img.alt = `${data.profile.name} portrait`;
    portrait.appendChild(img);
  } else {
    const initials = document.createElement("span");
    initials.textContent = data.profile.name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    portrait.appendChild(initials);
  }
}

function renderTags(selector, tags) {
  const container = $(selector);
  tags.forEach((tag) => {
    const badge = document.createElement("span");
    badge.textContent = tag;
    container.appendChild(badge);
  });
}

function renderNews() {
  const list = $("#news-list");
  data.news.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<time>${item.date}</time><span>${item.text}</span>`;
    list.appendChild(li);
  });
}

function renderPublications() {
  const list = $("#publication-list");
  data.publications.forEach((paper) => {
    const item = document.createElement("li");
    item.className = "publication";

    const title = document.createElement("h3");
    title.textContent = paper.title;
    item.appendChild(title);

    const authors = document.createElement("p");
    authors.className = "authors";
    authors.textContent = paper.authors;
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

    // Disabled badges preserve Paper/Code markers until a public URL is added.
    const actions = document.createElement("div");
    actions.className = "paper-actions";
    actions.appendChild(publicationAction("Paper", paper.paper, "Paper TBD"));
    actions.appendChild(publicationAction("Code", paper.code, "Code TBD"));
    item.appendChild(actions);

    list.appendChild(item);
  });
}

function publicationAction(label, href, fallbackLabel) {
  if (href) {
    return makeLink({ label, href }, "paper-link");
  }

  const span = document.createElement("span");
  span.className = "paper-link disabled";
  span.textContent = fallbackLabel;
  span.setAttribute("aria-disabled", "true");
  return span;
}

function renderTimeline(selector, items) {
  const container = $(selector);
  items.forEach((entry) => {
    const block = document.createElement("article");
    block.className = "timeline-item";
    block.innerHTML = `
      <div class="timeline-date">${entry.period}</div>
      <div>
        <h3>${entry.title}</h3>
        <p class="role">${entry.role}</p>
        <p>${entry.summary}</p>
      </div>
    `;
    container.appendChild(block);
  });
}

function renderSkills() {
  const container = $("#skill-list");
  data.skills.forEach((skill) => {
    const group = document.createElement("section");
    group.className = "skill-group";
    group.innerHTML = `<h3>${skill.group}</h3><p>${skill.items.join(", ")}</p>`;
    container.appendChild(group);
  });
}

function renderAwards() {
  const list = $("#award-list");
  data.awards.forEach(([year, award]) => {
    const item = document.createElement("li");
    item.innerHTML = `<span>${year}</span><p>${award}</p>`;
    list.appendChild(item);
  });
}

function init() {
  renderProfile();
  $("#bio").textContent = data.bio;
  renderProfileLinks();
  renderTags("#research-tags", data.researchInterests);
  renderNews();
  renderPublications();
  renderTimeline("#project-list", data.projects);
  renderTimeline("#experience-list", data.experience);
  renderTimeline("#education-list", data.education);
  renderSkills();
  renderAwards();
}

init();
