/**
 * Copy shared across pages: navigation, footer, the price card, the included
 * and discussed-first lists, the person card, the FAQ and the five questions.
 *
 * Voice (Brand Guidelines v2, Part II): plain, fair, warm, confident,
 * specific. German uses formal "Sie" and Swiss spelling (ss, not ß);
 * Italian uses formal "voi". Headlines mark their one italic word with *...*.
 */
import type { Lang } from './index';

const en = {
  nav: {
    how: 'How it works',
    pricing: 'Price',
    work: 'Work',
    journal: 'Journal',
    book: 'Book a call',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    language: 'Language',
    home: 'Astia Web, home',
    homeShort: 'Home',
  },
  cta: {
    book: 'Book a call',
    seeHow: 'See how it works',
    included: 'What’s included',
    email: 'Email us',
    calendar: 'Open the calendar',
  },
  promise: ['One price for everything.', 'A person who answers.', 'A website that keeps up.'],
  footer: {
    site: 'The site',
    contact: 'Contact',
    languages: 'Languages',
    company: 'Astia Web is a product of Marco Rosso Consulting.',
    address: ['Via Don G. Gagliardi 23', '6932 Breganzona (Lugano)', 'Switzerland'],
    rights: 'All rights reserved.',
    vat: 'Prices exclude VAT.',
  },
  price: {
    label: 'One price',
    perMonth: '/ month',
    lines: ['Everything a website needs.', 'No setup fee.'],
    items: [
      'Brand guide and custom design',
      'Every page, every language',
      'Changes live within 24 hours',
      'Hosting, security, upkeep',
      'Kept current as the web moves',
    ],
    note: 'Billed yearly in advance. Excl. VAT.',
    currency: 'Currency',
  },
  included: {
    title: 'Always included',
    items: [
      { t: 'Your brand guide', d: 'Written for you from a 30-minute call.' },
      { t: 'A custom website', d: 'Designed from your brand, revised until you are happy.' },
      { t: 'Every change', d: 'Email us. Live within 24 hours, Monday to Friday.' },
      { t: 'Every language', d: 'AI-translated and kept in sync on every change.' },
      { t: 'Booking and forms', d: 'Your booking engine, forms, maps, analytics.' },
      { t: 'Hosting and security', d: 'Global hosting, SSL, backups. Nothing to patch.' },
      { t: 'Found by people and AI', d: 'Fast pages, structured data, clean facts.' },
      { t: 'Kept current', d: 'Yearly review, and a rebuild when the web moves on.' },
    ],
  },
  discussed: {
    title: 'Discussed first',
    items: ['An online shop', 'A members’ area', 'A custom tool', 'A deep system integration'],
    note: 'Some projects go further. We tell you before we start, and you decide.',
  },
  person: {
    name: 'Marco Rosso',
    role: 'Founder, and your contact at Astia Web',
    bio: 'Ten years in hospitality technology.',
    email: 'hello@astiaweb.com',
    phone: '+41 76 433 5845',
    phoneHref: '+41764335845',
    portraitAlt: 'Marco Rosso, founder of Astia Web, in a navy blazer and striped shirt.',
  },
  faq: [
    {
      q: 'Isn’t a monthly fee more expensive?',
      a: 'Over five years it is usually less, and the site is current at the end. If you will rarely change anything, a lean one-off build may suit you better, and we will tell you.',
    },
    {
      q: 'What’s the catch?',
      a: 'A yearly commitment, billed in advance. Cancel any year with 30 days’ notice before renewal. We remind you 60 days ahead.',
    },
    {
      q: 'What happens when websites change completely?',
      a: 'Your site changes with them. A yearly review keeps it current, and when the web moves on, we rebuild it on new technology. If websites as we know them give way to something new, we move you to it. All included in the 150.',
    },
    {
      q: 'Won’t an AI-built site look generic?',
      a: 'Not when it starts from a brand guide written for your business. That’s why we do the brand work first.',
    },
    {
      q: 'Will I talk to a person?',
      a: 'Always. You have a named contact by email, phone or video. AI drafts the work; a person checks every change before it goes live.',
    },
    {
      q: 'What counts as a special request?',
      a: 'An online shop, a members’ area, a custom tool or a deep system integration. We tell you before we start, and you decide.',
    },
    {
      q: 'What if I leave?',
      a: 'You keep the code, the content and the history. You get the full code as a zip and help moving your domain, at no cost.',
    },
    {
      q: 'Do more languages cost more?',
      a: 'No. AI translates and keeps every language in sync on each change, and a person checks it. More languages don’t cost us more, so they don’t cost you more.',
    },
    {
      q: 'Can my team edit the site?',
      a: 'Yes, there’s an optional editor. Most clients just email us.',
    },
    {
      q: 'We have several hotels. Can you take on all our sites?',
      a: 'Yes. Same price for each site, same 24-hour changes, no waiting list.',
    },
    {
      q: 'Do you only work with hotels?',
      a: 'Hospitality is where we started and where most of our work is. We work with any small business.',
    },
  ],
  questions: {
    items: [
      { q: 'Who owns the site, and can I take it with me?', a: 'You own the code, content and history. Full code as a zip, and help moving at no cost.' },
      { q: 'What does a change cost, and how long does it take?', a: 'Nothing extra. Live within 24 hours.' },
      { q: 'Who patches the plugins and the server, and how often?', a: 'There are none to patch.' },
      { q: 'What happens when the web changes in two years?', a: 'We adapt or rebuild the site. Included.' },
      { q: 'What will I have paid after five years?', a: '{money}, everything included.', money: 9000 },
    ],
    answerLabel: 'Astia Web',
    copy: 'Copy the questions',
    copied: 'Copied',
    copyIntro: 'Five questions to ask any website provider:',
  },
  common: {
    example: 'Example',
    optional: 'optional',
    source: 'Source',
    sources: 'Sources',
    readMore: 'Read',
    replay: 'Play again',
  },
};

