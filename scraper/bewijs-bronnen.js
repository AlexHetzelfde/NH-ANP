// bewijs-bronnen.js
//
// Bronnen die ALLEEN dienen als bewijs voor aandacht: hoeveel wordt er in andere
// media over een onderwerp geschreven? Ze staan bewust NIET in bronnen.js:
//
//   - hun stukken worden geen nieuwsbericht (niet in berichten.json of de site),
//   - ze leveren geen agendapunten en geen termijnen,
//   - ze krijgen geen AI-kop of -analyse,
//   - ze worden niet zelf rood.
//
// Wat er wel mee gebeurt (zie bewijs.js en prioriteit/index.js): kop, korte tekst
// en datum worden ingelezen, er wordt een vingerafdruk van gemaakt en die telt mee
// bij het bepalen van de verhalen en de routes naar rood (prioriteit/routes.js).
//
// De Orkaan staat wel in bronnen.js (met alleenAgenda: hij levert ook agendapunten
// en termijnen) en telt daarnaast net zo mee als bewijs.
//
// Gegevens gecontroleerd op de aangeleverde broncode van 2026-11-18:
//   Rodi          RSS-feed https://www.rodi.nl/rss (in de <head> van elk artikel) en
//                 de lijstpagina met kaarten (kop, intro, rubriek, "17 nov, 14:30").
//                 Een artikel heeft time[datetime] (Nederlandse tijd), .article-intro
//                 en .articlediv.
//   Zaanstad.nieuws  Newsifier (Next.js). De lijstpagina bevat per artikel kop,
//                 inleiding, url en published_at (UTC) in de ingebedde gegevens. Een
//                 artikel heeft de tekst in #article-blocks .paragraph-content. Er is
//                 ook een nieuws-sitemap (/sitemap/news.xml); die wordt als extra
//                 bron gebruikt als hij leesbaar is.
//                 De pagina's tonen ook landelijk nieuws (nieuws.nl, ANP): alleen
//                 artikelen op zaanstad.nieuws.nl zelf tellen.

"use strict";

module.exports = [
  {
    id: "rodi-zaanstad",
    naam: "Rodi (Zaanstad)",
    type: "rodi",
    feedUrl: "https://www.rodi.nl/rss",
    lijstUrl: "https://www.rodi.nl/zaanstad",
    host: "www.rodi.nl",
    padPrefix: "/zaanstad/nieuws/",
    maxArtikelenPerRun: 12,
  },
  {
    id: "zaanstad-nieuws",
    naam: "Zaanstad.nieuws.nl",
    type: "newsifier",
    lijstUrl: "https://zaanstad.nieuws.nl/",
    sitemapUrl: "https://zaanstad.nieuws.nl/sitemap/news.xml",
    host: "zaanstad.nieuws.nl",
    maxArtikelenPerRun: 12,
  },
];
