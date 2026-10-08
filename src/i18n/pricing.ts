import type { Lang } from './index';

/** Five-year cost series from the commercial deck (illustrative, typical quotes). */
export const COST_SERIES = {
  typical: [6000, 7500, 9000, 13500, 15000, 16500],
  astia: [0, 1800, 3600, 5400, 7200, 9000],
  lean: [2000, 2360, 2720, 3080, 3440, 3800],
} as const;

const en = {
  seo: {
    title: 'Price · Astia Web · 150 a month, everything included',
    description:
      'One price for every site: 150 a month in CHF, EUR or USD, excluding VAT. Brand guide, custom website, every change, every language, hosting and upkeep included. No setup fee.',
  },
  hero: {
    eyebrow: 'One price · Everything included',
    title: '150 a month. Everything *included*.',
    lede: 'One price for every site. No setup fee, no tiers, no charges per page or per language. Same price for one site or fifty.',
  },
  included: {
    num: '01 — What is included',
    title: 'If it’s normal for a website, it’s *included*.',
  },
  cost: {
    num: '02 — The real cost',
    title: 'The cheap option gets expensive in year *three*.',
    lede: 'Five-year totals based on typical quotes: build, hosting and maintenance, changes after launch at 150 each, and one refresh.',
    x: ['Launch', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    series: {
      typical: 'Typical one-off build',
      astia: 'Astia Web',
      lean: 'Lean one-off build',
    },
    hint: 'Hover or tap the chart to compare a year.',
    callouts: {
      typical: 'five years of a typical one-off build: launch, hosting, paid changes and a refresh in year 3.',
      astia: 'five years of Astia Web. Every change, every language, kept current.',
    },
    honest: 'Honest note: a lean build you rarely change can cost less, {lean}. If that is you, we will say so.',
    larger: 'A larger one-off build reaches around {larger} over the same five years.',
    answerTitle: 'The answer, in order',
    answers: [
      { t: 'The work never ends.', d: 'Photos, prices, pages, seasons. With us they cost nothing extra and are live within a day.' },
      { t: 'The web keeps moving.', d: 'A one-off build is frozen at launch. Ours keeps up, and is rebuilt on new technology when that is needed.' },
      { t: 'The numbers.', d: '{astia} over five years against around {typical} for a typical one-off build.' },
      { t: 'The honest part.', d: 'If you want a simple site and will rarely change it, a lean one-off build is cheaper. We say so.' },
    ],
    footnote: 'Illustrative figures from typical quotes: build, hosting, changes at 150 each, a refresh. Astia Web: 150 a month.',
    tableCaption: 'Cumulative cost by year',
    yearCol: 'Year',
  },
  questions: {
    num: '03 — Before you sign anything',
    title: 'Five questions to ask any website *provider*.',
    lede: 'Ask them of us, and of anyone else you are talking to. Copy them with one click.',
  },
  faq: {
    num: '04 — Fair questions',
    title: 'What owners ask us before they *sign*.',
  },
};

export type PricingCopy = typeof en;

const de: PricingCopy = {
  seo: {
    title: 'Preis · Astia Web · 150 pro Monat, alles inklusive',
    description:
      'Ein Preis für jede Website: 150 pro Monat in CHF, EUR oder USD, exkl. MwSt. Markenleitfaden, individuelle Website, jede Änderung, jede Sprache, Hosting und Pflege inklusive. Keine Einrichtungsgebühr.',
  },
  hero: {
    eyebrow: 'Ein Preis · Alles inklusive',
    title: '150 pro Monat. Alles *inklusive*.',
    lede: 'Ein Preis für jede Website. Keine Einrichtungsgebühr, keine Stufen, keine Kosten pro Seite oder pro Sprache. Derselbe Preis für eine Website oder fünfzig.',
  },
  included: {
    num: '01 — Was inklusive ist',
    title: 'Was für eine Website normal ist, ist *inklusive*.',
  },
  cost: {
    num: '02 — Die echten Kosten',
    title: 'Die günstige Variante wird im dritten Jahr *teuer*.',
    lede: 'Summen über fünf Jahre, basierend auf typischen Offerten: Bau, Hosting und Wartung, Änderungen nach dem Start zu je 150 und eine Auffrischung.',
    x: ['Start', 'Jahr 1', 'Jahr 2', 'Jahr 3', 'Jahr 4', 'Jahr 5'],
    series: {
      typical: 'Typischer Einmal-Bau',
      astia: 'Astia Web',
      lean: 'Schlanker Einmal-Bau',
    },
    hint: 'Fahren Sie über die Grafik oder tippen Sie darauf, um ein Jahr zu vergleichen.',
    callouts: {
      typical: 'fünf Jahre eines typischen Einmal-Baus: Start, Hosting, bezahlte Änderungen und eine Auffrischung im dritten Jahr.',
      astia: 'fünf Jahre Astia Web. Jede Änderung, jede Sprache, immer aktuell.',
    },
    honest: 'Ehrlich gesagt: Ein schlanker Bau, den Sie selten ändern, kann weniger kosten, {lean}. Wenn das auf Sie zutrifft, sagen wir es Ihnen.',
    larger: 'Ein grösserer Einmal-Bau erreicht über dieselben fünf Jahre rund {larger}.',
    answerTitle: 'Die Antwort, der Reihe nach',
    answers: [
      { t: 'Die Arbeit hört nie auf.', d: 'Fotos, Preise, Seiten, Saisons. Bei uns kostet das nichts extra und ist innerhalb eines Tages live.' },
      { t: 'Das Web bewegt sich weiter.', d: 'Ein Einmal-Bau ist beim Start eingefroren. Unsere Website hält mit und wird auf neuer Technologie neu gebaut, wenn nötig.' },
      { t: 'Die Zahlen.', d: '{astia} über fünf Jahre gegenüber rund {typical} für einen typischen Einmal-Bau.' },
      { t: 'Der ehrliche Teil.', d: 'Wenn Sie eine einfache Website möchten und sie selten ändern, ist ein schlanker Einmal-Bau günstiger. Das sagen wir.' },
    ],
    footnote: 'Illustrative Zahlen aus typischen Offerten: Bau, Hosting, Änderungen zu je 150, eine Auffrischung. Astia Web: 150 pro Monat.',
    tableCaption: 'Kumulierte Kosten pro Jahr',
    yearCol: 'Jahr',
  },
  questions: {
    num: '03 — Bevor Sie etwas unterschreiben',
    title: 'Fünf Fragen an jeden Website-*Anbieter*.',
    lede: 'Stellen Sie sie uns und allen anderen, mit denen Sie sprechen. Mit einem Klick kopiert.',
  },
  faq: {
    num: '04 — Faire Fragen',
    title: 'Was Inhaber uns fragen, bevor sie *unterschreiben*.',
  },
};

const it: PricingCopy = {
  seo: {
    title: 'Prezzo · Astia Web · 150 al mese, tutto incluso',
    description:
      'Un prezzo per ogni sito: 150 al mese in CHF, EUR o USD, IVA esclusa. Linee guida del brand, sito su misura, ogni modifica, ogni lingua, hosting e manutenzione inclusi. Nessun costo di attivazione.',
  },
  hero: {
    eyebrow: 'Un prezzo · Tutto incluso',
    title: '150 al mese. Tutto *incluso*.',
    lede: 'Un prezzo per ogni sito. Nessun costo di attivazione, nessuna fascia, nessun costo per pagina o per lingua. Stesso prezzo per un sito o cinquanta.',
  },
  included: {
    num: '01 — Cosa è incluso',
    title: 'Se è normale per un sito, è *incluso*.',
  },
  cost: {
    num: '02 — Il costo reale',
    title: 'L’opzione economica diventa cara al terzo *anno*.',
    lede: 'Totali su cinque anni basati su preventivi tipici: realizzazione, hosting e manutenzione, modifiche dopo il lancio a 150 ciascuna, e un restyling.',
    x: ['Lancio', 'Anno 1', 'Anno 2', 'Anno 3', 'Anno 4', 'Anno 5'],
    series: {
      typical: 'Sito una tantum tipico',
      astia: 'Astia Web',
      lean: 'Sito una tantum essenziale',
    },
    hint: 'Passate il cursore o toccate il grafico per confrontare un anno.',
    callouts: {
      typical: 'cinque anni di un sito una tantum tipico: lancio, hosting, modifiche a pagamento e un restyling al terzo anno.',
      astia: 'cinque anni di Astia Web. Ogni modifica, ogni lingua, sempre aggiornato.',
    },
    honest: 'Per onestà: un sito essenziale che cambiate raramente può costare meno, {lean}. Se è il vostro caso, ve lo diremo.',
    larger: 'Un sito una tantum più grande arriva a circa {larger} negli stessi cinque anni.',
    answerTitle: 'La risposta, in ordine',
    answers: [
      { t: 'Il lavoro non finisce mai.', d: 'Foto, prezzi, pagine, stagioni. Con noi non costano nulla in più e sono online entro un giorno.' },
      { t: 'Il web continua a muoversi.', d: 'Un sito una tantum si ferma al lancio. Il nostro tiene il passo, e viene ricostruito su nuova tecnologia quando serve.' },
      { t: 'I numeri.', d: '{astia} in cinque anni contro circa {typical} per un sito una tantum tipico.' },
      { t: 'La parte onesta.', d: 'Se volete un sito semplice e lo cambierete raramente, un sito una tantum essenziale costa meno. Lo diciamo.' },
    ],
    footnote: 'Cifre indicative da preventivi tipici: realizzazione, hosting, modifiche a 150 ciascuna, un restyling. Astia Web: 150 al mese.',
    tableCaption: 'Costo cumulato per anno',
    yearCol: 'Anno',
  },
  questions: {
    num: '03 — Prima di firmare qualsiasi cosa',
    title: 'Cinque domande da fare a qualsiasi *fornitore*.',
    lede: 'Fatele a noi e a chiunque altro stiate valutando. Copiatele con un clic.',
  },
  faq: {
    num: '04 — Domande giuste',
    title: 'Cosa ci chiedono i titolari prima di *firmare*.',
  },
};

export const pricing: Record<Lang, PricingCopy> = { en, de, it };