export type SharedCopy = typeof en;

const de: SharedCopy = {
  nav: {
    how: 'So funktioniert es',
    pricing: 'Preis',
    work: 'Arbeiten',
    journal: 'Journal',
    book: 'Gespräch buchen',
    menu: 'Menü',
    close: 'Schliessen',
    skip: 'Zum Inhalt springen',
    language: 'Sprache',
    home: 'Astia Web, Startseite',
    homeShort: 'Startseite',
  },
  cta: {
    book: 'Gespräch buchen',
    seeHow: 'So funktioniert es',
    included: 'Was inklusive ist',
    email: 'Schreiben Sie uns',
    calendar: 'Kalender öffnen',
  },
  promise: ['Ein Preis für alles.', 'Ein Mensch, der antwortet.', 'Eine Website, die mithält.'],
  footer: {
    site: 'Die Website',
    contact: 'Kontakt',
    languages: 'Sprachen',
    company: 'Astia Web ist ein Produkt von Marco Rosso Consulting.',
    address: ['Via Don G. Gagliardi 23', '6932 Breganzona (Lugano)', 'Schweiz'],
    rights: 'Alle Rechte vorbehalten.',
    vat: 'Preise exkl. MwSt.',
  },
  price: {
    label: 'Ein Preis',
    perMonth: '/ Monat',
    lines: ['Alles, was eine Website braucht.', 'Keine Einrichtungsgebühr.'],
    items: [
      'Markenleitfaden und individuelles Design',
      'Jede Seite, jede Sprache',
      'Änderungen live innerhalb von 24 Stunden',
      'Hosting, Sicherheit, Pflege',
      'Aktuell, während sich das Web verändert',
    ],
    note: 'Jährlich im Voraus verrechnet. Exkl. MwSt.',
    currency: 'Währung',
  },
  included: {
    title: 'Immer inklusive',
    items: [
      { t: 'Ihr Markenleitfaden', d: 'Für Sie geschrieben, nach einem 30-minütigen Gespräch.' },
      { t: 'Eine eigene Website', d: 'Aus Ihrer Marke gestaltet und überarbeitet, bis Sie zufrieden sind.' },
      { t: 'Jede Änderung', d: 'Schreiben Sie uns. Live innerhalb von 24 Stunden, Montag bis Freitag.' },
      { t: 'Jede Sprache', d: 'Mit AI übersetzt und bei jeder Änderung synchron gehalten.' },
      { t: 'Buchung und Formulare', d: 'Ihre Buchungsmaschine, Formulare, Karten, Analytics.' },
      { t: 'Hosting und Sicherheit', d: 'Globales Hosting, SSL, Backups. Nichts zu patchen.' },
      { t: 'Gefunden von Menschen und AI', d: 'Schnelle Seiten, strukturierte Daten, klare Fakten.' },
      { t: 'Immer aktuell', d: 'Jährliche Überprüfung und ein Neubau, wenn sich das Web weiterbewegt.' },
    ],
  },
  discussed: {
    title: 'Vorher besprochen',
    items: ['Ein Online-Shop', 'Ein Mitgliederbereich', 'Ein individuelles Tool', 'Eine tiefe Systemintegration'],
    note: 'Manche Projekte gehen weiter. Wir sagen es Ihnen, bevor wir beginnen, und Sie entscheiden.',
  },
  person: {
    name: 'Marco Rosso',
    role: 'Gründer und Ihr Ansprechpartner bei Astia Web',
    bio: 'Zehn Jahre Erfahrung in Hotellerie-Technologie.',
    email: 'hello@astiaweb.com',
    phone: '+41 76 433 5845',
    phoneHref: '+41764335845',
    portraitAlt: 'Marco Rosso, Gründer von Astia Web, in dunkelblauem Sakko und gestreiftem Hemd.',
  },
  faq: [
    {
      q: 'Ist eine Monatsgebühr nicht teurer?',
      a: 'Über fünf Jahre ist sie meist günstiger, und die Website ist am Ende aktuell. Wenn Sie kaum etwas ändern, passt ein schlanker Einmal-Bau vielleicht besser. Das sagen wir Ihnen dann auch.',
    },
    {
      q: 'Wo ist der Haken?',
      a: 'Eine Verpflichtung für jeweils ein Jahr, im Voraus verrechnet. Sie können jedes Jahr mit 30 Tagen Frist vor der Verlängerung kündigen. Wir erinnern Sie 60 Tage vorher.',
    },
    {
      q: 'Was passiert, wenn sich Websites grundlegend verändern?',
      a: 'Ihre Website verändert sich mit. Eine jährliche Überprüfung hält sie aktuell, und wenn sich das Web weiterbewegt, bauen wir sie auf neuer Technologie neu. Wenn Websites, wie wir sie kennen, etwas Neuem weichen, bringen wir Sie dorthin. Alles in den 150 enthalten.',
    },
    {
      q: 'Sieht eine mit AI gebaute Website nicht beliebig aus?',
      a: 'Nicht, wenn sie mit einem Markenleitfaden beginnt, der für Ihr Unternehmen geschrieben ist. Deshalb machen wir die Markenarbeit zuerst.',
    },
    {
      q: 'Spreche ich mit einem Menschen?',
      a: 'Immer. Sie haben einen festen Ansprechpartner per E-Mail, Telefon oder Video. AI entwirft die Arbeit, ein Mensch prüft jede Änderung, bevor sie live geht.',
    },
    {
      q: 'Was gilt als Sonderwunsch?',
      a: 'Ein Online-Shop, ein Mitgliederbereich, ein individuelles Tool oder eine tiefe Systemintegration. Wir sagen es Ihnen, bevor wir beginnen, und Sie entscheiden.',
    },
    {
      q: 'Was passiert, wenn ich kündige?',
      a: 'Sie behalten den Code, die Inhalte und die Versionsgeschichte. Sie erhalten den vollständigen Code als ZIP-Datei und Hilfe beim Umzug Ihrer Domain, ohne Kosten.',
    },
    {
      q: 'Kosten zusätzliche Sprachen mehr?',
      a: 'Nein. AI übersetzt und hält jede Sprache bei jeder Änderung synchron, ein Mensch prüft sie. Mehr Sprachen kosten uns nicht mehr, also kosten sie auch Sie nicht mehr.',
    },
    {
      q: 'Kann mein Team die Website selbst bearbeiten?',
      a: 'Ja, es gibt einen optionalen Editor. Die meisten Kunden schreiben uns einfach eine E-Mail.',
    },
    {
      q: 'Wir haben mehrere Hotels. Übernehmen Sie alle Websites?',
      a: 'Ja. Derselbe Preis für jede Website, dieselben Änderungen innerhalb von 24 Stunden, keine Warteliste.',
    },
    {
      q: 'Arbeiten Sie nur mit Hotels?',
      a: 'In der Hotellerie haben wir angefangen, und dort liegt der Grossteil unserer Arbeit. Wir arbeiten mit jedem kleinen Unternehmen.',
    },
  ],
  questions: {
    items: [
      { q: 'Wem gehört die Website, und kann ich sie mitnehmen?', a: 'Ihnen gehören Code, Inhalte und Versionsgeschichte. Der vollständige Code als ZIP und Hilfe beim Umzug, ohne Kosten.' },
      { q: 'Was kostet eine Änderung, und wie lange dauert sie?', a: 'Nichts extra. Live innerhalb von 24 Stunden.' },
      { q: 'Wer patcht Plugins und Server, und wie oft?', a: 'Es gibt keine, die gepatcht werden müssen.' },
      { q: 'Was passiert, wenn sich das Web in zwei Jahren verändert?', a: 'Wir passen die Website an oder bauen sie neu. Inklusive.' },
      { q: 'Was habe ich nach fünf Jahren bezahlt?', a: '{money}, alles inklusive.', money: 9000 },
    ],
    answerLabel: 'Astia Web',
    copy: 'Fragen kopieren',
    copied: 'Kopiert',
    copyIntro: 'Fünf Fragen an jeden Website-Anbieter:',
  },
  common: {
    example: 'Beispiel',
    optional: 'optional',
    source: 'Quelle',
    sources: 'Quellen',
    readMore: 'Lesen',
    replay: 'Nochmals abspielen',
  },
};

