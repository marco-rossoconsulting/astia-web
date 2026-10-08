/**
 * Legal pages and consent copy: privacy policy, legal notice (imprint), the
 * intro to the General Terms, the analytics consent banner, the booking-form
 * notice and the footer links.
 *
 * Facts here come from the Astia Web Order Form and General Terms (Annex 1)
 * and from what the site actually does. Update them together: if a provider,
 * cookie or retention period changes, change this file and `updated`.
 *
 * Not legal advice; have the texts reviewed by a lawyer when anything changes.
 */
import type { Lang } from './index';

export type Block = { p: string } | { list: string[] } | { dl: [string, string][] };
export interface Section { title: string; blocks: Block[] }

/** Date of the latest change to the privacy policy and legal notice. */
export const LEGAL_UPDATED = '2026-10-08';

export const UID = 'CHE-188.786.759';

const en = {
  footer: {
    privacy: 'Privacy',
    legal: 'Legal notice',
    terms: 'Terms',
    cookies: 'Cookie settings',
  },
  consent: {
    title: 'Analytics, only if you agree',
    body: 'We would like to use Google Analytics to see which pages help visitors, so we can improve the site. It sets cookies and sends data to Google. No advertising.',
    accept: 'Accept analytics',
    reject: 'Reject',
    link: 'Privacy policy',
  },
  formNote: { before: 'We use your details only to reply to you. See our', link: 'privacy policy', after: '.' },
  updated: 'Last updated',
  privacy: {
    seo: {
      title: 'Privacy policy · Astia Web',
      description: 'How Astia Web handles personal data: what we collect, why, for how long, who processes it and your rights under the Swiss FADP and the EU GDPR.',
    },
    eyebrow: 'Privacy policy',
    title: 'How we handle your *data*.',
    lede: 'Plain words, as everywhere else on this site. We collect as little as we can, use it only for what we say here, and never sell it.',
    summaryTitle: 'In short',
    summary: [
      'Visiting the site: our host processes technical data, such as your IP address, to deliver the pages and keep them secure.',
      'Analytics: Google Analytics runs only if you accept it. No advertising.',
      'Book a call: we use your details only to reply and arrange the call.',
      'No cookies until you choose. Fonts and images come from our own server.',
    ],
    sections: [
      {
        title: 'Who is responsible',
        blocks: [
          { p: 'The controller for this website is:' },
          {
            dl: [
              ['Business', 'Marco Paolo Rosso, sole proprietorship (ditta individuale), trading as Marco Rosso Consulting, which operates Astia Web'],
              ['Address', 'Via Don G. Gagliardi 23, 6932 Breganzona (Lugano), Switzerland'],
              ['UID', UID],
              ['Privacy contact', 'hello@astiaweb.com, +41 76 433 5845'],
            ],
          },
          { p: 'This policy follows the Swiss Federal Act on Data Protection (FADP) and, where it applies to you, the EU General Data Protection Regulation (GDPR).' },
        ],
      },
      {
        title: 'When you visit the site',
        blocks: [
          { p: 'The site is hosted by Netlify, Inc., USA. To deliver the pages and protect the site against abuse, Netlify processes technical data: your IP address, browser and device type, the page requested, the referring page and the time. This data is kept in server logs and deleted by Netlify according to its own retention periods.' },
          { p: 'Legal basis: our legitimate interest in running a secure, working website (art. 6(1)(f) GDPR).' },
        ],
      },
      {
        title: 'When you book a call',
        blocks: [
          { p: 'If you use the form on our Book a call page, we receive your name, email address, business, website (if you give it) and the language of the page.' },
          {
            list: [
              'Purpose: to reply to you and arrange the call.',
              'Where it goes: the form is handled by Netlify Forms. A notification with your details is sent to our inbox through Resend, Inc., USA.',
              'Legal basis: steps taken at your request before a contract (art. 6(1)(b) GDPR) and our legitimate interest in answering enquiries (art. 6(1)(f) GDPR).',
              'How long: if the enquiry does not lead to a contract, we delete it within 12 months of our last contact. If you become a client, we keep it for the duration of the contract and as long as the law requires for business records (usually 10 years in Switzerland).',
            ],
          },
        ],
      },
      {
        title: 'When you pick a time in the calendar',
        blocks: [
          { p: 'The calendar button takes you to a booking page run by Google (Google Ireland Limited, Ireland, and Google LLC, USA). If you book a slot there, Google processes the details you enter under its own privacy policy, and we receive your name, email address and the time you chose. We keep these on the same terms as call requests above.' },
        ],
      },
      {
        title: 'When you email or call us',
        blocks: [
          { p: 'We use what you send us to answer you, through our email and telephone providers. We keep correspondence as long as the matter needs, and longer only where the law requires it.' },
        ],
      },
      {
        title: 'Analytics, only with your consent',
        blocks: [
          { p: 'If you click "Accept analytics", we use Google Analytics 4 (Google Ireland Limited and Google LLC) to see how the site is used: which pages are visited, roughly from where (country or city, derived from the IP address, which Google Analytics 4 does not store), on which kind of device, and whether someone clicks "Book a call". This helps us improve the site.' },
          {
            list: [
              'Cookies: Google Analytics sets the cookies _ga and _ga_<ID>, which contain a random identifier and expire after up to 2 years.',
              'Advertising: Google signals and ad personalisation are switched off. We do not use the data for advertising.',
              'How long: Google keeps the analytics data for the period set in our account, at most 14 months.',
              'Legal basis: your consent (art. 6(1)(a) GDPR). You can withdraw it at any time with "Cookie settings" at the bottom of every page. The analytics cookies are then deleted.',
            ],
          },
          { p: 'If you click "Reject", or do nothing, Google Analytics is not loaded and no analytics cookies are set.' },
        ],
      },
      {
        title: 'Cookies and local storage',
        blocks: [
          { p: 'Without your consent we set no cookies. Your browser stores two small settings on your own device, which are not sent to us: your cookie choice and the currency you picked on the price page (CHF, EUR or USD).' },
        ],
      },
      {
        title: 'Fonts, images and other content',
        blocks: [
          { p: 'All fonts and images are served from our own website. We do not embed social media plug-ins, videos or maps from other services.' },
        ],
      },
      {
        title: 'Transfers outside Switzerland and the EU',
        blocks: [
          { p: 'Netlify, Resend and Google may process data in the United States. These transfers rely on an adequacy decision, such as the Swiss-US and EU-US Data Privacy Framework where the provider is certified, or on standard contractual clauses approved by the European Commission and recognised in Switzerland.' },
        ],
      },
      {
        title: 'Your rights',
        blocks: [
          { p: 'You can ask us at any time what data we hold about you, and have it corrected or deleted. You can also object to its processing, ask us to restrict it, receive your data in a common format, and withdraw any consent with effect for the future. Write to hello@astiaweb.com; we reply within 30 days. We make no automated decisions that have legal effects for you.' },
          { p: 'If you think we handle your data unlawfully, you can complain to the Swiss Federal Data Protection and Information Commissioner (FDPIC, www.edoeb.admin.ch) or to the data protection authority where you live or work in the EU.' },
        ],
      },
      {
        title: 'Security',
        blocks: [
          { p: 'The site is served only over encrypted connections (HTTPS). It is a static site without a database or public admin login, and our accounts are protected with two-factor authentication where available.' },
        ],
      },
      {
        title: 'Websites we run for clients',
        blocks: [
          { p: 'If you are visiting a website that Astia Web builds and runs for a client, that client is responsible for the personal data on its site, and its own privacy policy applies. We process data there on the client’s behalf, under the data processing terms in Annex 1 of our General Terms.' },
        ],
      },
      {
        title: 'Changes to this policy',
        blocks: [
          { p: 'We update this page when our processing changes. The date at the top shows the latest version.' },
        ],
      },
    ] as Section[],
  },
  legal: {
    seo: {
      title: 'Legal notice · Astia Web',
      description: 'Legal notice for astiaweb.com: Astia Web is a product of Marco Rosso Consulting, Breganzona (Lugano), Switzerland. UID CHE-188.786.759.',
    },
    eyebrow: 'Legal notice',
    title: 'Who is behind this *website*.',
    lede: 'Astia Web is a product of Marco Rosso Consulting, a sole proprietorship in Lugano, Switzerland.',
    sections: [
      {
        title: 'Operator',
        blocks: [
          {
            dl: [
              ['Business', 'Marco Paolo Rosso, sole proprietorship (ditta individuale), trading as Marco Rosso Consulting'],
              ['Brand', 'Astia Web'],
              ['Address', 'Via Don G. Gagliardi 23, 6932 Breganzona (Lugano), Switzerland'],
              ['UID', UID],
              ['VAT', 'Not registered for VAT'],
              ['Responsible for content', 'Marco Rosso'],
            ],
          },
        ],
      },
      {
        title: 'Contact',
        blocks: [
          {
            dl: [
              ['Email', 'hello@astiaweb.com'],
              ['Phone', '+41 76 433 5845'],
              ['Formal notices', 'marco@rossoconsulting.ch'],
            ],
          },
        ],
      },
      {
        title: 'Liability for content',
        blocks: [
          { p: 'We take care that everything on this site is correct and current, but we cannot guarantee it. Figures quoted from studies name their source. Prices exclude VAT. The binding terms are the Order Form and General Terms signed with each client.' },
        ],
      },
      {
        title: 'Links to other websites',
        blocks: [
          { p: 'Links to other websites are there for convenience. We do not control their content and are not responsible for it.' },
        ],
      },
      {
        title: 'Copyright',
        blocks: [
          { p: 'Text, design and code on this site belong to Marco Rosso Consulting unless stated otherwise. Client names, photos and websites are shown with the client’s permission. Please ask before reusing any of it.' },
        ],
      },
      {
        title: 'Hosting and privacy',
        blocks: [
          { p: 'This website is hosted by Netlify, Inc., USA. How we handle personal data is explained in our privacy policy.' },
        ],
      },
    ] as Section[],
  },
  terms: {
    seo: {
      title: 'General Terms · Astia Web',
      description: 'The General Terms and data processing annex every Astia Web client signs: price, term, ownership, handover, liability, Swiss law.',
    },
    eyebrow: 'General Terms',
    title: 'The terms we sign, in *full*.',
    lede: 'Every Astia Web client signs these. Read them before our first call. The plain summary comes first; the clauses below it are what counts.',
    languageNote: '',
    summaryTitle: 'In short',
    contents: 'Contents',
  },
};

