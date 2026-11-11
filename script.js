/* Galerie Lumière — navigation et affichage des pages */

const works = [
  { image: "oeuvre-1.jpeg", medium: "Peinture acrylique" },
  { image: "oeuvre-2.jpeg", medium: "Peinture acrylique" },
  { image: "oeuvre-3.jpeg", medium: "Peinture acrylique" },
  { image: "oeuvre-4.jpeg", medium: "Peinture acrylique" },
  { image: "oeuvre-5.jpeg", medium: "Peinture acrylique" },
  { image: "oeuvre-6.jpeg", medium: "Peinture acrylique" },
  { image: "oeuvre-7.jpeg", medium: "Peinture acrylique" },
  { image: "oeuvre-8.jpeg", medium: "Aquarelle" },
  { image: "oeuvre-9.jpeg", medium: "Aquarelle" },
  { image: "oeuvre-10.jpeg", medium: "Aquarelle" },
  { image: "oeuvre-11.jpeg", medium: "Aquarelle" },
  { image: "oeuvre-12.jpeg", medium: "Aquarelle" },
  { image: "oeuvre-13.jpeg", medium: "Aquarelle" },
  { image: "oeuvre-14.jpeg", medium: "Aquarelle" },
  { image: "oeuvre-15.jpeg", medium: "Aquarelle" },
  { image: "oeuvre-16.jpeg", medium: "Aquarelle" },
  { image: "oeuvre-17.jpeg", medium: "Aquarelle" }
].map((work, index) => ({
  ...work,
  slug: `oeuvre-${String(index + 1).padStart(2, "0")}`,
  title: `Œuvre ${String(index + 1).padStart(2, "0")}`
}));

const app = document.getElementById("app");
const navLinks = [...document.querySelectorAll("nav a")];

function image(src, alt, className = "", lazy = false) {
  return `<img src="${src}" alt="${alt}" class="${className}" ${lazy ? 'loading="lazy"' : ""}>`;
}

function workCard(work) {
  return `<a class="work-card" href="#/oeuvres/${work.slug}">
    <div class="work-image-wrap">
      ${image(work.image, `${work.title} — Oneli.`, "work-image", true)}
    </div>
    <p class="work-title">${work.title}</p>
    <p class="work-medium">${work.medium}</p>
  </a>`;
}

function homePage() {
  return `<div class="page-in">

    <section class="hero">
      ${image("atelier-1.jpeg", "Oneli dans son atelier", "hero-image")}

      <div class="hero-top-shade"></div>
      <div class="hero-bottom-shade"></div>

      <div class="hero-content">
        <p class="eyebrow">Exposition en cours</p>

        <h1>Oneli.</h1>

        <p class="hero-copy">
          Portraits, paysages et esquisses de l'artiste Oneli,
          présentés à la Galerie Lumière, Nice.
        </p>

        <p class="hero-meta">
          <em>12 septembre — 13 décembre 2026</em>
          · 12 rue de l'Église, Nice
        </p>

        <div class="actions">
          <a class="button button-primary" href="#/oeuvres">
            Voir les œuvres
          </a>

          <a class="button button-secondary" href="#/visite">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>

    <section class="container featured">
      <div class="glass">

        <div class="section-heading">
          <h2>Œuvres choisies</h2>
          <a class="text-link" href="#/oeuvres">Tout voir →</a>
        </div>

        <div class="work-grid">
          ${works.slice(0, 3).map(workCard).join("")}
        </div>

      </div>
    </section>

    <section class="container home-sections">

      <div class="artist-panel">
        ${image("artiste.jpeg", "Oneli devant son chevalet", "artist-image", true)}

        <div class="artist-copy">
          <p class="eyebrow">L'artiste</p>

          <p class="artist-quote">
            Oneli, dans l'intimité de l'atelier.
          </p>

          <p class="muted-copy">
            Des portraits aux paysages, ses peintures font dialoguer
            la couleur, le regard et la lumière.
          </p>
        </div>
      </div>

      <div class="photo-pair">
        ${image("atelier-2.jpeg", "Oneli peignant près d'une cheminée", "", true)}
        ${image("atelier-1.jpeg", "Vue de l'atelier d'Oneli", "", true)}
      </div>

      <div class="glass visit-summary">
        <p class="eyebrow">Visite</p>

        <h3>
          12 rue de l'Église<br>
          06300 Nice
        </h3>

        <p>
          Mardi — samedi · 11h à 19h<br>
          Dimanche · 14h à 18h
        </p>

        <a class="button button-secondary" href="#/visite">
          Préparer sa visite
        </a>
      </div>

    </section>
  </div>`;
}

