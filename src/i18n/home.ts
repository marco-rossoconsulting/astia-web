import type { Lang } from './index';

const en = {
  seo: {
    title: 'Websites for hotels and small businesses · Astia Web',
    description:
      'One price for everything your website needs: 150 a month for a brand guide, a custom website, every change and every language. For hotels and small businesses.',
  },
  hero: {
    eyebrow: 'One price · Everything included',
    title: 'One price for *everything* your website needs.',
    lede: 'We write your brand guide, build your site and run it for 150 a month. Every change, every language, live within a day.',
  },
  pillars: [
    { num: '01 — Price', title: 'One fair *price*' },
    { num: '02 — People', title: 'A person, *always*' },
    { num: '03 — Future', title: 'A site that keeps *up*' },
  ],
  changed: {
    num: '01 — What changed',
    title: 'Your guests no longer just search. They *ask*.',
    body: 'More and more often, Google answers a question itself, with an AI summary at the top of the results. Your guest gets the answer without opening a single website, including yours.',
    tabs: ['Google lists websites', 'Google answers with AI'],
    values: [15, 8],
    valueLabel: 'of every 100 searches send someone to a website.',
    hint: 'Google shows a list of websites. Now see what happens when it answers with AI.',
    drop: 'Nearly half the visits are gone. The guest got the answer from Google and never reached a website.',
    legend: ['A visit to a website', 'A visit that no longer happens'],
    stats: [
      { v: '1 in 100', l: 'visits to a Google page with an AI summary included a click on a link inside it.' },
      { v: '1 in 5', l: 'Google searches already showed an AI summary in March 2025.' },
    ],
    source: 'Pew Research Center, July 2025. 68,879 Google searches by 900 US adults, March 2025.',
    meaning: {
      label: 'What this means for you',
      items: [
        { t: 'You can\u2019t switch it off.', d: 'Google decides when to answer with AI, not you. It already does for one search in five.' },
        { t: 'So the AI has to know you.', d: 'When a guest asks for a quiet hotel near the lake with breakfast, the AI recommends places whose facts it can read: what you offer, where you are, your prices, how to book. If your website doesn\u2019t state them clearly, it recommends someone else.' },
        { t: 'Astia sites are built for this.', d: 'Every Astia site states those facts in a form AI can read, loads fast, and is updated as Google and AI tools change the rules. Included in the 150. A website built in 2019 was not built for this, and it will not update itself.' },
      ],
      link: 'See what an AI reads on an Astia site',
    },
    bridge: 'Nobody knows what search will look like in two years. Your website should not need replacing to find out.',
  },
  cycle: {
    num: '02 — The rebuild cycle',
    title: 'A one-off website starts ageing the day it *launches*.',
    tabs: ['A one-off build', 'Astia Web'],
    oneOff: [
      { when: 'Launch', what: 'Looks new. Paid in full.' },
      { when: 'Months 1 to 12', what: 'Small changes become invoices and waiting.' },
      { when: 'Year 2', what: 'Plugins pile up. Speed drops. Design dates.' },
      { when: 'Year 3', what: 'The web has moved: AI search, new rules, new devices.' },
      { when: 'Years 3 to 5', what: 'Start again: new agency, new build, new bill.' },
    ],
    astia: [
      { when: 'Launch', what: 'Built from your brand guide. No setup fee.' },
      { when: 'Any weekday', what: 'Changes by email, live within a day.' },
      { when: 'Every year', what: 'A review of the site, the content and the technology.' },
      { when: 'When the web moves', what: 'Rebuilt on new technology. Included.' },
      { when: 'Whatever comes next', what: 'If websites give way to something new, we move you to it.' },
    ],
    panelTitle: 'With Astia Web there is no *cycle*.',
    panelBody:
      'The site is updated every month, reviewed every year, and rebuilt on new technology when the web moves on. Included in the 150. If websites as we know them give way to something new, we move you to it.',
  },
  routes: {
    num: '03 — The decision',
    title: 'Three ways to get a website. One keeps *up*.',
    items: [
      {
        label: 'Route A',
        title: 'Build it yourself',
        sub: 'Wix, Squarespace and similar builders',
        pros: ['Low monthly fee'],
        cons: ['You do the work, evenings and weekends', 'The site lives on their platform, not yours'],
      },
      {
        label: 'Route B',
        title: 'A cheap WordPress agency',
        sub: 'A one-off build, then hosting and updates',
        pros: ['Low price to start'],
        cons: ['Every change after launch is an invoice', 'Plugins, patches and a rebuild every few years'],
      },
      {
        label: 'Route C',
        title: 'Astia Web',
        sub: 'One subscription, everything included',
        pros: ['150 a month, no setup fee', 'Changes by email, live within a day', 'Kept current, and yours to keep'],
        cons: [],
      },
    ],
    fair: 'To be fair: builder sites are often fast, and a lean one-off build you rarely change can cost less. If that is you, we will say so.',
    link: 'Compare them in detail',
  },
  price: {
    num: '04 — The price',
    title: '150 a month. No tiers, no add-ons, no *surprises*.',
    lede: 'Same price for one site or fifty. Per site, excluding VAT, in CHF, EUR or USD depending on your market.',
    link: 'See the five-year cost',
  },
  how: {
    num: '05 — How it works',
    title: 'Brand first, then the site. Live in two to three *weeks*.',
    steps: [
      { t: 'A 30-minute call', d: 'We learn your business: who you serve, what makes you different, how you speak to guests.' },
      { t: 'Your brand guide', d: 'We write it for you: voice, colours, type, imagery. You approve it, and keep it.' },
      { t: 'Your website', d: 'Built from the guide, shown on a private link, revised until you are happy.' },
      { t: 'Changes by email', d: 'Send what you want changed. AI drafts it, a person checks it, it is live within a day.' },
    ],
    note: 'Why brand first? A site without a clear direction comes out generic. A site built from your own brand guide sounds and looks like your business, not like AI.',
  },
  final: {
    num: '06 — Next step',
    title: 'Book a call. Leave with the start of your brand *guide*.',
    lede: 'Thirty minutes. We learn your business, answer every question honestly, and tell you plainly if Astia Web is not the right fit.',
    or: 'Or write to',
  },
};