export type LegalCopy = typeof en;

const de: LegalCopy = {
  footer: {
    privacy: 'Datenschutz',
    legal: 'Impressum',
    terms: 'AGB',
    cookies: 'Cookie-Einstellungen',
  },
  consent: {
    title: 'Analytics, nur mit Ihrer Zustimmung',
    body: 'Wir möchten Google Analytics nutzen, um zu sehen, welche Seiten Besuchern helfen, und die Website zu verbessern. Dabei werden Cookies gesetzt und Daten an Google übermittelt. Keine Werbung.',
    accept: 'Analytics akzeptieren',
    reject: 'Ablehnen',
    link: 'Datenschutzerklärung',
  },
  formNote: { before: 'Wir verwenden Ihre Angaben nur, um Ihnen zu antworten. Siehe unsere', link: 'Datenschutzerklärung', after: '.' },
  updated: 'Zuletzt aktualisiert',
  privacy: {
    seo: {
      title: 'Datenschutzerklärung · Astia Web',
      description: 'Wie Astia Web Personendaten bearbeitet: was wir erheben, wozu, wie lange, wer sie bearbeitet und Ihre Rechte nach dem Schweizer DSG und der EU-DSGVO.',
    },
    eyebrow: 'Datenschutzerklärung',
    title: 'Wie wir mit Ihren Daten *umgehen*.',
    lede: 'In klaren Worten, wie überall auf dieser Website. Wir erheben so wenig wie möglich, verwenden es nur für das, was hier steht, und verkaufen nichts.',
    summaryTitle: 'Kurz gesagt',
    summary: [
      'Besuch der Website: Unser Hoster bearbeitet technische Daten wie Ihre IP-Adresse, um die Seiten auszuliefern und sicher zu halten.',
      'Analytics: Google Analytics läuft nur, wenn Sie zustimmen. Keine Werbung.',
      'Gespräch buchen: Wir verwenden Ihre Angaben nur, um zu antworten und das Gespräch zu vereinbaren.',
      'Keine Cookies, bevor Sie wählen. Schriften und Bilder kommen von unserem eigenen Server.',
    ],
    sections: [
      {
        title: 'Verantwortlich',
        blocks: [
          { p: 'Verantwortlich für diese Website ist:' },
          {
            dl: [
              ['Unternehmen', 'Marco Paolo Rosso, Einzelunternehmen (ditta individuale), tätig als Marco Rosso Consulting, das Astia Web betreibt'],
              ['Adresse', 'Via Don G. Gagliardi 23, 6932 Breganzona (Lugano), Schweiz'],
              ['UID', UID],
              ['Kontakt Datenschutz', 'hello@astiaweb.com, +41 76 433 5845'],
            ],
          },
          { p: 'Diese Erklärung folgt dem Schweizer Bundesgesetz über den Datenschutz (DSG) und, soweit sie für Sie gilt, der EU-Datenschutz-Grundverordnung (DSGVO).' },
        ],
      },
      {
        title: 'Wenn Sie die Website besuchen',
        blocks: [
          { p: 'Die Website wird von Netlify, Inc., USA, gehostet. Um die Seiten auszuliefern und die Website vor Missbrauch zu schützen, bearbeitet Netlify technische Daten: Ihre IP-Adresse, Browser- und Gerätetyp, die aufgerufene Seite, die verweisende Seite und den Zeitpunkt. Diese Daten werden in Server-Logs gespeichert und von Netlify gemäss seinen eigenen Aufbewahrungsfristen gelöscht.' },
          { p: 'Rechtsgrundlage: unser berechtigtes Interesse an einer sicheren, funktionierenden Website (Art. 6 Abs. 1 lit. f DSGVO).' },
        ],
      },
      {
        title: 'Wenn Sie ein Gespräch buchen',
        blocks: [
          { p: 'Wenn Sie das Formular auf unserer Seite «Gespräch buchen» nutzen, erhalten wir Ihren Namen, Ihre E-Mail-Adresse, Ihr Unternehmen, Ihre Website (falls angegeben) und die Sprache der Seite.' },
          {
            list: [
              'Zweck: Ihnen antworten und das Gespräch vereinbaren.',
              'Wohin die Daten gehen: Das Formular wird von Netlify Forms verarbeitet. Eine Benachrichtigung mit Ihren Angaben geht über Resend, Inc., USA, an unser Postfach.',
              'Rechtsgrundlage: vorvertragliche Massnahmen auf Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO) und unser berechtigtes Interesse, Anfragen zu beantworten (Art. 6 Abs. 1 lit. f DSGVO).',
              'Wie lange: Führt die Anfrage nicht zu einem Vertrag, löschen wir sie innerhalb von 12 Monaten nach unserem letzten Kontakt. Werden Sie Kunde, bewahren wir sie für die Dauer des Vertrags auf und so lange, wie das Gesetz es für Geschäftsunterlagen verlangt (in der Schweiz in der Regel 10 Jahre).',
            ],
          },
        ],
      },
      {
        title: 'Wenn Sie im Kalender einen Termin wählen',
        blocks: [
          { p: 'Die Kalender-Schaltfläche führt Sie zu einer Buchungsseite von Google (Google Ireland Limited, Irland, und Google LLC, USA). Wenn Sie dort einen Termin buchen, bearbeitet Google Ihre Angaben gemäss seiner eigenen Datenschutzerklärung, und wir erhalten Ihren Namen, Ihre E-Mail-Adresse und den gewählten Termin. Wir bewahren diese zu denselben Bedingungen auf wie Gesprächsanfragen oben.' },
        ],
      },
      {
        title: 'Wenn Sie uns schreiben oder anrufen',
        blocks: [
          { p: 'Wir verwenden, was Sie uns senden, um Ihnen zu antworten, über unsere E-Mail- und Telefonanbieter. Korrespondenz bewahren wir so lange auf, wie die Sache es erfordert, und länger nur, wenn das Gesetz es verlangt.' },
        ],
      },
      {
        title: 'Analytics, nur mit Ihrer Einwilligung',
        blocks: [
          { p: 'Wenn Sie auf «Analytics akzeptieren» klicken, nutzen wir Google Analytics 4 (Google Ireland Limited und Google LLC), um zu sehen, wie die Website genutzt wird: welche Seiten besucht werden, ungefähr von wo (Land oder Stadt, abgeleitet aus der IP-Adresse, die Google Analytics 4 nicht speichert), mit welcher Art Gerät und ob jemand auf «Gespräch buchen» klickt. Das hilft uns, die Website zu verbessern.' },
          {
            list: [
              'Cookies: Google Analytics setzt die Cookies _ga und _ga_<ID>, die eine zufällige Kennung enthalten und nach höchstens 2 Jahren ablaufen.',
              'Werbung: Google Signals und personalisierte Werbung sind ausgeschaltet. Wir nutzen die Daten nicht für Werbung.',
              'Wie lange: Google bewahrt die Analytics-Daten so lange auf, wie in unserem Konto eingestellt, höchstens 14 Monate.',
              'Rechtsgrundlage: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können sie jederzeit über «Cookie-Einstellungen» unten auf jeder Seite widerrufen. Die Analytics-Cookies werden dann gelöscht.',
            ],
          },
          { p: 'Wenn Sie auf «Ablehnen» klicken oder nichts tun, wird Google Analytics nicht geladen und es werden keine Analytics-Cookies gesetzt.' },
        ],
      },
      {
        title: 'Cookies und lokaler Speicher',
        blocks: [
          { p: 'Ohne Ihre Einwilligung setzen wir keine Cookies. Ihr Browser speichert zwei kleine Einstellungen auf Ihrem eigenen Gerät, die nicht an uns gesendet werden: Ihre Cookie-Wahl und die Währung, die Sie auf der Preisseite gewählt haben (CHF, EUR oder USD).' },
        ],
      },
      {
        title: 'Schriften, Bilder und andere Inhalte',
        blocks: [
          { p: 'Alle Schriften und Bilder werden von unserer eigenen Website geladen. Wir binden keine Social-Media-Plugins, Videos oder Karten anderer Dienste ein.' },
        ],
      },
      {
        title: 'Übermittlung ausserhalb der Schweiz und der EU',
        blocks: [
          { p: 'Netlify, Resend und Google können Daten in den USA bearbeiten. Diese Übermittlungen stützen sich auf einen Angemessenheitsbeschluss, etwa das Swiss-US und EU-US Data Privacy Framework, sofern der Anbieter zertifiziert ist, oder auf Standardvertragsklauseln, die von der Europäischen Kommission genehmigt und in der Schweiz anerkannt sind.' },
        ],
      },
      {
        title: 'Ihre Rechte',
        blocks: [
          { p: 'Sie können jederzeit Auskunft verlangen, welche Daten wir über Sie haben, und sie berichtigen oder löschen lassen. Sie können der Bearbeitung auch widersprechen, ihre Einschränkung verlangen, Ihre Daten in einem gängigen Format erhalten und eine Einwilligung mit Wirkung für die Zukunft widerrufen. Schreiben Sie an hello@astiaweb.com; wir antworten innerhalb von 30 Tagen. Wir treffen keine automatisierten Entscheidungen mit rechtlicher Wirkung für Sie.' },
          { p: 'Wenn Sie der Meinung sind, dass wir Ihre Daten unrechtmässig bearbeiten, können Sie sich beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB, www.edoeb.admin.ch) beschweren oder bei der Datenschutzbehörde in dem EU-Land, in dem Sie wohnen oder arbeiten.' },
        ],
      },
      {
        title: 'Sicherheit',
        blocks: [
          { p: 'Die Website wird nur über verschlüsselte Verbindungen (HTTPS) ausgeliefert. Sie ist eine statische Website ohne Datenbank und ohne öffentliches Admin-Login, und unsere Konten sind, wo verfügbar, mit Zwei-Faktor-Authentifizierung geschützt.' },
        ],
      },
      {
        title: 'Websites, die wir für Kunden betreiben',
        blocks: [
          { p: 'Wenn Sie eine Website besuchen, die Astia Web für einen Kunden baut und betreibt, ist dieser Kunde für die Personendaten auf seiner Website verantwortlich, und es gilt seine eigene Datenschutzerklärung. Wir bearbeiten die Daten dort im Auftrag des Kunden, gemäss den Bestimmungen zur Auftragsbearbeitung in Anhang 1 unserer AGB.' },
        ],
      },
      {
        title: 'Änderungen dieser Erklärung',
        blocks: [
          { p: 'Wir aktualisieren diese Seite, wenn sich unsere Datenbearbeitung ändert. Das Datum oben zeigt die aktuelle Fassung.' },
        ],
      },
    ] as Section[],
  },
  legal: {
    seo: {
      title: 'Impressum · Astia Web',
      description: 'Impressum von astiaweb.com: Astia Web ist ein Produkt von Marco Rosso Consulting, Breganzona (Lugano), Schweiz. UID CHE-188.786.759.',
    },
    eyebrow: 'Impressum',
    title: 'Wer hinter dieser Website *steht*.',
    lede: 'Astia Web ist ein Produkt von Marco Rosso Consulting, einem Einzelunternehmen in Lugano, Schweiz.',
    sections: [
      {
        title: 'Betreiber',
        blocks: [
          {
            dl: [
              ['Unternehmen', 'Marco Paolo Rosso, Einzelunternehmen (ditta individuale), tätig als Marco Rosso Consulting'],
              ['Marke', 'Astia Web'],
              ['Adresse', 'Via Don G. Gagliardi 23, 6932 Breganzona (Lugano), Schweiz'],
              ['UID', UID],
              ['MWST', 'Nicht im MWST-Register eingetragen'],
              ['Verantwortlich für den Inhalt', 'Marco Rosso'],
            ],
          },
        ],
      },
      {
        title: 'Kontakt',
        blocks: [
          {
            dl: [
              ['E-Mail', 'hello@astiaweb.com'],
              ['Telefon', '+41 76 433 5845'],
              ['Formelle Mitteilungen', 'marco@rossoconsulting.ch'],
            ],
          },
        ],
      },
      {
        title: 'Haftung für Inhalte',
        blocks: [
          { p: 'Wir achten darauf, dass alles auf dieser Website richtig und aktuell ist, können dies aber nicht garantieren. Zahlen aus Studien nennen ihre Quelle. Preise verstehen sich exkl. MWST. Verbindlich sind das Bestellformular und die AGB, die mit jedem Kunden unterzeichnet werden.' },
        ],
      },
      {
        title: 'Links zu anderen Websites',
        blocks: [
          { p: 'Links zu anderen Websites dienen der Bequemlichkeit. Wir haben keinen Einfluss auf deren Inhalte und sind dafür nicht verantwortlich.' },
        ],
      },
      {
        title: 'Urheberrecht',
        blocks: [
          { p: 'Texte, Design und Code dieser Website gehören Marco Rosso Consulting, sofern nicht anders angegeben. Namen, Fotos und Websites von Kunden werden mit deren Erlaubnis gezeigt. Bitte fragen Sie, bevor Sie etwas davon weiterverwenden.' },
        ],
      },
      {
        title: 'Hosting und Datenschutz',
        blocks: [
          { p: 'Diese Website wird von Netlify, Inc., USA, gehostet. Wie wir Personendaten bearbeiten, erklärt unsere Datenschutzerklärung.' },
        ],
      },
    ] as Section[],
  },
  terms: {
    seo: {
      title: 'Allgemeine Geschäftsbedingungen · Astia Web',
      description: 'Die AGB und der Anhang zur Auftragsbearbeitung, die jeder Astia-Web-Kunde unterzeichnet. Verbindlich auf Englisch.',
    },
    eyebrow: 'AGB',
    title: 'Die Bedingungen, die wir *unterzeichnen*.',
    lede: 'Jeder Astia-Web-Kunde unterzeichnet diese Bedingungen. Lesen Sie sie vor unserem ersten Gespräch.',
    languageNote: 'Unsere Allgemeinen Geschäftsbedingungen bestehen auf Englisch und Italienisch; massgebend ist die englische Fassung. Unten finden Sie den englischen Originaltext.',
    summaryTitle: 'In short',
    contents: 'Contents',
  },
};

