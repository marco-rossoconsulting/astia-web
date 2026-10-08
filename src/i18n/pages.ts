/** Copy for the smaller pages: Work, Journal, Book a call, Thank you, 404. */
import type { Lang } from './index';

const en = {
  work: {
    seo: {
      title: 'Work · Astia Web',
      description: 'Websites built from a written brand guide and run by Astia Web: every change, every language, kept current.',
    },
    title: 'Built from a brand guide, not a *template*.',
    lede: 'Every site here started with a 30-minute call and a written brand guide. We built it, and we run it: every change, every language.',
    num: '01 — Selected work',
    visit: 'Visit the site',
    nextTitle: 'Your business, in its own *voice*.',
    nextLede: 'One price, the same care. We build from your brand guide and keep the site current for as long as you are with us.',
  },
  journal: {
    seo: {
      title: 'Journal · Astia Web',
      description: 'Slower reads on what a website should cost now, owning your site, and being readable by AI.',
    },
    title: 'Notes on what a website should cost *now*.',
    lede: 'Slower reads on pricing, ownership and where the web is going. Plain words, one or two numbers, and a decision you can make on Monday.',
    latest: 'Latest',
    minRead: 'min read',
    back: 'All articles',
    byline: 'Marco Rosso',
    bylineRole: 'Founder, Astia Web',
    endTitle: 'Want this applied to your own *site*?',
    endLede: 'Thirty minutes, no pitch. We look at your site and tell you plainly what we would change, and what we would leave alone.',
  },
  book: {
    seo: {
      title: 'Book a call · Astia Web',
      description: 'Book a 30-minute call. We learn your business, answer every question honestly, and tell you plainly if Astia Web is not the right fit.',
    },
    title: 'Book a 30-minute *call*.',
    lede: 'We learn your business, answer every question honestly, and tell you plainly if Astia Web is not the right fit. You leave with the start of your brand guide.',
    pickTitle: 'Pick a time',
    pickBody: 'Choose a slot in Marco’s calendar. Video or phone, in English, German or Italian.',
    formTitle: 'Or leave your details',
    formBody: 'We reply within one business day to arrange a time.',
    fields: { name: 'Name', email: 'Email', business: 'Business', website: 'Website' },
    submit: 'Book a call',
    sending: 'Sending',
    reply: 'We reply within one business day.',
    errors: {
      required: 'Please fill this in.',
      email: 'Please enter a valid email address.',
      failed: 'Something went wrong sending the form. Please try again, or email hello@astiaweb.com.',
    },
    callNum: '01 — The call',
    callTitle: 'Eight questions, thirty *minutes*.',
    callLede: 'This is what we ask. If you have no brand guidelines yet, these answers are enough to start yours.',
    questions: [
      'In one sentence, what do you do and for whom?',
      'Who is your ideal guest or customer, and why do they choose you?',
      'What makes you different from the place down the road?',
      'Three words you want people to use about you, and three you never want to hear.',
      'How do you talk to guests: formal, friendly, playful?',
      'Which languages and markets matter?',
      'Which brands do you admire, and why?',
      'What do you have already: logo, colours, fonts, photos?',
    ],
  },
  thanks: {
    seo: {
      title: 'Thank you · Astia Web',
      description: 'Your details reached us. We reply within one business day.',
    },
    title: 'Thank you. We reply within one business *day*.',
    lede: 'Your details reached Marco. If you would rather pick a time now, the calendar is open.',
    home: 'Back to the home page',
  },
  notFound: {
    seo: {
      title: 'Page not found · Astia Web',
      description: 'This page has moved or does not exist.',
    },
    title: 'This page has moved, or never *existed*.',
    lede: 'The site is kept current, so some old addresses now point somewhere new. These are the places most people look for.',
    links: 'Try one of these',
  },
};

export type PagesCopy = typeof en;

