import type { Lang } from './index';

const en = {
  seo: {
    title: 'How Astia Web builds and runs your website',
    description:
      'A 30-minute call, a written brand guide, your site live in two to three weeks, then changes by email within a day. AI drafts, a person checks every change.',
  },
  hero: {
    eyebrow: 'How it works',
    title: 'AI does the work, so a person has time for *you*.',
    lede: 'Every change follows the same path. You email us, AI drafts it in every language, a person checks it, and it goes live within a day.',
  },
  steps: {
    num: '01 — From call to launch',
    title: 'Brand first. Live in two to three *weeks*.',
    items: [
      {
        when: 'Day one',
        t: 'A 30-minute call',
        d: 'We learn your business: who you serve, what makes you different, how you speak to guests. Bring your logo, colours and photos if you have them. If you have none, the call is enough to start.',
      },
      {
        when: 'Before we build',
        t: 'Your brand guide',
        d: 'We write it for you, 8 to 15 pages in your language. You approve it before we build anything, and it is yours to keep for print, social, signage and new hires.',
      },
      {
        when: 'Within two to three weeks',
        t: 'Your website',
        d: 'Built from the guide, with your booking engine, forms, maps and analytics connected. Shown on a private link and revised until you are happy. Every site passes our speed gate before launch.',
      },
      {
        when: 'Every weekday after',
        t: 'Changes by email',
        d: 'Send what you want changed. AI drafts it, a person checks it, and it is live within a day. A yearly review keeps the whole site current.',
      },
    ],
    guideTitle: 'What every brand guide contains',
    guide: ['Foundation', 'Positioning', 'Audience', 'Personality and voice', 'Languages', 'Colour', 'Typography', 'Imagery', 'Logo use', 'On the website'],
  },
  change: {
    num: '02 — One change, start to finish',
    title: 'Email us the change. It’s live within a *day*.',
    lede: 'A typical morning. The times are an example; the steps are the same for every change.',
    events: [
      { time: '09:12', who: 'You', what: '“Breakfast now runs from 7 to 10:30. Can you update the site?”', quote: true },
      { time: '09:20', who: 'AI', what: 'Drafts the change on every page that mentions breakfast, in English, German and Italian.', quote: false },
      { time: '10:05', who: 'Marco', what: 'Checks each page, the wording and every translation.', quote: false },
      { time: '10:06', who: 'Live', what: 'Published, and versioned, so it can be rolled back in one click.', quote: false },
      { time: '10:07', who: 'Reply', what: '“Done. The new hours are live in all three languages. Anything else, just reply here.”', quote: true },
    ],
    note: 'The agent never publishes on its own. Every change is checked by a person before it goes live.',
  },
  built: {
    num: '03 — Built differently',
    title: 'Nothing to patch, and very little to *attack*.',
    intro:
      'Astia sites are built with Astro as static pages and served from a global network. There is no server-side code or database on the live site to break into, and every change is versioned, so any update can be rolled back in one click.',
    hub: 'Your site',
    hubNote: 'Static pages',
    nodes: [
      { icon: 'globe', label: 'Global network', note: 'Served close to every guest' },
      { icon: 'git-branch', label: 'Versioned', note: 'Roll back in one click' },
      { icon: 'database', label: 'No database', note: 'Nothing to break into' },
      { icon: 'shield-check', label: 'No plugins', note: 'Nothing to patch' },
      { icon: 'lock', label: 'No admin login', note: 'Not on the live site' },
      { icon: 'file-code', label: 'Your code', note: 'Yours to keep and move' },
    ],
    tableCaption: 'How the three routes compare',
    cols: ['WordPress', 'DIY builder', 'Astia Web'],
    rows: [
      { label: 'A database attackers can target', cells: [['Yes', 'bad'], ['Managed by the platform', 'mid'], ['No', 'good']] },
      { label: 'Plugins to update and patch', cells: [['Yes, monthly', 'bad'], ['Apps, managed by the platform', 'mid'], ['No', 'good']] },
      { label: 'Admin login on the live site', cells: [['Yes', 'bad'], ['Yes', 'bad'], ['No', 'good']] },
      { label: 'You own the code and can move it', cells: [['Yes', 'good'], ['No', 'bad'], ['Yes', 'good']] },
      { label: 'Changes without an invoice', cells: [['No', 'bad'], ['Only if you do them', 'mid'], ['Yes, by email', 'good']] },
      { label: 'Rebuilt when the web moves on', cells: [['New project', 'bad'], ['When the platform decides', 'mid'], ['Included', 'good']] },
    ],
  },
  ready: {
    num: '04 — Ready for what comes next',
    title: 'Built for guests, search engines, and the AI that answers for *both*.',
    items: [
      { t: 'Readable by machines', d: 'Structured data, sitemaps, language tags and clear facts about your business: what, where, how to book.' },
      { t: 'Fast everywhere', d: 'Static pages from a global network. Every site must pass our speed gate, Lighthouse 90 or more, before launch.' },
      { t: 'Accessible', d: 'Built to WCAG 2.1 AA. The European Accessibility Act has applied to many online services in the EU since 28 June 2025.' },
      { t: 'Never frozen', d: 'As new conventions for AI and search appear, we adopt the ones that matter. Your site moves with the web.' },
    ],
    demo: {
      tabs: ['What a guest sees', 'What an AI reads'],
      label: 'Fictional example',
      hotel: 'Hotel Bellavista',
      place: 'Lugano, Switzerland',
      facts: [
        ['Rooms', '18'],
        ['Check-in', 'from 15:00'],
        ['Breakfast', '7:00 to 10:30'],
        ['Languages', 'English, Deutsch, Italiano'],
      ],
      book: 'Book direct',
      caption: 'Same facts, two readers. Every Astia site publishes both.',
    },
  },
  person: {
    num: '05 — A person, always',
    title: 'A named contact. Never a ticket *queue*.',
    stats: [
      { v: '24 hours', l: 'Changes live within a day, Monday to Friday.' },
      { v: 'A named contact', l: 'By email, phone or video.' },
      { v: 'Every year', l: 'A yearly review, and a check-in whenever you want one.' },
    ],
  },
  faq: {
    num: '06 — Fair questions',
    title: 'What owners ask us before they *sign*.',
  },
};

