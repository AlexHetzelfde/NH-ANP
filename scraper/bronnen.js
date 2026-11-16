// bronnen.js
//
// Centrale lijst van bronnen. Elke bron krijgt een categorie: "lokaal" of "landelijk".
//
// Sinds 2026-10-26:
//  - blaise-pascal-college en OmgevingsdienstNHN verwijderd (leverden
//    onvoldoende op en kostten te veel tijd).
//
// Sinds 2026-11-14 (voorbereiding op de regio Midden-Noord-Holland):
//  - De pitchmachine is uit de repo gehaald; ZANP is de enige gebruiker van deze lijst.
//  - Verwijderd op verzoek: DeOrkaan, hhnk, zaansche-molen, ovo-zaanstad,
//    zaans-museum, zaanse-schans, zaandijk-leeft, zaans-cultuur-huis,
//    WaarheenAgenda en vervoerregio-persberichten.
//  - politie-zaanstad verwijderd (52 ZANP-runs achter elkaar niets; de selectors
//    van politie.nl werken niet meer).

module.exports = [
  {
    id: "ibabs-collegeberichten",
    naam: "Zaanstad — Collegeberichten (iBabs)",
    categorie: "lokaal",
    type: "ibabs",
    url: "https://zaanstad.bestuurlijkeinformatie.nl/Reports/Details/8ea04074-52e6-4284-bd1a-66e378b40ec1",
    rustig: true,
    ibabs: {
      kolommen: [
        { data: "title", searchable: false },
        { data: "registrationdate" },
        { data: "datumbericht" },
        { data: "portefeuillehouderselectie" },
        { data: "typeselectie", searchable: false },
        { data: "afhandelingselectie" },
      ],
      sorteerKolom: "datumbericht",
      sorteerRichting: "desc",
      datumVelden: ["datumbericht", "registrationdate"],
      samenvattingVelden: ["typeselectie", "portefeuillehouderselectie", "afhandelingselectie"],
    },
  },
  {
    id: "ibabs-ingekomen-stukken",
    naam: "Zaanstad — Ingekomen stukken (iBabs)",
    categorie: "lokaal",
    type: "ibabs",
    url: "https://zaanstad.bestuurlijkeinformatie.nl/Reports/Details/58e397b1-0b36-49e2-90ed-325405f27f72",
    rustig: true,
    ibabs: {
      kolommen: [
        { data: "datum" },
        { data: "title", searchable: false },
        { data: "afzender" },
        { data: "adviesselectie" },
        { data: "identity" },
        { data: "datumpublicatie" },
        { data: "behandelenin" },
      ],
      sorteerKolom: "datum",
      sorteerRichting: "desc",
      datumVelden: ["datum", "datumpublicatie"],
      samenvattingVelden: ["afzender", "adviesselectie", "behandelenin"],
    },
  },
  {
    id: "nh-actueel",
    naam: "Provincie Noord-Holland — Actueel",
    categorie: "lokaal",
    type: "rss",
    url: "https://www.noord-holland.nl/pnhnieuws",
  },
  {
    id: "nh-cultuur",
    naam: "Provincie Noord-Holland — Cultuur en Erfgoed",
    categorie: "lokaal",
    type: "generieke-lijst",
    url: "https://www.noord-holland.nl/Onderwerpen/Cultuur_en_Erfgoed",
  },
  {
    id: "zaanstad-hoorzittingen",
    naam: "Zaanstad — Hoorzittingen",
    categorie: "lokaal",
    type: "gemini-recept",
    url: "https://loket.zaanstad.nl/mozard/!suite16.scherm1168?mGmr=2168",
    soort: "agenda",
    detailSelector: ".aandachtstekst__tekst",
    selectors: {
      itemSelector: ".zaakregel",
      titelSelector: "h3",
      linkSelector: "a.zaakregel__verwijzing",
      datumSelector: null,
      datumAttribuut: null,
      samenvattingSelector: "#me_CBCzqv, .aandachtstekst__tekst, .zaakregel__omschrijving, .zaakregel p",
    },
  },
  {
    id: "omgevingsdienstnoordzeekanaal",
    naam: "Omgevingsdienst Noordzeekanaalgebied",
    categorie: "lokaal",
    type: "wordpress-html",
    url: "https://odnzkg.nl/nieuws/",
    rustig: true,
  },
  {
    id: "rechtspraak-noord-holland",
    naam: "Rechtspraak — Rechtbank Noord-Holland",
    categorie: "lokaal",
    type: "rss",
    url: "https://uitspraken.rechtspraak.nl/rss/?instantie=http%3A%2F%2Fstandaarden.overheid.nl%2Fowms%2Fterms%2FRechtbank_Noord-Holland&instantietype=2",
    detailSelector: ".rnl-detail-uitspraaktekst--content",
    filterTermen: [
      "Zaanstad", "Zaandam", "Zaandijk", "Koog aan de Zaan", "Wormerveer", "Krommenie", "Assendelft",
      "Westzaan", "Wormer", "Wijdewormer", "Jisp", "Neck", "Oostknollendam", "Spijkerboor", "Oostzaan",
      "Landsmeer", "Den Ilp", "Watergang", "Purmerend", "Edam", "Volendam", "Monnickendam", "Marken",
      "Katwoude", "Ilpendam", "Broek in Waterland", "Zuiderwoude", "Uitdam", "Middelie", "Warder", "Beets",
      "Hobrede", "Kwadijk", "Oosthuizen", "Schardam", "Zaanstreek", "Waterland",
    ],
    rustig: true,
  },
  {
    id: "bekendmakingen",
    naam: "Officiële bekendmakingen — Zaanstad",
    categorie: "lokaal",
    type: "rss",
    url: "https://zoek.officielebekendmakingen.nl/rss?q=(c.product-area==%22officielepublicaties%22)and(dt.creator==%22Zaanstad%22)and((dt.type==%22algemeen%20verbindend%20voorschrift%20(ministeri%C3%ABle%20regeling)%22)or(dt.type==%22algemeen%20verbindend%20voorschrift%20(verordening)%22)or(dt.type==%22algemeenverbindendverklaring%20van%20cao-bepalingen%22)or(dt.type==%22ander%20besluit%20van%20algemene%20strekking%22)or(dt.type==%22bekendmaking%20aan%20de%20scheepvaart%22)or(dt.type==%22beleidsregel%22)or(dt.type==%22delegatie-%20of%20mandaatbesluit%22)or(dt.type==%22gemeenschappelijke%20regeling%22)or(dt.type==%22ruimtelijk%20plan%20of%20omgevingsdocument%22)or(dt.type==%22verkeersbesluit%20of%20-mededeling%22)or(dt.type==%22andere%20melding%22)or(dt.type==%22evenementmelding%22)or(dt.type==%22exploitatiemelding%22)or(dt.type==%22melding%20van%20activiteiten%20op%20of%20in%20oppervlaktewater%22)or(dt.type==%22omgevingsmelding%22)or(dt.type==%22benoeming%20of%20ontslag%22)or(dt.type==%22circulaire%22)or(dt.type==%22convenant%22)or(dt.type==%22interne%20regeling%22)or(dt.type==%22kieswetpublicatie%22)or(dt.type==%22koninklijke%20onderscheiding%22)or(dt.type==%22mededeling%20verzekeringswezen%22)or(dt.type==%22onteigening%22)or(dt.type==%22overige%20overheidsinformatie%22)or(dt.type==%22participatie%22)or(dt.type==%22pensioenen%22)or(dt.type==%22tuchtrechtelijke%20uitspraak%22)or(dt.type==%22vervreemding%20erfgoed%22)or(dt.type==%22andere%20beschikking%22)or(dt.type==%22andere%20vergunning%22)or(dt.type==%22evenementenvergunning%22)or(dt.type==%22exploitatievergunning%22)or(dt.type==%22vergunning%20voor%20activiteiten%20op%20of%20in%20oppervlaktewater%22)or(dt.type==%22afvalinzameling%22)or(dt.type==%22andere%20voorlichtingsinformatie%22)or(dt.type==%22inspraak%22)or(dt.type==%22openingstijden%22)or(dt.type==%22vergadering%20of%20stuk%20van%20het%20bestuur%22)or(dt.type==%22verkiezingen%22))and(((w.publicatienaam==%22Tractatenblad%22))or((w.publicatienaam==%22Staatsblad%22))or((w.publicatienaam==%22Staatscourant%22))or((w.publicatienaam==%22Gemeenteblad%22))or((w.publicatienaam==%22Provinciaal%20blad%22))or((w.publicatienaam==%22Waterschapsblad%22))or((w.publicatienaam==%22Blad%20gemeenschappelijke%20regeling%22)))",
    rustig: true,
  },
  {
    id: "wetenregelgeving",
    naam: "Lokale regelgeving — Zaanstad",
    categorie: "lokaal",
    type: "gemini-recept",
    url: "https://lokaleregelgeving.overheid.nl/ZoekResultaat?gemeenten=Zaanstad&count=50",
    paginering: { soort: "geen" },
    rustig: true,
    selectors: {
      itemSelector: "li.item",
      titelSelector: "h2.result--title a",
      linkSelector: "h2.result--title a",
      datumSelector: "ul.list--metadata li:first-child",
      datumAttribuut: null,
      samenvattingSelector: null,
      fotoSelector: null,
      fotoAttribuut: null,
    },
  },
  // ---------------------------------------------------------------------------
  // Bronnen die op 2026-10-31 aan ZANP zijn toegevoegd (politie-zaanstad is op
  // 2026-11-14 weer verwijderd, zie hierboven).
  // ---------------------------------------------------------------------------
  {
    id: "zaanstad-kalender",
    naam: "Zaanstad — Vergaderkalender (iBabs)",
    categorie: "lokaal",
    type: "ibabs-kalender",
    url: "https://zaanstad.bestuurlijkeinformatie.nl/Calendar",
    soort: "agenda",
    rustig: true,
  },
  {
    id: "vervoerregio-aanbesteding",
    naam: "Vervoerregio — Aanbesteding OV Zaanstreek-Waterland 2024",
    categorie: "lokaal",
    type: "gemini-recept",
    url: "https://vervoerregio.nl/pagina/20211222-aanbesteding-ov-zaanstreek-waterland-2024",
    paginering: { soort: "geen" },
    rustig: true,
    // De berichten op deze pagina hebben de datum compact in de url: /artikel/20260528-titel
    datumUitUrl: true,
    selectors: {
      itemSelector: ".cms-tekst-contents a[href*='/artikel/']",
      titelSelector: null,
      linkSelector: "self",
      datumSelector: null,
      datumAttribuut: null,
      samenvattingSelector: null,
      fotoSelector: null,
      fotoAttribuut: null,
    },
  },
  {
    // Nieuws van de Rekenkamer Amsterdam-Zaanstad (Next.js-site met een gewone lijst
    // van <article class="nieuwsitem">). Een paar berichten per maand, dus rustig.
    id: "rekenkamer-amsterdam-zaanstad",
    naam: "Rekenkamer Amsterdam-Zaanstad — Nieuws",
    categorie: "lokaal",
    type: "generieke-lijst",
    url: "https://www.rekenkamer.amsterdam.nl/nieuws/",
    detailSelector: ".c-wysiwyg",
    rustig: true,
  },
];