const de: PagesCopy = {
  work: {
    seo: {
      title: 'Arbeiten · Astia Web',
      description: 'Websites, gebaut aus einem schriftlichen Markenleitfaden und betrieben von Astia Web: jede Änderung, jede Sprache, immer aktuell.',
    },
    title: 'Gebaut aus einem Markenleitfaden, nicht aus einer *Vorlage*.',
    lede: 'Jede Website hier begann mit einem 30-minütigen Gespräch und einem schriftlichen Markenleitfaden. Wir haben sie gebaut, und wir betreiben sie: jede Änderung, jede Sprache.',
    num: '01 — Ausgewählte Arbeiten',
    visit: 'Website besuchen',
    nextTitle: 'Ihr Unternehmen, in seiner eigenen *Stimme*.',
    nextLede: 'Ein Preis, dieselbe Sorgfalt. Wir bauen aus Ihrem Markenleitfaden und halten die Website aktuell, solange Sie bei uns sind.',
  },
  journal: {
    seo: {
      title: 'Journal · Astia Web',
      description: 'Längere Texte darüber, was eine Website heute kosten sollte, warum Sie Ihre Website besitzen sollten und wie sie für AI lesbar wird.',
    },
    title: 'Was eine Website heute kosten *sollte*.',
    lede: 'Längere Texte über Preise, Eigentum und die Richtung des Webs. Klare Worte, ein oder zwei Zahlen und eine Entscheidung, die Sie am Montag treffen können.',
    latest: 'Neuester Beitrag',
    minRead: 'Min. Lesezeit',
    back: 'Alle Beiträge',
    byline: 'Marco Rosso',
    bylineRole: 'Gründer, Astia Web',
    endTitle: 'Das auf Ihre eigene Website *angewandt*?',
    endLede: 'Dreissig Minuten, kein Verkaufsgespräch. Wir schauen uns Ihre Website an und sagen Ihnen offen, was wir ändern würden und was nicht.',
  },
  book: {
    seo: {
      title: 'Gespräch buchen · Astia Web',
      description: 'Buchen Sie ein 30-minütiges Gespräch. Wir lernen Ihr Unternehmen kennen, beantworten jede Frage ehrlich und sagen Ihnen offen, wenn Astia Web nicht das Richtige ist.',
    },
    title: 'Ein 30-minütiges *Gespräch*.',
    lede: 'Wir lernen Ihr Unternehmen kennen, beantworten jede Frage ehrlich und sagen Ihnen offen, wenn Astia Web nicht das Richtige ist. Sie gehen mit dem Anfang Ihres Markenleitfadens.',
    pickTitle: 'Termin wählen',
    pickBody: 'Wählen Sie einen Termin in Marcos Kalender. Per Video oder Telefon, auf Deutsch, Englisch oder Italienisch.',
    formTitle: 'Oder hinterlassen Sie Ihre Angaben',
    formBody: 'Wir antworten innerhalb eines Arbeitstages und vereinbaren einen Termin.',
    fields: { name: 'Name', email: 'E-Mail', business: 'Unternehmen', website: 'Website' },
    submit: 'Gespräch buchen',
    sending: 'Wird gesendet',
    reply: 'Wir antworten innerhalb eines Arbeitstages.',
    errors: {
      required: 'Bitte füllen Sie dieses Feld aus.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      failed: 'Beim Senden ist etwas schiefgegangen. Bitte versuchen Sie es erneut oder schreiben Sie an hello@astiaweb.com.',
    },
    callNum: '01 — Das Gespräch',
    callTitle: 'Acht Fragen, dreissig *Minuten*.',
    callLede: 'Das fragen wir. Wenn Sie noch keinen Markenleitfaden haben, reichen diese Antworten, um Ihren zu beginnen.',
    questions: [
      'Was machen Sie, und für wen, in einem Satz?',
      'Wer ist Ihr idealer Gast oder Kunde, und warum wählt er Sie?',
      'Was unterscheidet Sie vom Betrieb nebenan?',
      'Drei Wörter, die man über Sie sagen soll, und drei, die Sie nie hören möchten.',
      'Wie sprechen Sie mit Gästen: förmlich, freundlich, verspielt?',
      'Welche Sprachen und Märkte sind wichtig?',
      'Welche Marken bewundern Sie, und warum?',
      'Was haben Sie bereits: Logo, Farben, Schriften, Fotos?',
    ],
  },
  thanks: {
    seo: {
      title: 'Danke · Astia Web',
      description: 'Ihre Angaben sind bei uns angekommen. Wir antworten innerhalb eines Arbeitstages.',
    },
    title: 'Danke. Wir antworten innerhalb eines *Arbeitstages*.',
    lede: 'Ihre Angaben sind bei Marco angekommen. Wenn Sie lieber gleich einen Termin wählen möchten, ist der Kalender offen.',
    home: 'Zurück zur Startseite',
  },
  notFound: {
    seo: {
      title: 'Seite nicht gefunden · Astia Web',
      description: 'Diese Seite wurde verschoben oder existiert nicht.',
    },
    title: 'Diese Seite ist umgezogen oder hat nie *existiert*.',
    lede: 'Die Website wird aktuell gehalten, darum führen manche alten Adressen jetzt woandershin. Hier suchen die meisten.',
    links: 'Versuchen Sie eine dieser Seiten',
  },
};