export type HomeCopy = typeof en;

const de: HomeCopy = {
  seo: {
    title: 'Websites für Hotels und kleine Unternehmen · Astia Web',
    description:
      'Ein Preis für alles, was Ihre Website braucht: 150 pro Monat für Markenleitfaden, eigene Website, jede Änderung und jede Sprache. Für Hotels und KMU.',
  },
  hero: {
    eyebrow: 'Ein Preis · Alles inklusive',
    title: 'Ein Preis für *alles*, was Ihre Website braucht.',
    lede: 'Wir schreiben Ihren Markenleitfaden, bauen Ihre Website und betreiben sie für 150 pro Monat. Jede Änderung, jede Sprache, live innerhalb eines Tages.',
  },
  pillars: [
    { num: '01 — Preis', title: 'Ein fairer *Preis*' },
    { num: '02 — Menschen', title: 'Immer ein *Mensch*' },
    { num: '03 — Zukunft', title: 'Eine Website, die *mithält*' },
  ],
  changed: {
    num: '01 — Was sich verändert hat',
    title: 'Ihre Gäste suchen nicht mehr nur. Sie *fragen*.',
    body: 'Immer öfter beantwortet Google eine Frage selbst, mit einer AI-Zusammenfassung ganz oben in den Ergebnissen. Ihr Gast bekommt die Antwort, ohne eine einzige Website zu öffnen, auch nicht Ihre.',
    tabs: ['Google zeigt Websites', 'Google antwortet mit AI'],
    values: [15, 8],
    valueLabel: 'von 100 Suchen führen zu einem Besuch auf einer Website.',
    hint: 'Google zeigt eine Liste von Websites. Sehen Sie jetzt, was passiert, wenn Google mit AI antwortet.',
    drop: 'Fast die Hälfte der Besuche ist weg. Der Gast hat die Antwort von Google bekommen und nie eine Website geöffnet.',
    legend: ['Ein Besuch auf einer Website', 'Ein Besuch, der nicht mehr stattfindet'],
    stats: [
      { v: '1 von 100', l: 'Besuchen einer Google-Seite mit AI-Zusammenfassung enthielt einen Klick auf einen Link darin.' },
      { v: '1 von 5', l: 'Google-Suchen zeigten bereits im März 2025 eine AI-Zusammenfassung.' },
    ],
    source: 'Pew Research Center, Juli 2025. 68’879 Google-Suchen von 900 Erwachsenen in den USA, März 2025.',
    meaning: {
      label: 'Was das für Sie bedeutet',
      items: [
        { t: 'Sie können es nicht abschalten.', d: 'Google entscheidet, wann es mit AI antwortet, nicht Sie. Schon heute bei jeder fünften Suche.' },
        { t: 'Also muss die AI Sie kennen.', d: 'Wenn ein Gast nach einem ruhigen Hotel am See mit Frühstück fragt, empfiehlt die AI Betriebe, deren Fakten sie lesen kann: was Sie anbieten, wo Sie sind, Ihre Preise, wie man bucht. Stehen diese nicht klar auf Ihrer Website, empfiehlt sie jemand anderen.' },
        { t: 'Dafür sind Astia-Websites gebaut.', d: 'Jede Astia-Website stellt diese Fakten so bereit, dass AI sie lesen kann, lädt schnell und wird angepasst, wenn Google und AI-Werkzeuge die Regeln ändern. In den 150 enthalten. Eine Website von 2019 wurde dafür nicht gebaut, und sie aktualisiert sich nicht von selbst.' },
      ],
      link: 'Sehen Sie, was eine AI auf einer Astia-Website liest',
    },
    bridge: 'Niemand weiss, wie Suche in zwei Jahren aussieht. Ihre Website sollte nicht ersetzt werden müssen, um es herauszufinden.',
  },
  cycle: {
    num: '02 — Der Neubau-Zyklus',
    title: 'Eine Einmal-Website beginnt am Tag des Starts zu *altern*.',
    tabs: ['Einmal-Bau', 'Astia Web'],
    oneOff: [
      { when: 'Start', what: 'Sieht neu aus. Vollständig bezahlt.' },
      { when: 'Monat 1 bis 12', what: 'Kleine Änderungen werden zu Rechnungen und Wartezeit.' },
      { when: 'Jahr 2', what: 'Plugins häufen sich. Die Seite wird langsamer. Das Design altert.' },
      { when: 'Jahr 3', what: 'Das Web hat sich bewegt: AI-Suche, neue Regeln, neue Geräte.' },
      { when: 'Jahr 3 bis 5', what: 'Von vorn: neue Agentur, neuer Bau, neue Rechnung.' },
    ],
    astia: [
      { when: 'Start', what: 'Aus Ihrem Markenleitfaden gebaut. Keine Einrichtungsgebühr.' },
      { when: 'Jeden Werktag', what: 'Änderungen per E-Mail, live innerhalb eines Tages.' },
      { when: 'Jedes Jahr', what: 'Eine Überprüfung von Website, Inhalten und Technologie.' },
      { when: 'Wenn sich das Web bewegt', what: 'Neu gebaut auf neuer Technologie. Inklusive.' },
      { when: 'Was auch immer kommt', what: 'Wenn Websites etwas Neuem weichen, bringen wir Sie dorthin.' },
    ],
    panelTitle: 'Mit Astia Web gibt es keinen *Zyklus*.',
    panelBody:
      'Die Website wird jeden Monat aktualisiert, jedes Jahr überprüft und auf neuer Technologie neu gebaut, wenn sich das Web weiterbewegt. In den 150 enthalten. Wenn Websites, wie wir sie kennen, etwas Neuem weichen, bringen wir Sie dorthin.',
  },
  routes: {
    num: '03 — Die Entscheidung',
    title: 'Drei Wege zu einer Website. Einer hält *mit*.',
    items: [
      {
        label: 'Weg A',
        title: 'Selbst bauen',
        sub: 'Wix, Squarespace und ähnliche Baukästen',
        pros: ['Niedrige Monatsgebühr'],
        cons: ['Sie machen die Arbeit, abends und am Wochenende', 'Die Website lebt auf deren Plattform, nicht auf Ihrer'],
      },
      {
        label: 'Weg B',
        title: 'Eine günstige WordPress-Agentur',
        sub: 'Ein Einmal-Bau, danach Hosting und Updates',
        pros: ['Niedriger Einstiegspreis'],
        cons: ['Jede Änderung nach dem Start ist eine Rechnung', 'Plugins, Patches und alle paar Jahre ein Neubau'],
      },
      {
        label: 'Weg C',
        title: 'Astia Web',
        sub: 'Ein Abonnement, alles inklusive',
        pros: ['150 pro Monat, keine Einrichtungsgebühr', 'Änderungen per E-Mail, live innerhalb eines Tages', 'Immer aktuell, und Ihr Eigentum'],
        cons: [],
      },
    ],
    fair: 'Fairerweise: Baukasten-Websites sind oft schnell, und ein schlanker Einmal-Bau, den Sie selten ändern, kann weniger kosten. Wenn das auf Sie zutrifft, sagen wir es Ihnen.',
    link: 'Im Detail vergleichen',
  },
  price: {
    num: '04 — Der Preis',
    title: '150 pro Monat. Keine Stufen, keine Extras, keine *Überraschungen*.',
    lede: 'Derselbe Preis für eine Website oder fünfzig. Pro Website, exkl. MwSt., in CHF, EUR oder USD, je nach Ihrem Markt.',
    link: 'Die Kosten über fünf Jahre',
  },
  how: {
    num: '05 — So funktioniert es',
    title: 'Erst die Marke, dann die Website. Live in zwei bis drei *Wochen*.',
    steps: [
      { t: 'Ein 30-minütiges Gespräch', d: 'Wir lernen Ihr Unternehmen kennen: wen Sie bedienen, was Sie unterscheidet, wie Sie mit Gästen sprechen.' },
      { t: 'Ihr Markenleitfaden', d: 'Wir schreiben ihn für Sie: Tonalität, Farben, Schrift, Bildsprache. Sie geben ihn frei und behalten ihn.' },
      { t: 'Ihre Website', d: 'Aus dem Leitfaden gebaut, auf einem privaten Link gezeigt und überarbeitet, bis Sie zufrieden sind.' },
      { t: 'Änderungen per E-Mail', d: 'Schreiben Sie, was Sie ändern möchten. AI entwirft es, ein Mensch prüft es, und es ist innerhalb eines Tages live.' },
    ],
    note: 'Warum zuerst die Marke? Eine Website ohne klare Richtung wird beliebig. Eine Website aus Ihrem eigenen Markenleitfaden klingt und wirkt wie Ihr Unternehmen, nicht wie AI.',
  },
  final: {
    num: '06 — Nächster Schritt',
    title: 'Buchen Sie ein Gespräch. Dort beginnt Ihr *Markenleitfaden*.',
    lede: 'Dreissig Minuten. Wir lernen Ihr Unternehmen kennen, beantworten jede Frage ehrlich und sagen Ihnen offen, wenn Astia Web nicht das Richtige ist.',
    or: 'Oder schreiben Sie an',
  },
};