const it: SharedCopy = {
  nav: {
    how: 'Come funziona',
    pricing: 'Prezzo',
    work: 'Lavori',
    journal: 'Journal',
    book: 'Prenota una chiamata',
    menu: 'Menu',
    close: 'Chiudi',
    skip: 'Vai al contenuto',
    language: 'Lingua',
    home: 'Astia Web, home page',
    homeShort: 'Home',
  },
  cta: {
    book: 'Prenota una chiamata',
    seeHow: 'Come funziona',
    included: 'Cosa è incluso',
    email: 'Scriveteci',
    calendar: 'Apri il calendario',
  },
  promise: ['Un prezzo per tutto.', 'Una persona che risponde.', 'Un sito che tiene il passo.'],
  footer: {
    site: 'Il sito',
    contact: 'Contatti',
    languages: 'Lingue',
    company: 'Astia Web è un prodotto di Marco Rosso Consulting.',
    address: ['Via Don G. Gagliardi 23', '6932 Breganzona (Lugano)', 'Svizzera'],
    rights: 'Tutti i diritti riservati.',
    vat: 'Prezzi IVA esclusa.',
  },
  price: {
    label: 'Un prezzo',
    perMonth: '/ mese',
    lines: ['Tutto ciò che serve a un sito.', 'Nessun costo di attivazione.'],
    items: [
      'Linee guida del brand e design su misura',
      'Ogni pagina, ogni lingua',
      'Modifiche online entro 24 ore',
      'Hosting, sicurezza, manutenzione',
      'Sempre aggiornato, mentre il web cambia',
    ],
    note: 'Fatturato annualmente in anticipo. IVA esclusa.',
    currency: 'Valuta',
  },
  included: {
    title: 'Sempre incluso',
    items: [
      { t: 'Le vostre linee guida del brand', d: 'Scritte per voi dopo una chiamata di 30 minuti.' },
      { t: 'Un sito su misura', d: 'Disegnato a partire dal vostro brand, rivisto finché siete soddisfatti.' },
      { t: 'Ogni modifica', d: 'Scriveteci. Online entro 24 ore, dal lunedì al venerdì.' },
      { t: 'Ogni lingua', d: 'Tradotta con l’IA e allineata a ogni modifica.' },
      { t: 'Prenotazioni e moduli', d: 'Il vostro booking engine, moduli, mappe, statistiche.' },
      { t: 'Hosting e sicurezza', d: 'Hosting globale, SSL, backup. Niente da aggiornare.' },
      { t: 'Trovati da persone e IA', d: 'Pagine veloci, dati strutturati, informazioni chiare.' },
      { t: 'Sempre aggiornato', d: 'Revisione annuale, e un rifacimento quando il web va avanti.' },
    ],
  },
  discussed: {
    title: 'Da concordare prima',
    items: ['Un negozio online', 'Un’area riservata', 'Uno strumento su misura', 'Un’integrazione profonda con altri sistemi'],
    note: 'Alcuni progetti vanno oltre. Ve lo diciamo prima di iniziare, e decidete voi.',
  },
  person: {
    name: 'Marco Rosso',
    role: 'Fondatore e vostro referente in Astia Web',
    bio: 'Dieci anni nella tecnologia per l’ospitalità.',
    email: 'hello@astiaweb.com',
    phone: '+41 76 433 5845',
    phoneHref: '+41764335845',
    portraitAlt: 'Marco Rosso, fondatore di Astia Web, con giacca blu scuro e camicia a righe.',
  },
  faq: [
    {
      q: 'Un canone mensile non costa di più?',
      a: 'Su cinque anni di solito costa meno, e alla fine il sito è aggiornato. Se cambierete raramente qualcosa, un sito una tantum essenziale potrebbe convenirvi di più, e ve lo diremo.',
    },
    {
      q: 'Dov’è il trucco?',
      a: 'Un impegno annuale, fatturato in anticipo. Potete disdire ogni anno con 30 giorni di preavviso prima del rinnovo. Ve lo ricordiamo 60 giorni prima.',
    },
    {
      q: 'Cosa succede se i siti web cambiano completamente?',
      a: 'Il vostro sito cambia con loro. Una revisione annuale lo mantiene aggiornato e, quando il web va avanti, lo ricostruiamo su una nuova tecnologia. Se i siti come li conosciamo lasceranno il posto a qualcosa di nuovo, vi ci portiamo noi. Tutto incluso nei 150.',
    },
    {
      q: 'Un sito costruito con l’IA non sembrerà generico?',
      a: 'Non se parte da linee guida del brand scritte per la vostra attività. Per questo facciamo prima il lavoro sul brand.',
    },
    {
      q: 'Parlerò con una persona?',
      a: 'Sempre. Avete un referente con nome e cognome, via email, telefono o video. L’IA prepara il lavoro, una persona controlla ogni modifica prima che vada online.',
    },
    {
      q: 'Cosa conta come richiesta speciale?',
      a: 'Un negozio online, un’area riservata, uno strumento su misura o un’integrazione profonda con altri sistemi. Ve lo diciamo prima di iniziare, e decidete voi.',
    },
    {
      q: 'E se decido di andarmene?',
      a: 'Tenete il codice, i contenuti e lo storico. Ricevete il codice completo in un file zip e aiuto per trasferire il dominio, senza costi.',
    },
    {
      q: 'Più lingue costano di più?',
      a: 'No. L’IA traduce e mantiene ogni lingua allineata a ogni modifica, e una persona controlla. Più lingue non costano di più a noi, quindi non costano di più a voi.',
    },
    {
      q: 'Il mio team può modificare il sito?',
      a: 'Sì, c’è un editor opzionale. La maggior parte dei clienti ci scrive semplicemente un’email.',
    },
    {
      q: 'Abbiamo più hotel. Potete occuparvi di tutti i siti?',
      a: 'Sì. Stesso prezzo per ogni sito, stesse modifiche entro 24 ore, nessuna lista d’attesa.',
    },
    {
      q: 'Lavorate solo con gli hotel?',
      a: 'Abbiamo iniziato dall’ospitalità ed è lì che si concentra la maggior parte del nostro lavoro. Lavoriamo con qualsiasi piccola impresa.',
    },
  ],
  questions: {
    items: [
      { q: 'Di chi è il sito, e posso portarlo con me?', a: 'Vostri sono il codice, i contenuti e lo storico. Il codice completo in zip, e aiuto nel trasferimento senza costi.' },
      { q: 'Quanto costa una modifica, e quanto tempo richiede?', a: 'Niente in più. Online entro 24 ore.' },
      { q: 'Chi aggiorna plugin e server, e con quale frequenza?', a: 'Non ce ne sono da aggiornare.' },
      { q: 'Cosa succede quando il web cambierà tra due anni?', a: 'Adattiamo o ricostruiamo il sito. Incluso.' },
      { q: 'Quanto avrò pagato dopo cinque anni?', a: '{money}, tutto incluso.', money: 9000 },
    ],
    answerLabel: 'Astia Web',
    copy: 'Copia le domande',
    copied: 'Copiate',
    copyIntro: 'Cinque domande da fare a qualsiasi fornitore di siti web:',
  },
  common: {
    example: 'Esempio',
    optional: 'facoltativo',
    source: 'Fonte',
    sources: 'Fonti',
    readMore: 'Leggi',
    replay: 'Riproduci di nuovo',
  },
};

export const shared: Record<Lang, SharedCopy> = { en, de, it };