function catalogPage() {
  return `<main class="inner-page page-in">

    <p class="eyebrow">Exposition « Oneli. »</p>

    <h1>Les œuvres</h1>

    <p class="intro">
      Découvrez une sélection de peintures et d'aquarelles
      d'Oneli présentées à la Galerie Lumière.
    </p>

    <div class="catalog-grid">
      ${works.map(workCard).join("")}
    </div>

  </main>`;
}

function detailPage(slug) {
  const work = works.find(item => item.slug === slug);

  if (!work) return notFoundPage();

  return `<main class="inner-page page-in">

    <a class="back-link" href="#/oeuvres">
      ← Toutes les œuvres
    </a>

    <div class="detail-grid">

      ${image(work.image, `${work.title} — Oneli.`, "detail-image")}

      <div class="detail-copy">

        <p class="eyebrow">Exposition « Oneli. »</p>

        <h1>${work.title}</h1>

        <div class="detail-technique">
          <span>Technique</span>
          <span>${work.medium}</span>
        </div>

        <div class="actions">
          <a class="button button-primary" href="#/visite">
            Prendre rendez-vous
          </a>

          <a class="button button-secondary" href="#/oeuvres">
            Autres œuvres
          </a>
        </div>

      </div>
    </div>

  </main>`;
}

function visitPage() {
  return `<main class="inner-page page-in">

    <p class="eyebrow">Galerie Lumière — Nice</p>

    <h1>Visiter la galerie</h1>

    <p class="intro">
      L'entrée est libre pendant l'exposition « Oneli. ».
      Les rendez-vous privés se prennent par courriel ou par téléphone.
    </p>

    <div class="visit-grid">

      <section class="glass visit-card">
        <p class="eyebrow">Adresse</p>

        <h2>
          12 rue de l'Église<br>
          06300 Nice
        </h2>

        <p class="muted-copy">
          Vieux Nice, à deux pas du cours Saleya.
          Tramway ligne 1, arrêt Cathédrale — Vieille Ville.
        </p>

        <a
          class="button button-secondary"
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/search/?api=1&query=12+rue+de+l%27%C3%89glise+06300+Nice"
        >
          Itinéraire ↗
        </a>
      </section>

      <section class="glass visit-card">
        <p class="eyebrow">Horaires</p>

        <div class="hours-row">
          <span>Mardi — samedi</span>
          <span>11h à 19h</span>
        </div>

        <div class="hours-row">
          <span>Dimanche</span>
          <span>14h à 18h</span>
        </div>

        <div class="hours-row">
          <span>Lundi</span>
          <span>Fermé</span>
        </div>
      </section>

      <section class="glass visit-card wide">
        <p class="eyebrow">Rendez-vous privé</p>

        <p>
          Pour découvrir l'exposition en dehors des heures d'ouverture,
          écrivez-nous ou appelez la galerie.
        </p>

        <div class="contact-links">
          <a href="mailto:bonjour@galerie-lumiere.fr">
            bonjour@galerie-lumiere.fr
          </a>

          <a href="tel:+33493000000">
            +33 4 93 00 00 00
          </a>
        </div>
      </section>

    </div>
  </main>`;
}

function notFoundPage() {
  return `<section class="not-found page-in">
    <div>
      <h1>Page introuvable</h1>
      <a class="button button-primary" href="#/">
        Retour à l'exposition
      </a>
    </div>
  </section>`;
}

function render() {
  const path = decodeURIComponent(
    location.hash.replace(/^#/, "") || "/"
  );

  if (path === "/" || path === "") {
    app.innerHTML = homePage();
  } else if (path === "/oeuvres") {
    app.innerHTML = catalogPage();
  } else if (path.startsWith("/oeuvres/")) {
    app.innerHTML = detailPage(path.split("/").pop());
  } else if (path === "/visite") {
    app.innerHTML = visitPage();
  } else {
    app.innerHTML = notFoundPage();
  }

  const current =
    path === "/"
      ? "/"
      : path.startsWith("/oeuvres")
        ? "/oeuvres"
        : path;

  navLinks.forEach(link => {
    const active = link.dataset.route === current;

    link.classList.toggle("active", active);

    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);

render();