const it: LegalCopy = {
  footer: {
    privacy: 'Privacy',
    legal: 'Note legali',
    terms: 'Condizioni generali',
    cookies: 'Impostazioni cookie',
  },
  consent: {
    title: 'Statistiche, solo con il vostro consenso',
    body: 'Vorremmo usare Google Analytics per capire quali pagine sono utili ai visitatori e migliorare il sito. Imposta dei cookie e invia dati a Google. Nessuna pubblicità.',
    accept: 'Accetta le statistiche',
    reject: 'Rifiuta',
    link: 'Informativa sulla privacy',
  },
  formNote: { before: 'Usiamo i vostri dati solo per rispondervi. Vedete la nostra', link: 'informativa sulla privacy', after: '.' },
  updated: 'Ultimo aggiornamento',
  privacy: {
    seo: {
      title: 'Informativa sulla privacy · Astia Web',
      description: 'Come Astia Web tratta i dati personali: cosa raccogliamo, perché, per quanto tempo, chi li tratta e i vostri diritti secondo la LPD svizzera e il GDPR.',
    },
    eyebrow: 'Informativa sulla privacy',
    title: 'Come trattiamo i vostri *dati*.',
    lede: 'Con parole semplici, come nel resto del sito. Raccogliamo il meno possibile, lo usiamo solo per quanto scritto qui e non lo vendiamo mai.',
    summaryTitle: 'In breve',
    summary: [
      'Visita del sito: il nostro hosting tratta dati tecnici, come l’indirizzo IP, per mostrare le pagine e mantenerle sicure.',
      'Statistiche: Google Analytics si attiva solo se lo accettate. Nessuna pubblicità.',
      'Prenotare una chiamata: usiamo i vostri dati solo per rispondervi e fissare la chiamata.',
      'Nessun cookie finché non scegliete. Caratteri e immagini arrivano dal nostro server.',
    ],
    sections: [
      {
        title: 'Titolare del trattamento',
        blocks: [
          { p: 'Il titolare del trattamento per questo sito è:' },
          {
            dl: [
              ['Attività', 'Marco Paolo Rosso, ditta individuale, operante come Marco Rosso Consulting, che gestisce Astia Web'],
              ['Indirizzo', 'Via Don G. Gagliardi 23, 6932 Breganzona (Lugano), Svizzera'],
              ['IDI', UID],
              ['Contatto privacy', 'hello@astiaweb.com, +41 76 433 5845'],
            ],
          },
          { p: 'Questa informativa segue la Legge federale svizzera sulla protezione dei dati (LPD) e, dove si applica a voi, il Regolamento generale UE sulla protezione dei dati (GDPR).' },
        ],
      },
      {
        title: 'Quando visitate il sito',
        blocks: [
          { p: 'Il sito è ospitato da Netlify, Inc., USA. Per mostrare le pagine e proteggere il sito dagli abusi, Netlify tratta dati tecnici: indirizzo IP, tipo di browser e dispositivo, pagina richiesta, pagina di provenienza e ora. Questi dati sono conservati nei log del server e cancellati da Netlify secondo i propri tempi di conservazione.' },
          { p: 'Base giuridica: il nostro legittimo interesse a gestire un sito sicuro e funzionante (art. 6, par. 1, lett. f GDPR).' },
        ],
      },
      {
        title: 'Quando prenotate una chiamata',
        blocks: [
          { p: 'Se usate il modulo della pagina «Prenota una chiamata», riceviamo nome, indirizzo email, attività, sito web (se lo indicate) e la lingua della pagina.' },
          {
            list: [
              'Scopo: rispondervi e fissare la chiamata.',
              'Dove vanno i dati: il modulo è gestito da Netlify Forms. Una notifica con i vostri dati arriva nella nostra casella email tramite Resend, Inc., USA.',
              'Base giuridica: misure precontrattuali su vostra richiesta (art. 6, par. 1, lett. b GDPR) e il nostro legittimo interesse a rispondere alle richieste (art. 6, par. 1, lett. f GDPR).',
              'Per quanto tempo: se la richiesta non porta a un contratto, la cancelliamo entro 12 mesi dal nostro ultimo contatto. Se diventate clienti, la conserviamo per la durata del contratto e per il tempo richiesto dalla legge per i documenti aziendali (in Svizzera di norma 10 anni).',
            ],
          },
        ],
      },
      {
        title: 'Quando scegliete un orario nel calendario',
        blocks: [
          { p: 'Il pulsante del calendario vi porta a una pagina di prenotazione gestita da Google (Google Ireland Limited, Irlanda, e Google LLC, USA). Se prenotate un orario, Google tratta i dati che inserite secondo la propria informativa sulla privacy, e noi riceviamo nome, indirizzo email e l’orario scelto. Li conserviamo alle stesse condizioni delle richieste di chiamata qui sopra.' },
        ],
      },
      {
        title: 'Quando ci scrivete o ci chiamate',
        blocks: [
          { p: 'Usiamo ciò che ci inviate per rispondervi, tramite i nostri fornitori di email e telefonia. Conserviamo la corrispondenza per il tempo necessario alla questione, e più a lungo solo se la legge lo richiede.' },
        ],
      },
      {
        title: 'Statistiche, solo con il vostro consenso',
        blocks: [
          { p: 'Se cliccate su «Accetta le statistiche», usiamo Google Analytics 4 (Google Ireland Limited e Google LLC) per capire come viene usato il sito: quali pagine vengono visitate, all’incirca da dove (paese o città, ricavati dall’indirizzo IP, che Google Analytics 4 non memorizza), con quale tipo di dispositivo e se qualcuno clicca su «Prenota una chiamata». Questo ci aiuta a migliorare il sito.' },
          {
            list: [
              'Cookie: Google Analytics imposta i cookie _ga e _ga_<ID>, che contengono un identificativo casuale e scadono al massimo dopo 2 anni.',
              'Pubblicità: Google Signals e la personalizzazione degli annunci sono disattivati. Non usiamo i dati per la pubblicità.',
              'Per quanto tempo: Google conserva i dati statistici per il periodo impostato nel nostro account, al massimo 14 mesi.',
              'Base giuridica: il vostro consenso (art. 6, par. 1, lett. a GDPR). Potete revocarlo in qualsiasi momento con «Impostazioni cookie» in fondo a ogni pagina. I cookie statistici vengono allora cancellati.',
            ],
          },
          { p: 'Se cliccate su «Rifiuta», o non fate nulla, Google Analytics non viene caricato e non viene impostato alcun cookie statistico.' },
        ],
      },
      {
        title: 'Cookie e archiviazione locale',
        blocks: [
          { p: 'Senza il vostro consenso non impostiamo cookie. Il vostro browser salva due piccole impostazioni sul vostro dispositivo, che non ci vengono inviate: la vostra scelta sui cookie e la valuta scelta nella pagina dei prezzi (CHF, EUR o USD).' },
        ],
      },
      {
        title: 'Caratteri, immagini e altri contenuti',
        blocks: [
          { p: 'Tutti i caratteri e le immagini sono serviti dal nostro sito. Non incorporiamo plug-in di social media, video o mappe di altri servizi.' },
        ],
      },
      {
        title: 'Trasferimenti fuori dalla Svizzera e dall’UE',
        blocks: [
          { p: 'Netlify, Resend e Google possono trattare dati negli Stati Uniti. Questi trasferimenti si basano su una decisione di adeguatezza, come lo Swiss-US e l’EU-US Data Privacy Framework se il fornitore è certificato, oppure su clausole contrattuali standard approvate dalla Commissione europea e riconosciute in Svizzera.' },
        ],
      },
      {
        title: 'I vostri diritti',
        blocks: [
          { p: 'Potete chiederci in qualsiasi momento quali dati abbiamo su di voi e farli correggere o cancellare. Potete anche opporvi al trattamento, chiederne la limitazione, ricevere i vostri dati in un formato comune e revocare un consenso con effetto per il futuro. Scrivete a hello@astiaweb.com; rispondiamo entro 30 giorni. Non prendiamo decisioni automatizzate con effetti giuridici per voi.' },
          { p: 'Se ritenete che trattiamo i vostri dati in modo illecito, potete rivolgervi all’Incaricato federale della protezione dei dati e della trasparenza (IFPDT, www.edoeb.admin.ch) o all’autorità di protezione dei dati del paese UE in cui vivete o lavorate.' },
        ],
      },
      {
        title: 'Sicurezza',
        blocks: [
          { p: 'Il sito è servito solo tramite connessioni cifrate (HTTPS). È un sito statico senza database né login amministrativo pubblico, e i nostri account sono protetti con l’autenticazione a due fattori dove disponibile.' },
        ],
      },
      {
        title: 'Siti che gestiamo per i clienti',
        blocks: [
          { p: 'Se visitate un sito che Astia Web costruisce e gestisce per un cliente, è quel cliente il titolare dei dati personali sul suo sito, e vale la sua informativa sulla privacy. Noi trattiamo i dati per conto del cliente, secondo le disposizioni sul trattamento dei dati dell’Allegato 1 delle nostre Condizioni generali.' },
        ],
      },
      {
        title: 'Modifiche a questa informativa',
        blocks: [
          { p: 'Aggiorniamo questa pagina quando il nostro trattamento cambia. La data in alto indica la versione più recente.' },
        ],
      },
    ] as Section[],
  },
  legal: {
    seo: {
      title: 'Note legali · Astia Web',
      description: 'Note legali di astiaweb.com: Astia Web è un prodotto di Marco Rosso Consulting, Breganzona (Lugano), Svizzera. IDI CHE-188.786.759.',
    },
    eyebrow: 'Note legali',
    title: 'Chi c’è dietro questo *sito*.',
    lede: 'Astia Web è un prodotto di Marco Rosso Consulting, ditta individuale a Lugano, Svizzera.',
    sections: [
      {
        title: 'Gestore',
        blocks: [
          {
            dl: [
              ['Attività', 'Marco Paolo Rosso, ditta individuale, operante come Marco Rosso Consulting'],
              ['Marchio', 'Astia Web'],
              ['Indirizzo', 'Via Don G. Gagliardi 23, 6932 Breganzona (Lugano), Svizzera'],
              ['IDI', UID],
              ['IVA', 'Non iscritto al registro IVA'],
              ['Responsabile dei contenuti', 'Marco Rosso'],
            ],
          },
        ],
      },
      {
        title: 'Contatti',
        blocks: [
          {
            dl: [
              ['Email', 'hello@astiaweb.com'],
              ['Telefono', '+41 76 433 5845'],
              ['Comunicazioni formali', 'marco@rossoconsulting.ch'],
            ],
          },
        ],
      },
      {
        title: 'Responsabilità per i contenuti',
        blocks: [
          { p: 'Facciamo attenzione che tutto su questo sito sia corretto e aggiornato, ma non possiamo garantirlo. I dati tratti da studi indicano la fonte. I prezzi sono IVA esclusa. Fanno fede il modulo d’ordine e le Condizioni generali firmati con ogni cliente.' },
        ],
      },
      {
        title: 'Link ad altri siti',
        blocks: [
          { p: 'I link ad altri siti sono forniti per comodità. Non controlliamo i loro contenuti e non ne siamo responsabili.' },
        ],
      },
      {
        title: 'Diritto d’autore',
        blocks: [
          { p: 'Testi, design e codice di questo sito appartengono a Marco Rosso Consulting, salvo diversa indicazione. Nomi, foto e siti dei clienti sono mostrati con il loro permesso. Chiedeteci prima di riutilizzarne qualsiasi parte.' },
        ],
      },
      {
        title: 'Hosting e privacy',
        blocks: [
          { p: 'Questo sito è ospitato da Netlify, Inc., USA. Come trattiamo i dati personali è spiegato nella nostra informativa sulla privacy.' },
        ],
      },
    ] as Section[],
  },
  terms: {
    seo: {
      title: 'Condizioni generali · Astia Web',
      description: 'Le Condizioni generali e l’allegato sul trattamento dei dati che ogni cliente di Astia Web firma. Fa fede la versione inglese.',
    },
    eyebrow: 'Condizioni generali',
    title: 'Le condizioni che firmiamo, per *intero*.',
    lede: 'Ogni cliente di Astia Web firma queste condizioni. Leggetele prima della nostra prima chiamata.',
    languageNote: 'Le nostre Condizioni generali esistono in inglese e in italiano; fa fede la versione inglese. Qui sotto trovate il testo originale in inglese; la versione italiana vi viene consegnata con il modulo d’ordine.',
    summaryTitle: 'In short',
    contents: 'Contents',
  },
};

export const legal: Record<Lang, LegalCopy> = { en, de, it };