export type HowCopy = typeof en;

const de: HowCopy = {
  seo: {
    title: 'So baut und betreibt Astia Web Ihre Website',
    description:
      'Ein Gespräch, ein Markenleitfaden, Ihre Website in zwei bis drei Wochen live, danach Änderungen per E-Mail in einem Tag. AI entwirft, ein Mensch prüft.',
  },
  hero: {
    eyebrow: 'So funktioniert es',
    title: 'AI macht die Arbeit, damit ein Mensch Zeit für *Sie* hat.',
    lede: 'Jede Änderung folgt demselben Weg. Sie schreiben uns, AI entwirft sie in jeder Sprache, ein Mensch prüft sie, und sie ist innerhalb eines Tages live.',
  },
  steps: {
    num: '01 — Vom Gespräch zum Start',
    title: 'Erst die Marke. Live in zwei bis drei *Wochen*.',
    items: [
      {
        when: 'Am ersten Tag',
        t: 'Ein 30-minütiges Gespräch',
        d: 'Wir lernen Ihr Unternehmen kennen: wen Sie bedienen, was Sie unterscheidet, wie Sie mit Gästen sprechen. Bringen Sie Logo, Farben und Fotos mit, wenn vorhanden. Wenn nicht, reicht das Gespräch für den Anfang.',
      },
      {
        when: 'Bevor wir bauen',
        t: 'Ihr Markenleitfaden',
        d: 'Wir schreiben ihn für Sie, 8 bis 15 Seiten in Ihrer Sprache. Sie geben ihn frei, bevor wir etwas bauen, und er gehört Ihnen: für Drucksachen, Social Media, Beschilderung und neue Mitarbeitende.',
      },
      {
        when: 'Innerhalb von zwei bis drei Wochen',
        t: 'Ihre Website',
        d: 'Aus dem Leitfaden gebaut, mit Ihrer Buchungsmaschine, Formularen, Karten und Analytics verbunden. Auf einem privaten Link gezeigt und überarbeitet, bis Sie zufrieden sind. Jede Website besteht vor dem Start unsere Geschwindigkeitsprüfung.',
      },
      {
        when: 'Danach an jedem Werktag',
        t: 'Änderungen per E-Mail',
        d: 'Schreiben Sie, was Sie ändern möchten. AI entwirft es, ein Mensch prüft es, und es ist innerhalb eines Tages live. Eine jährliche Überprüfung hält die ganze Website aktuell.',
      },
    ],
    guideTitle: 'Was jeder Markenleitfaden enthält',
    guide: ['Grundlage', 'Positionierung', 'Zielgruppe', 'Persönlichkeit und Tonalität', 'Sprachen', 'Farbe', 'Typografie', 'Bildsprache', 'Logo-Einsatz', 'Auf der Website'],
  },
  change: {
    num: '02 — Eine Änderung, von Anfang bis Ende',
    title: 'Schreiben Sie uns die Änderung. Sie ist innerhalb eines Tages *live*.',
    lede: 'Ein typischer Vormittag. Die Uhrzeiten sind ein Beispiel, die Schritte sind bei jeder Änderung dieselben.',
    events: [
      { time: '09:12', who: 'Sie', what: '„Das Frühstück gibt es neu von 7 bis 10:30 Uhr. Können Sie die Website anpassen?“', quote: true },
      { time: '09:20', who: 'AI', what: 'Entwirft die Änderung auf jeder Seite, die das Frühstück erwähnt, auf Englisch, Deutsch und Italienisch.', quote: false },
      { time: '10:05', who: 'Marco', what: 'Prüft jede Seite, die Formulierung und jede Übersetzung.', quote: false },
      { time: '10:06', who: 'Live', what: 'Veröffentlicht und versioniert, also mit einem Klick rückgängig zu machen.', quote: false },
      { time: '10:07', who: 'Antwort', what: '„Erledigt. Die neuen Zeiten sind in allen drei Sprachen live. Falls noch etwas ist, antworten Sie einfach hier.“', quote: true },
    ],
    note: 'Der Agent veröffentlicht nie selbstständig. Jede Änderung wird von einem Menschen geprüft, bevor sie live geht.',
  },
  built: {
    num: '03 — Anders gebaut',
    title: 'Nichts zu patchen, und kaum etwas *anzugreifen*.',
    intro:
      'Astia-Websites werden mit Astro als statische Seiten gebaut und über ein globales Netzwerk ausgeliefert. Auf der Live-Website gibt es keinen serverseitigen Code und keine Datenbank, in die man einbrechen könnte. Jede Änderung ist versioniert und mit einem Klick rückgängig zu machen.',
    hub: 'Ihre Website',
    hubNote: 'Statische Seiten',
    nodes: [
      { icon: 'globe', label: 'Globales Netzwerk', note: 'Nah bei jedem Gast' },
      { icon: 'git-branch', label: 'Versioniert', note: 'Mit einem Klick zurück' },
      { icon: 'database', label: 'Keine Datenbank', note: 'Nichts zum Einbrechen' },
      { icon: 'shield-check', label: 'Keine Plugins', note: 'Nichts zu patchen' },
      { icon: 'lock', label: 'Kein Admin-Login', note: 'Nicht auf der Live-Website' },
      { icon: 'file-code', label: 'Ihr Code', note: 'Gehört Ihnen, mitnehmbar' },
    ],
    tableCaption: 'Die drei Wege im Vergleich',
    cols: ['WordPress', 'Baukasten', 'Astia Web'],
    rows: [
      { label: 'Eine Datenbank als Angriffsziel', cells: [['Ja', 'bad'], ['Von der Plattform verwaltet', 'mid'], ['Nein', 'good']] },
      { label: 'Plugins zum Aktualisieren und Patchen', cells: [['Ja, monatlich', 'bad'], ['Apps, von der Plattform verwaltet', 'mid'], ['Nein', 'good']] },
      { label: 'Admin-Login auf der Live-Website', cells: [['Ja', 'bad'], ['Ja', 'bad'], ['Nein', 'good']] },
      { label: 'Sie besitzen den Code und können umziehen', cells: [['Ja', 'good'], ['Nein', 'bad'], ['Ja', 'good']] },
      { label: 'Änderungen ohne Rechnung', cells: [['Nein', 'bad'], ['Nur wenn Sie sie selbst machen', 'mid'], ['Ja, per E-Mail', 'good']] },
      { label: 'Neu gebaut, wenn sich das Web bewegt', cells: [['Neues Projekt', 'bad'], ['Wenn die Plattform entscheidet', 'mid'], ['Inklusive', 'good']] },
    ],
  },
  ready: {
    num: '04 — Bereit für das, was kommt',
    title: 'Gebaut für Gäste, Suchmaschinen und die AI, die für *beide* antwortet.',
    items: [
      { t: 'Von Maschinen lesbar', d: 'Strukturierte Daten, Sitemaps, Sprach-Tags und klare Fakten zu Ihrem Unternehmen: was, wo, wie man bucht.' },
      { t: 'Überall schnell', d: 'Statische Seiten aus einem globalen Netzwerk. Jede Website muss vor dem Start unsere Prüfung bestehen: Lighthouse 90 oder mehr.' },
      { t: 'Barrierefrei', d: 'Gebaut nach WCAG 2.1 AA. Der European Accessibility Act gilt seit dem 28. Juni 2025 für viele Online-Dienste in der EU.' },
      { t: 'Nie eingefroren', d: 'Wenn neue Standards für AI und Suche entstehen, übernehmen wir die, die zählen. Ihre Website bewegt sich mit dem Web.' },
    ],
    demo: {
      tabs: ['Was ein Gast sieht', 'Was eine AI liest'],
      label: 'Fiktives Beispiel',
      hotel: 'Hotel Bellavista',
      place: 'Lugano, Schweiz',
      facts: [
        ['Zimmer', '18'],
        ['Check-in', 'ab 15:00 Uhr'],
        ['Frühstück', '7:00 bis 10:30 Uhr'],
        ['Sprachen', 'English, Deutsch, Italiano'],
      ],
      book: 'Direkt buchen',
      caption: 'Dieselben Fakten, zwei Leser. Jede Astia-Website veröffentlicht beides.',
    },
  },
  person: {
    num: '05 — Immer ein Mensch',
    title: 'Ein fester Ansprechpartner. Nie eine *Ticket-Warteschlange*.',
    stats: [
      { v: '24 Stunden', l: 'Änderungen live innerhalb eines Tages, Montag bis Freitag.' },
      { v: 'Ein fester Kontakt', l: 'Per E-Mail, Telefon oder Video.' },
      { v: 'Jedes Jahr', l: 'Eine jährliche Überprüfung, und ein Gespräch, wann immer Sie möchten.' },
    ],
  },
  faq: {
    num: '06 — Faire Fragen',
    title: 'Was Inhaber uns fragen, bevor sie *unterschreiben*.',
  },
};