const it: PagesCopy = {
  work: {
    seo: {
      title: 'Lavori · Astia Web',
      description: 'Siti costruiti da linee guida del brand scritte e gestiti da Astia Web: ogni modifica, ogni lingua, sempre aggiornati.',
    },
    title: 'Costruiti da linee guida del brand, non da un *modello*.',
    lede: 'Ogni sito qui è nato da una chiamata di 30 minuti e da linee guida del brand scritte. Lo abbiamo costruito, e lo gestiamo: ogni modifica, ogni lingua.',
    num: '01 — Lavori selezionati',
    visit: 'Visita il sito',
    nextTitle: 'La vostra attività, con la sua *voce*.',
    nextLede: 'Un prezzo, la stessa cura. Costruiamo dalle vostre linee guida del brand e manteniamo il sito aggiornato finché siete con noi.',
  },
  journal: {
    seo: {
      title: 'Journal · Astia Web',
      description: 'Letture più lente su quanto dovrebbe costare oggi un sito, sul possedere il proprio sito e sull’essere leggibili dall’IA.',
    },
    title: 'Quanto dovrebbe costare un sito *oggi*.',
    lede: 'Letture più lente su prezzi, proprietà e la direzione del web. Parole semplici, uno o due numeri, e una decisione da prendere lunedì.',
    latest: 'Ultimo articolo',
    minRead: 'min di lettura',
    back: 'Tutti gli articoli',
    byline: 'Marco Rosso',
    bylineRole: 'Fondatore, Astia Web',
    endTitle: 'Volete applicarlo al vostro *sito*?',
    endLede: 'Trenta minuti, nessuna vendita. Guardiamo il vostro sito e vi diciamo chiaramente cosa cambieremmo, e cosa lasceremmo com’è.',
  },
  book: {
    seo: {
      title: 'Prenota una chiamata · Astia Web',
      description: 'Prenotate una chiamata di 30 minuti. Conosciamo la vostra attività, rispondiamo onestamente a ogni domanda e vi diciamo chiaramente se Astia Web non fa per voi.',
    },
    title: 'Una chiamata di 30 *minuti*.',
    lede: 'Conosciamo la vostra attività, rispondiamo onestamente a ogni domanda e vi diciamo chiaramente se Astia Web non fa per voi. Ne uscite con l’inizio delle vostre linee guida del brand.',
    pickTitle: 'Scegliete un orario',
    pickBody: 'Scegliete uno spazio nel calendario di Marco. In video o al telefono, in italiano, inglese o tedesco.',
    formTitle: 'Oppure lasciate i vostri dati',
    formBody: 'Rispondiamo entro un giorno lavorativo per fissare un orario.',
    fields: { name: 'Nome', email: 'Email', business: 'Attività', website: 'Sito web' },
    submit: 'Prenota una chiamata',
    sending: 'Invio in corso',
    reply: 'Rispondiamo entro un giorno lavorativo.',
    errors: {
      required: 'Compilate questo campo.',
      email: 'Inserite un indirizzo email valido.',
      failed: 'Qualcosa è andato storto nell’invio. Riprovate, oppure scrivete a hello@astiaweb.com.',
    },
    callNum: '01 — La chiamata',
    callTitle: 'Otto domande, trenta *minuti*.',
    callLede: 'Ecco cosa chiediamo. Se non avete ancora linee guida del brand, queste risposte bastano per iniziare le vostre.',
    questions: [
      'In una frase, cosa fate e per chi?',
      'Chi è il vostro ospite o cliente ideale, e perché sceglie voi?',
      'Cosa vi distingue da chi è in fondo alla strada?',
      'Tre parole che volete si usino per voi, e tre che non volete mai sentire.',
      'Come parlate agli ospiti: in modo formale, cordiale, giocoso?',
      'Quali lingue e mercati contano?',
      'Quali brand ammirate, e perché?',
      'Cosa avete già: logo, colori, caratteri, foto?',
    ],
  },
  thanks: {
    seo: {
      title: 'Grazie · Astia Web',
      description: 'I vostri dati ci sono arrivati. Rispondiamo entro un giorno lavorativo.',
    },
    title: 'Grazie. Rispondiamo entro un giorno *lavorativo*.',
    lede: 'I vostri dati sono arrivati a Marco. Se preferite scegliere subito un orario, il calendario è aperto.',
    home: 'Torna alla home page',
  },
  notFound: {
    seo: {
      title: 'Pagina non trovata · Astia Web',
      description: 'Questa pagina è stata spostata o non esiste.',
    },
    title: 'Questa pagina è stata spostata, o non è mai *esistita*.',
    lede: 'Il sito viene mantenuto aggiornato, quindi alcuni vecchi indirizzi ora portano altrove. Ecco le pagine che la maggior parte delle persone cerca.',
    links: 'Provate una di queste',
  },
};

export const pages: Record<Lang, PagesCopy> = { en, de, it };

/** Marco's booking calendar (Google Calendar appointment schedule). */
export const CALENDAR_URL = 'https://calendar.app.google/Aqg3ijBRxXwTaNBAA';
