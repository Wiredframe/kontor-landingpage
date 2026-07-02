# Kontor – Landingpage

Marketing-Website für **Kontor**, die native macOS-Buchhaltungs-App für
KSK-versicherte Freiberufler (EÜR, UStVA, KSK, Rücklagen – lokal auf dem Mac).

[![Website ansehen](https://img.shields.io/badge/Website-ansehen-7c3aed?style=for-the-badge&logo=safari&logoColor=white)](https://wiredframe.github.io/kontor-landingpage/) [![Spenden](https://img.shields.io/badge/Spenden-Stripe-e11d48?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://wiredframe.github.io/kontor-landingpage/#spenden) [![Lighthouse 4×100](https://img.shields.io/badge/Lighthouse-4%20%C3%97%20100-0cce6b?style=for-the-badge)](https://wiredframe.github.io/kontor-landingpage/)

**Live: [wiredframe.github.io/kontor-landingpage](https://wiredframe.github.io/kontor-landingpage/)** · Quelle: `index.html`

Statische Single-Page-Site: eine einzige `index.html` mit Tailwind (Play-CDN),
der Schrift *Plus Jakarta Sans* und browsernativen scroll-driven Animations.
Light/Dark/System-Umschaltung, die echte App-UI als HTML/CSS nachgebaut, eine
Screenshot-Galerie sowie Impressum/Datenschutz/Nutzungsbedingungen als Modal.

## Lokal ansehen

Es ist reines statisches HTML – ein beliebiger Static-Server genügt:

```bash
python3 -m http.server 8731
# danach http://localhost:8731 öffnen
```

## CSS bauen (Tailwind)

Das Styling nutzt Tailwind, wird aber **vorkompiliert** – keine Runtime-Play-CDN mehr
(das vermeidet Flash-of-unstyled-content + Layout-Shift und lädt nichts von Dritt-Servern).
Nach Änderungen an Tailwind-Klassen in `index.html` das CSS neu bauen:

```bash
npm install          # einmalig
npm run build:css    # erzeugt assets/tailwind.css (minifiziert)
# npm run watch:css  # baut bei jeder Änderung automatisch
```

Die Schrift *Plus Jakarta Sans* liegt self-hosted unter `assets/fonts/`
(`@font-face`, `font-display: optional`). `assets/tailwind.css` ist eingecheckt.

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `index.html` | Die komplette Seite (Markup, Inline-Styles, Skripte) |
| `assets/tailwind.css` | **Vorkompiliertes** Tailwind-CSS (Build-Artefakt, eingecheckt) |
| `assets/fonts/` | Self-hosted Schrift *Plus Jakarta Sans* (woff2) |
| `tailwind.config.js`, `src/input.css` | Tailwind-Build-Konfiguration & -Eingabe |
| `assets/img/` | Optimierte Screenshots (Light & Dark) – von der Seite genutzt |
| `assets/AppIcon-*.png` | App-Icon / Branding |
| `screenshots/` | Roh-Screenshots der App (Quellmaterial) |
| `Landingpage.md` | Textquelle / Content-Spec |

## Deploy (GitHub Pages)

Repo-**Settings → Pages →** Branch `main`, Ordner `/ (root)`. Die Seite ist
danach unter der angezeigten Pages-URL erreichbar (eigene Domain optional).

## Hinweise

- Tailwind (vorkompiliert, `assets/tailwind.css`) und die Schrift (`assets/fonts/`)
  werden **lokal** ausgeliefert – kein CDN, kein Google Fonts, keine Dritt-Requests.
- Der schlanke, CDN-freie Aufbau zahlt sich messbar aus: Lighthouse gibt der Seite
  **100 in allen vier Kategorien** – Performance, Accessibility, Best Practices und SEO
  (First Contentful Paint 0,3 s, Largest Contentful Paint 0,4 s; gemessen Juli 2026).
- Impressum, Datenschutzerklärung und Nutzungsbedingungen liegen in der Seite
  (Footer → Modal). Es handelt sich um Entwürfe – für den produktiven Einsatz
  rechtlich prüfen lassen.

---

© Wiredframe · Ulf Schuster