const it: HomeCopy = {
  seo: {
    title: 'Siti web per hotel e piccole imprese · Astia Web',
    description:
      'Un prezzo per tutto ciò che serve al vostro sito: 150 al mese per linee guida del brand, sito su misura, ogni modifica e ogni lingua. Per hotel e PMI.',
  },
  hero: {
    eyebrow: 'Un prezzo · Tutto incluso',
    title: 'Un prezzo per *tutto* ciò che serve al vostro sito.',
    lede: 'Scriviamo le linee guida del vostro brand, costruiamo il sito e lo gestiamo per 150 al mese. Ogni modifica, ogni lingua, online entro un giorno.',
  },
  pillars: [
    { num: '01 — Prezzo', title: 'Un prezzo *giusto*' },
    { num: '02 — Persone', title: 'Sempre una *persona*' },
    { num: '03 — Futuro', title: 'Un sito sempre *aggiornato*' },
  ],
  changed: {
    num: '01 — Cosa è cambiato',
    title: 'I vostri ospiti non si limitano più a cercare. *Chiedono*.',
    body: 'Sempre più spesso Google risponde da solo, con un riassunto IA in cima ai risultati. L\u2019ospite ottiene la risposta senza aprire nessun sito, nemmeno il vostro.',
    tabs: ['Google mostra i siti', 'Google risponde con l\u2019IA'],
    values: [15, 8],
    valueLabel: 'ricerche su 100 portano qualcuno su un sito web.',
    hint: 'Google mostra un elenco di siti. Ora guardate cosa succede quando risponde con l\u2019IA.',
    drop: 'Quasi metà delle visite è sparita. L\u2019ospite ha avuto la risposta da Google e non ha mai aperto un sito.',
    legend: ['Una visita a un sito web', 'Una visita che non avviene più'],
    stats: [
      { v: '1 su 100', l: 'visite a una pagina Google con riassunto IA ha incluso un clic su un link al suo interno.' },
      { v: '1 su 5', l: 'ricerche su Google mostrava già un riassunto IA a marzo 2025.' },
    ],
    source: 'Pew Research Center, luglio 2025. 68’879 ricerche Google di 900 adulti negli Stati Uniti, marzo 2025.',
    meaning: {
      label: 'Cosa significa per voi',
      items: [
        { t: 'Non si può spegnere.', d: 'È Google a decidere quando rispondere con l\u2019IA, non voi. Succede già per una ricerca su cinque.' },
        { t: 'Quindi l\u2019IA deve conoscervi.', d: 'Quando un ospite chiede un hotel tranquillo sul lago con colazione, l\u2019IA consiglia le strutture di cui riesce a leggere le informazioni: cosa offrite, dove siete, i prezzi, come prenotare. Se il vostro sito non le dice chiaramente, consiglia qualcun altro.' },
        { t: 'I siti Astia sono fatti per questo.', d: 'Ogni sito Astia presenta queste informazioni in una forma che l\u2019IA sa leggere, si carica velocemente e viene aggiornato quando Google e gli strumenti IA cambiano le regole. Incluso nei 150. Un sito costruito nel 2019 non è stato pensato per questo, e non si aggiorna da solo.' },
      ],
      link: 'Guardate cosa legge un\u2019IA su un sito Astia',
    },
    bridge: 'Nessuno sa come sarà la ricerca tra due anni. Per scoprirlo, il vostro sito non dovrebbe aver bisogno di essere sostituito.',
  },
  cycle: {
    num: '02 — Il ciclo del rifacimento',
    title: 'Un sito una tantum inizia a invecchiare il giorno del *lancio*.',
    tabs: ['Sito una tantum', 'Astia Web'],
    oneOff: [
      { when: 'Lancio', what: 'Sembra nuovo. Pagato per intero.' },
      { when: 'Mesi da 1 a 12', what: 'Le piccole modifiche diventano fatture e attese.' },
      { when: 'Anno 2', what: 'I plugin si accumulano. La velocità cala. Il design invecchia.' },
      { when: 'Anno 3', what: 'Il web è cambiato: ricerca con IA, nuove regole, nuovi dispositivi.' },
      { when: 'Anni da 3 a 5', what: 'Si ricomincia: nuova agenzia, nuovo sito, nuova fattura.' },
    ],
    astia: [
      { when: 'Lancio', what: 'Costruito dalle vostre linee guida del brand. Nessun costo di attivazione.' },
      { when: 'Ogni giorno feriale', what: 'Modifiche via email, online entro un giorno.' },
      { when: 'Ogni anno', what: 'Una revisione del sito, dei contenuti e della tecnologia.' },
      { when: 'Quando il web cambia', what: 'Ricostruito su una nuova tecnologia. Incluso.' },
      { when: 'Qualunque cosa arrivi', what: 'Se i siti lasceranno il posto a qualcosa di nuovo, vi ci portiamo noi.' },
    ],
    panelTitle: 'Con Astia Web non c’è nessun *ciclo*.',
    panelBody:
      'Il sito viene aggiornato ogni mese, rivisto ogni anno e ricostruito su una nuova tecnologia quando il web va avanti. Incluso nei 150. Se i siti come li conosciamo lasceranno il posto a qualcosa di nuovo, vi ci portiamo noi.',
  },
  routes: {
    num: '03 — La scelta',
    title: 'Tre modi per avere un sito. Uno tiene il *passo*.',
    items: [
      {
        label: 'Strada A',
        title: 'Farlo da soli',
        sub: 'Wix, Squarespace e strumenti simili',
        pros: ['Canone mensile basso'],
        cons: ['Il lavoro lo fate voi, la sera e nei fine settimana', 'Il sito vive sulla loro piattaforma, non sulla vostra'],
      },
      {
        label: 'Strada B',
        title: 'Un’agenzia WordPress economica',
        sub: 'Un sito una tantum, poi hosting e aggiornamenti',
        pros: ['Prezzo d’ingresso basso'],
        cons: ['Ogni modifica dopo il lancio è una fattura', 'Plugin, patch e un rifacimento ogni pochi anni'],
      },
      {
        label: 'Strada C',
        title: 'Astia Web',
        sub: 'Un abbonamento, tutto incluso',
        pros: ['150 al mese, nessun costo di attivazione', 'Modifiche via email, online entro un giorno', 'Sempre aggiornato, e vostro'],
        cons: [],
      },
    ],
    fair: 'Per essere onesti: i siti fatti con questi strumenti sono spesso veloci, e un sito una tantum essenziale che cambiate raramente può costare meno. Se è il vostro caso, ve lo diremo.',
    link: 'Il confronto nel dettaglio',
  },
  price: {
    num: '04 — Il prezzo',
    title: '150 al mese. Niente fasce, niente extra, niente *sorprese*.',
    lede: 'Stesso prezzo per un sito o cinquanta. Per sito, IVA esclusa, in CHF, EUR o USD secondo il vostro mercato.',
    link: 'Il costo su cinque anni',
  },
  how: {
    num: '05 — Come funziona',
    title: 'Prima il brand, poi il sito. Online in due o tre *settimane*.',
    steps: [
      { t: 'Una chiamata di 30 minuti', d: 'Conosciamo la vostra attività: chi servite, cosa vi distingue, come parlate ai vostri ospiti.' },
      { t: 'Le linee guida del brand', d: 'Le scriviamo per voi: tono, colori, caratteri, immagini. Le approvate e restano vostre.' },
      { t: 'Il vostro sito', d: 'Costruito dalle linee guida, mostrato su un link privato, rivisto finché siete soddisfatti.' },
      { t: 'Modifiche via email', d: 'Scrivete cosa volete cambiare. L’IA prepara la modifica, una persona la controlla, ed è online entro un giorno.' },
    ],
    note: 'Perché prima il brand? Un sito senza una direzione chiara risulta generico. Un sito costruito dalle vostre linee guida parla e appare come la vostra attività, non come l’IA.',
  },
  final: {
    num: '06 — Il prossimo passo',
    title: 'Prenotate una chiamata. Le vostre linee guida del brand *iniziano* lì.',
    lede: 'Trenta minuti. Conosciamo la vostra attività, rispondiamo onestamente a ogni domanda e vi diciamo chiaramente se Astia Web non fa per voi.',
    or: 'Oppure scrivete a',
  },
};

export const home: Record<Lang, HomeCopy> = { en, de, it };