const it: HowCopy = {
  seo: {
    title: 'Come Astia Web costruisce e gestisce il vostro sito',
    description:
      'Una chiamata, linee guida del brand, il sito online in due o tre settimane, poi modifiche via email entro un giorno. L\u2019IA prepara, una persona controlla.',
  },
  hero: {
    eyebrow: 'Come funziona',
    title: 'L’IA fa il lavoro, così una persona ha tempo per *voi*.',
    lede: 'Ogni modifica segue lo stesso percorso. Ci scrivete, l’IA la prepara in ogni lingua, una persona la controlla, ed è online entro un giorno.',
  },
  steps: {
    num: '01 — Dalla chiamata al lancio',
    title: 'Prima il brand. Online in due o tre *settimane*.',
    items: [
      {
        when: 'Il primo giorno',
        t: 'Una chiamata di 30 minuti',
        d: 'Conosciamo la vostra attività: chi servite, cosa vi distingue, come parlate ai vostri ospiti. Portate logo, colori e foto se li avete. Se non avete nulla, la chiamata basta per iniziare.',
      },
      {
        when: 'Prima di costruire',
        t: 'Le linee guida del brand',
        d: 'Le scriviamo per voi, da 8 a 15 pagine nella vostra lingua. Le approvate prima che costruiamo qualsiasi cosa, e restano vostre: per stampa, social, insegne e nuovi collaboratori.',
      },
      {
        when: 'Entro due o tre settimane',
        t: 'Il vostro sito',
        d: 'Costruito dalle linee guida, con booking engine, moduli, mappe e statistiche collegati. Mostrato su un link privato e rivisto finché siete soddisfatti. Ogni sito supera il nostro controllo di velocità prima del lancio.',
      },
      {
        when: 'Ogni giorno feriale dopo',
        t: 'Modifiche via email',
        d: 'Scrivete cosa volete cambiare. L’IA prepara la modifica, una persona la controlla, ed è online entro un giorno. Una revisione annuale mantiene aggiornato tutto il sito.',
      },
    ],
    guideTitle: 'Cosa contengono le linee guida del brand',
    guide: ['Fondamenta', 'Posizionamento', 'Pubblico', 'Personalità e tono', 'Lingue', 'Colori', 'Tipografia', 'Immagini', 'Uso del logo', 'Sul sito'],
  },
  change: {
    num: '02 — Una modifica, dall’inizio alla fine',
    title: 'Scriveteci la modifica. È online entro un *giorno*.',
    lede: 'Una mattina tipica. Gli orari sono un esempio, i passaggi sono gli stessi per ogni modifica.',
    events: [
      { time: '09:12', who: 'Voi', what: '«La colazione ora è dalle 7 alle 10:30. Potete aggiornare il sito?»', quote: true },
      { time: '09:20', who: 'IA', what: 'Prepara la modifica su ogni pagina che parla della colazione, in inglese, tedesco e italiano.', quote: false },
      { time: '10:05', who: 'Marco', what: 'Controlla ogni pagina, il testo e ogni traduzione.', quote: false },
      { time: '10:06', who: 'Online', what: 'Pubblicata e versionata, quindi annullabile con un clic.', quote: false },
      { time: '10:07', who: 'Risposta', what: '«Fatto. I nuovi orari sono online in tutte e tre le lingue. Per qualsiasi altra cosa, rispondete pure qui.»', quote: true },
    ],
    note: 'L’agente non pubblica mai da solo. Ogni modifica viene controllata da una persona prima di andare online.',
  },
  built: {
    num: '03 — Costruito diversamente',
    title: 'Niente da aggiornare, e quasi nulla da *attaccare*.',
    intro:
      'I siti Astia sono costruiti con Astro come pagine statiche e serviti da una rete globale. Sul sito online non c’è codice lato server né un database in cui entrare, e ogni modifica è versionata, quindi annullabile con un clic.',
    hub: 'Il vostro sito',
    hubNote: 'Pagine statiche',
    nodes: [
      { icon: 'globe', label: 'Rete globale', note: 'Vicino a ogni ospite' },
      { icon: 'git-branch', label: 'Versionato', note: 'Si torna indietro con un clic' },
      { icon: 'database', label: 'Nessun database', note: 'Niente in cui entrare' },
      { icon: 'shield-check', label: 'Nessun plugin', note: 'Niente da aggiornare' },
      { icon: 'lock', label: 'Nessun login admin', note: 'Non sul sito online' },
      { icon: 'file-code', label: 'Il vostro codice', note: 'Vostro, da tenere e spostare' },
    ],
    tableCaption: 'Le tre strade a confronto',
    cols: ['WordPress', 'Fai da te', 'Astia Web'],
    rows: [
      { label: 'Un database che può essere attaccato', cells: [['Sì', 'bad'], ['Gestito dalla piattaforma', 'mid'], ['No', 'good']] },
      { label: 'Plugin da aggiornare', cells: [['Sì, ogni mese', 'bad'], ['App, gestite dalla piattaforma', 'mid'], ['No', 'good']] },
      { label: 'Login admin sul sito online', cells: [['Sì', 'bad'], ['Sì', 'bad'], ['No', 'good']] },
      { label: 'Il codice è vostro e potete spostarlo', cells: [['Sì', 'good'], ['No', 'bad'], ['Sì', 'good']] },
      { label: 'Modifiche senza fattura', cells: [['No', 'bad'], ['Solo se le fate voi', 'mid'], ['Sì, via email', 'good']] },
      { label: 'Ricostruito quando il web va avanti', cells: [['Nuovo progetto', 'bad'], ['Quando decide la piattaforma', 'mid'], ['Incluso', 'good']] },
    ],
  },
  ready: {
    num: '04 — Pronti per ciò che verrà',
    title: 'Costruito per gli ospiti, i motori di ricerca e l’IA che risponde a *entrambi*.',
    items: [
      { t: 'Leggibile dalle macchine', d: 'Dati strutturati, sitemap, tag di lingua e informazioni chiare sulla vostra attività: cosa, dove, come prenotare.' },
      { t: 'Veloce ovunque', d: 'Pagine statiche da una rete globale. Ogni sito deve superare il nostro controllo di velocità, Lighthouse 90 o più, prima del lancio.' },
      { t: 'Accessibile', d: 'Costruito secondo le WCAG 2.1 AA. L’European Accessibility Act si applica a molti servizi online nell’UE dal 28 giugno 2025.' },
      { t: 'Mai fermo', d: 'Quando nascono nuove convenzioni per l’IA e la ricerca, adottiamo quelle che contano. Il vostro sito si muove con il web.' },
    ],
    demo: {
      tabs: ['Cosa vede un ospite', 'Cosa legge un’IA'],
      label: 'Esempio fittizio',
      hotel: 'Hotel Bellavista',
      place: 'Lugano, Svizzera',
      facts: [
        ['Camere', '18'],
        ['Check-in', 'dalle 15:00'],
        ['Colazione', 'dalle 7:00 alle 10:30'],
        ['Lingue', 'English, Deutsch, Italiano'],
      ],
      book: 'Prenota diretto',
      caption: 'Stesse informazioni, due lettori. Ogni sito Astia pubblica entrambe le versioni.',
    },
  },
  person: {
    num: '05 — Sempre una persona',
    title: 'Un referente con un nome. Mai una *coda* di ticket.',
    stats: [
      { v: '24 ore', l: 'Modifiche online entro un giorno, dal lunedì al venerdì.' },
      { v: 'Un referente', l: 'Via email, telefono o video.' },
      { v: 'Ogni anno', l: 'Una revisione annuale, e un confronto ogni volta che lo desiderate.' },
    ],
  },
  faq: {
    num: '06 — Domande giuste',
    title: 'Cosa ci chiedono i titolari prima di *firmare*.',
  },
};

export const how: Record<Lang, HowCopy> = { en, de, it };
