/**
 * Astia Web General Terms (Part B) and Annex 1 (Data processing), transcribed
 * verbatim from "Astia Web - Order Form and General Terms (EN)". The Order
 * Form (Part A) is completed per client and is not published.
 *
 * Binding in English (and Italian; English prevails). If the PDF changes,
 * update this file to match it word for word.
 */

export interface Clause {
  n: string;
  /** Bold lead-in, e.g. "Brand guide." */
  lead?: string;
  t: string;
  items?: string[];
}
export interface TermsSection {
  id: string;
  num: string;
  title: string;
  clauses: Clause[];
}

export const TERMS_SUMMARY: { t: string; d: string }[] = [
  { t: 'The price', d: '150 a month per site in CHF, EUR or USD, invoiced as 1,800 a year in advance. No setup fee, no extras for pages, languages or normal changes.' },
  { t: 'The term', d: 'Twelve months to start. It renews for another year unless you tell us at least 30 days before the renewal date. We remind you about 60 days before.' },
  { t: 'What’s included', d: 'Brand guide, design, build, migration, every page and language, hosting, security, upkeep, and every normal change, live within 24 hours on business days.' },
  { t: 'Special requests', d: 'A shop, a members’ area, a custom tool or a deep integration gets a fixed written quote first. You decide before any work starts.' },
  { t: 'You own it', d: 'The code written for your site, your content, your brand guide and the history are yours. Our shared building blocks come with a free, permanent licence.' },
  { t: 'If you leave', d: 'You get a zip with the full code and built site within 10 business days, help moving your domain and one free call with your next provider.' },
  { t: 'Our responsibility', d: 'We fix problems quickly and for free. Liability is capped at one year’s fees, except for intent and gross negligence.' },
  { t: 'The law', d: 'Swiss law. Courts of Lugano. Thirty days of good-faith talks before anyone goes to court.' },
];

export const TERMS_SUMMARY_NOTE =
  'A plain-language overview of the main terms. It is for information only; the clauses in the General Terms and Annex 1 prevail.';

export const TERMS_PRECEDENCE =
  'With each client we also complete and sign an Order Form: the client’s details, the sites covered, currency and options. The Order Form, these General Terms and Annex 1 together form the agreement. If they conflict, the Order Form prevails, then Annex 1 on data protection matters, then the General Terms. The agreement exists in English and Italian; if the two versions differ, the English version prevails.';

export const GENERAL_TERMS: TermsSection[] = [
  {
    id: 'who-we-are', num: '01', title: 'Who we are and what this covers',
    clauses: [
      { n: '1.1', t: 'The service is provided by Marco Paolo Rosso, a sole proprietorship (ditta individuale) trading as Marco Rosso Consulting, Via Don G. Gagliardi 23, 6932 Breganzona (Lugano), Switzerland (the “Provider”). Astia Web is the Provider’s brand for this service.' },
      { n: '1.2', t: 'These General Terms apply to every Order Form signed with the Provider for Astia Web services. Together with the Order Form and Annex 1 they form the “Agreement”. The Client’s own terms of purchase do not apply, even if referred to in an order or invoice.' },
      { n: '1.3', t: 'The Provider contracts with businesses only. The Client confirms that it enters into the Agreement for its trade, business or profession and not as a consumer.' },
      {
        n: '1.4', t: 'In this Agreement:',
        items: [
          '(a) “Client Site” means each website covered by the Order Form, in every language;',
          '(b) “Client Content” means everything the Client provides or approves for the Client Site: text, prices, photos, logos, menus, documents and data;',
          '(c) “Client Site Code” means the source code, design files and configuration written specifically for the Client Site;',
          '(d) “Provider Tools” means the Provider’s reusable components, templates, design-system parts, build tooling, scripts, automations, AI workflows and know-how, including those used in the Client Site;',
          '(e) “Business Day” means Monday to Friday, except public holidays in the Canton of Ticino;',
          '(f) “Launch Date” means the day the Client Site is first published on the Client’s domain;',
          '(g) “Service Start Date” has the meaning in clause 7.2, and “Contract Year” means each 12-month period starting on the Service Start Date or one of its anniversaries;',
          '(h) “in writing” includes email sent to the notice addresses in the Order Form, unless a clause requires a signature.',
        ],
      },
    ],
  },
  {
    id: 'service', num: '02', title: 'The service',
    clauses: [
      { n: '2.1', lead: 'Brand guide.', t: 'The Provider writes a brand guide for the Client, usually after a call of about 30 minutes, or works from the Client’s existing brand guide. The Client Site is designed from it.' },
      { n: '2.2', lead: 'Build.', t: 'The Provider designs and builds the Client Site, migrates the existing content the Client asks to keep, and shows the result on a private preview link. The Provider revises it until the Client approves it for launch. Building the Client Site is a work under art. 363 ff. of the Swiss Code of Obligations (CO).' },
      {
        n: '2.3', lead: 'Run.', t: 'From launch, and for as long as the Agreement lasts, the Provider:',
        items: [
          '(a) hosts the Client Site on reputable infrastructure, with an SSL certificate, security updates and backups;',
          '(b) makes every Normal Change (clause 3.1), in every language of the Client Site;',
          '(c) sets up and maintains an optional content editor for the Client’s team, if chosen on the Order Form;',
          '(d) keeps the Client Site current with web standards, accessible and readable by people and machines, and reviews it with the Client once a year;',
          '(e) moves the Client Site to new technology when the Provider judges this necessary to keep it current, at no extra charge.',
        ],
      },
      { n: '2.4', lead: 'A person.', t: 'The Client has a named contact at the Provider, reachable by email, phone or video call.' },
      { n: '2.5', lead: 'How the work is done.', t: 'The Provider may use employees, subcontractors and automated tools, including AI agents, to perform the service. The Provider remains responsible for the result as if it had done the work itself, within the limits of clause 12.' },
      { n: '2.6', lead: 'Care, not guarantees.', t: 'The Provider performs the service with professional care. It does not guarantee particular business results, such as search rankings, visibility in AI assistants, traffic or bookings.' },
    ],
  },
  {
    id: 'changes', num: '03', title: 'Changes and special requests',
    clauses: [
      {
        n: '3.1', lead: 'Normal Changes are included.', t: 'A Normal Change is any change that works within the Client Site’s existing design system and technology, for example:',
        items: [
          '(a) text, prices, photos, menus, offers and seasonal updates;',
          '(b) new pages and sections, and new languages;',
          '(c) layout adjustments within the existing design;',
          '(d) connecting standard tools, such as a booking engine, forms, maps, analytics or a newsletter sign-up;',
          '(e) updates needed to keep the Client Site current with web standards.',
        ],
      },
      { n: '3.2', lead: 'Special Requests are quoted first.', t: 'Work outside clause 3.1 is a Special Request, for example: an online shop, a members’ area, custom tools or applications, deep system integrations (such as writing data into a property management system), writing more than one new page of copy at a time, photography, logo design, or a complete redesign the Client asks for outside the yearly review. The Provider sends a fixed written quote. Work starts only after the Client accepts it in writing.' },
      { n: '3.3', lead: 'Fair use.', t: 'There is no fixed limit on the number of Normal Changes. If requests in a given month go far beyond what a website normally needs, the Provider will raise it with the Client and the parties will agree a fair solution in good faith.' },
      { n: '3.4', lead: 'Requests.', t: 'The Client sends change requests to hello@astiaweb.com or another channel the Provider names. A request is complete when the Provider has everything it needs to make the change, including text, images and any answers to its questions.' },
      { n: '3.5', lead: 'Approval.', t: 'Every change is approved before it goes live. Where the Provider shows the Client a preview, the Client’s approval, by email or in the approval workflow the Provider provides, authorises publication, and the Client is responsible for the content it approved.' },
    ],
  },
  {
    id: 'response-times', num: '04', title: 'Response times and availability',
    clauses: [
      { n: '4.1', lead: 'Changes within 24 hours.', t: 'The Provider publishes Normal Changes within 24 hours of receiving a complete request. Only time on Business Days counts: a request received on Friday at 17:00 is live by Monday at 17:00. Larger changes, such as a new page or a new language, are given an agreed date instead.' },
      { n: '4.2', lead: 'Outside Business Days.', t: 'The Provider may handle requests at weekends or on holidays, but does not commit to it.' },
      { n: '4.3', lead: 'Outages.', t: 'The Provider starts working on an outage of the Client Site on the same Business Day it is reported or detected, and within four hours if this happens on a Business Day before 14:00 Swiss time. The Provider keeps the Client informed by email until it is resolved.' },
      { n: '4.4', lead: 'No uptime percentage.', t: 'The availability of the Client Site depends on hosting providers and networks outside the Provider’s control. The Provider commits to choosing reputable infrastructure and acting quickly, not to a specific uptime figure.' },
      { n: '4.5', lead: 'Absences.', t: 'The Provider announces holidays and other absences of more than two Business Days in advance where possible, with a return date. Outages are still handled during absences.' },
      { n: '4.6', t: 'Repeatedly missing the commitments in clauses 4.1 and 4.3, after the Client has complained in writing, is a material breach under clause 9.1.' },
    ],
  },
  {
    id: 'fees', num: '05', title: 'Fees and payment',
    clauses: [
      { n: '5.1', t: 'The fee is 150 per site per month in the currency on the Order Form, charged per Contract Year (1,800 per site per year) (the “Fee”). The Fee covers everything in clauses 2 and 3.1. There is no setup fee.' },
      { n: '5.2', lead: 'Invoicing.', t: 'The first Contract Year is invoiced on the Effective Date. Each later Contract Year is invoiced about 60 days before its start; that invoice states the renewal date and the last day for notice of non-renewal. Invoices are payable within 30 days of their date, without deduction, by bank transfer to the account shown on the invoice.' },
      { n: '5.3', lead: 'Launch after payment.', t: 'The Provider starts work on the Effective Date. The Client Site is published on the Client’s domain once the first invoice is paid.' },
      { n: '5.4', lead: 'Monthly billing.', t: 'If agreed on the Order Form, the Fee is invoiced monthly in advance instead. The Client still commits to full Contract Years.' },
      { n: '5.5', lead: 'Annual commitment.', t: 'The Fee for a Contract Year is owed in full once invoiced and is not refunded if the Agreement ends early, except under clauses 9.3 and 16.2. The Fee for the first Contract Year is also the price of the build under clause 2.2, which the Provider delivers at the start without a separate fee: if the Agreement ends during the first Contract Year for any reason other than serious cause attributable to the Provider, any unpaid part of it becomes due at once. From the second Contract Year, the Fee pays for hosting, upkeep and the Provider’s capacity reserved for the Client for the whole year.' },
      { n: '5.6', lead: 'VAT.', t: 'The Provider is not currently registered for VAT. All prices exclude VAT; if the Provider becomes liable for VAT, it will be added at the statutory rate.' },
      { n: '5.7', lead: 'Third-party costs.', t: 'Domain registration, email hosting, booking engines, paid plug-ins or services, and licences for images or fonts the Client chooses are paid by the Client directly to the supplier and are not part of the Fee.' },
      {
        n: '5.8', lead: 'Late payment.', t: 'If an invoice is not paid by its due date:',
        items: [
          '(a) the Provider sends a reminder and the Client has 14 days to pay;',
          '(b) from 30 days after the due date, the Provider may pause changes; the Client Site stays online;',
          '(c) from 60 days after the due date, and after a written warning given at least 10 days before, the Provider may suspend the Client Site and terminate the Agreement under clause 9.1;',
          '(d) default interest of 5% per year runs from the due date.',
        ],
      },
      { n: '5.9', t: 'The Client may not set off its own claims against the Provider’s invoices without the Provider’s written consent, unless the claim is undisputed or confirmed by a final judgment.' },
    ],
  },
  {
    id: 'price-changes', num: '06', title: 'Price changes',
    clauses: [
      { n: '6.1', t: 'The Fee is fixed for the first 24 months from the Effective Date.' },
      { n: '6.2', t: 'After that, the Provider may increase the Fee only from a renewal date, and only by notice in writing at least 90 days before it. The Client may then choose not to renew under clause 7.4.' },
      { n: '6.3', t: 'If the Provider lowers its published price, the lower price applies to the Client from its next renewal date.' },
    ],
  },
  {
    id: 'term', num: '07', title: 'Term, renewal and ending',
    clauses: [
      { n: '7.1', t: 'The Agreement starts on the Effective Date: the date of the last signature on the Order Form.' },
      { n: '7.2', t: 'The Service Start Date is the Launch Date, or 60 days after the Effective Date if that is earlier. If the Provider causes the launch to happen later, the Service Start Date is the Launch Date.' },
      { n: '7.3', t: 'The Agreement runs for an initial term of 12 months from the Service Start Date, and then renews automatically for further periods of 12 months.' },
      { n: '7.4', t: 'Either party may end the Agreement at the end of a Contract Year by notice in writing. The Client must give notice at least 30 days before the renewal date; the Provider at least 90 days before.' },
      { n: '7.5', t: 'If the Provider sends the renewal invoice later than 45 days before the renewal date, the Client may still give notice of non-renewal within 15 days of receiving it.' },
      { n: '7.6', t: 'Clause 10 sets out what happens when the Agreement ends.' },
    ],
  },
  {
    id: 'ownership', num: '08', title: 'Ownership and licences',
    clauses: [
      { n: '8.1', lead: 'The Client owns its site.', t: 'The Client owns the Client Site Code, the Client Content, its brand guide and the history of changes. The Provider transfers to the Client all transferable rights in the Client Site Code and the brand guide as they are created, and waives any right to oppose their modification by the Client or its new providers.' },
      { n: '8.2', lead: 'Provider Tools stay with the Provider.', t: 'The Provider keeps all rights in the Provider Tools. It grants the Client a free, non-exclusive, worldwide, permanent and irrevocable licence to use, copy and modify, and have others modify, the Provider Tools contained in the Client Site, for the purpose of running and developing the Client’s own websites. The Client may not sell or license the Provider Tools to others as a product of their own.' },
      { n: '8.3', lead: 'Third-party materials.', t: 'Fonts, images, plug-ins, open-source libraries and third-party services remain subject to their own licences and terms. Where needed, the Client takes them over directly when the Agreement ends.' },
      { n: '8.4', lead: 'Client Content.', t: 'The Client grants the Provider a non-exclusive licence to use the Client Content for the purpose of providing the service, for as long as the Agreement lasts and the handover requires.' },
      { n: '8.5', lead: 'Footer credit.', t: 'The Client Site carries the credit “Website by astia·web”, linked to astiaweb.com. It stays during the term unless both parties agree in writing to remove it; the Provider may ask a one-off fee or decline. After the Agreement ends, the Client may remove it.' },
      { n: '8.6', lead: 'References.', t: 'The Provider may name the Client, show its logo and show screenshots of the Client Site as a reference, on its website, in proposals and on social media, unless the Client unticked the reference box on the Order Form or opts out later in writing. An opt-out applies to new material within 30 days. Quotes, testimonials and case studies with figures always need the Client’s approval of the exact wording.' },
      { n: '8.7', lead: 'Handover depends on payment.', t: 'The Provider may withhold the handover package under clause 10 until all amounts owed under the Agreement are paid, starting with the Fee for the first Contract Year and including any renewal year already invoiced.' },
    ],
  },
  {
    id: 'serious-cause', num: '09', title: 'Ending the Agreement for serious cause',
    clauses: [
      {
        n: '9.1', t: 'Either party may terminate the Agreement with immediate effect by notice in writing if:',
        items: [
          '(a) the other party materially breaches the Agreement and does not remedy the breach within 30 days of a written notice describing it;',
          '(b) the other party is declared bankrupt, applies for a moratorium or composition, or stops paying its debts;',
          '(c) in the case of the Provider, the Client remains in default under clause 5.8 or uses the Client Site for unlawful content and does not stop after being asked to.',
        ],
      },
      { n: '9.2', t: 'A failure caused by force majeure (clause 15) is not a breach.' },
      { n: '9.3', t: 'If the Client terminates for serious cause attributable to the Provider, the Provider refunds the Fee paid for the whole months remaining in the current Contract Year. If the Provider terminates for serious cause attributable to the Client, all Fees invoiced remain due.' },
    ],
  },
  {
    id: 'handover', num: '10', title: 'When the Agreement ends: handover',
    clauses: [
      { n: '10.1', t: 'The Client Site goes offline on the day the Agreement ends.' },
      { n: '10.2', t: 'If the Client asks before that day, the Provider keeps the Client Site online for up to 30 more days to allow a smooth switch, for the Fee pro rata.' },
      { n: '10.3', t: 'Within 10 Business Days of the end date, or earlier on request once notice has been given, the Provider delivers a handover package as a zip file: the full source code of the Client Site, the built site ready to upload to any host, all images and files, the brand guide as a PDF, and a short guide to deploying it.' },
      { n: '10.4', t: 'The Provider helps the Client move at no cost: the handover package, help transferring the domain and DNS, and one call of up to 60 minutes with the Client or its new provider. Further help is a Special Request.' },
      { n: '10.5', t: 'Within 60 days of the end date, the Provider deletes the Client Site, its backups, form submissions and the Client Content from its systems and confirms this by email, except for records it must keep by law, such as invoices.' },
      { n: '10.6', t: 'Clauses 5.5, 8.1 to 8.3, 8.7, 10, 12, 13, 18 and 19, and anything else that by its nature continues, survive the end of the Agreement.' },
    ],
  },
  {
    id: 'client-responsibilities', num: '11', title: 'What the Client is responsible for',
    clauses: [
      { n: '11.1', lead: 'Rights in content.', t: 'The Client confirms that it holds the rights to all Client Content it sends, including photos, logos, texts and reviews, and that their use on the Client Site does not infringe anyone’s rights. The Client holds the Provider harmless against third-party claims arising from Client Content.' },
      { n: '11.2', lead: 'Accuracy.', t: 'The Client is responsible for the accuracy of prices, opening times, offers, room descriptions and other facts on the Client Site, in particular once it has approved a preview.' },
      { n: '11.3', lead: 'Legal texts.', t: 'The Provider supplies template text for the privacy policy, legal notice (imprint) and cookie notice, mentioning the Provider and its hosting, and builds a cookie banner where the Client Site needs one. The Client is responsible for checking that these texts fit its business and are legally correct. The Provider does not give legal advice.' },
      { n: '11.4', lead: 'Cooperation.', t: 'The Client gives the Provider timely access to its domain and DNS, booking engine, existing website and the content needed. Delays on the Client’s side extend the Provider’s deadlines accordingly.' },
      { n: '11.5', lead: 'Domain and email.', t: 'The Client’s domain is registered in the Client’s name and account and paid by the Client; the Client gives the Provider access to manage its DNS. If the Client has no domain, the Provider helps it register one in the Client’s name. Email hosting is not part of the service: the Provider only sets the records the Client Site needs and takes care not to disturb the Client’s email.' },
      { n: '11.6', lead: 'Lawful use.', t: 'The Client does not use the Client Site for unlawful content. The Provider may take down clearly unlawful content immediately and will inform the Client.' },
      { n: '11.7', lead: 'Access.', t: 'The Client keeps the login details of its content editor and other accounts confidential and tells the Provider without delay if they may have been misused.' },
    ],
  },
  {
    id: 'liability', num: '12', title: 'Liability',
    clauses: [
      { n: '12.1', lead: 'Fixing first.', t: 'If the service has a defect, the Provider’s first obligation is to fix it promptly and at no cost.' },
      { n: '12.2', lead: 'Cap.', t: 'The Provider’s total liability under the Agreement in each Contract Year is limited to the Fee paid for that Contract Year.' },
      {
        n: '12.3', lead: 'Exclusions.', t: 'The Provider is not liable for:',
        items: [
          '(a) indirect or consequential loss, including lost profit, lost bookings or revenue, and harm to reputation;',
          '(b) outages or failures of third-party services, such as hosting providers, networks, domain registrars, booking engines and AI services;',
          '(c) loss caused by Client Content, or by content the Client approved;',
          '(d) loss of data beyond restoring the latest available backup.',
        ],
      },
      { n: '12.4', lead: 'What is not limited.', t: 'The limits in this clause do not apply to loss caused intentionally or by gross negligence, to personal injury, or where mandatory law does not allow them (art. 100 CO).' },
      { n: '12.5', lead: 'Auxiliaries.', t: 'For slight negligence of the Provider’s subcontractors, auxiliaries and tools, the same limits apply.' },
      { n: '12.6', t: 'The Client’s obligation under clause 11.1 is not limited by this clause.' },
    ],
  },
  {
    id: 'confidentiality', num: '13', title: 'Confidentiality',
    clauses: [
      { n: '13.1', t: 'Each party keeps confidential the non-public information it receives from the other, uses it only for the Agreement, and shares it only with people and providers who need it for that purpose and are bound to confidentiality.' },
      { n: '13.2', t: 'This does not apply to information that is public, was already known to the receiving party, or must be disclosed by law or by order of an authority. It does not limit clause 8.6.' },
      { n: '13.3', t: 'This obligation lasts for the term of the Agreement and three years after it ends.' },
    ],
  },
  {
    id: 'data-protection', num: '14', title: 'Data protection',
    clauses: [
      { n: '14.1', t: 'Each party complies with the Swiss Federal Act on Data Protection (FADP) and, where it applies, the EU General Data Protection Regulation (GDPR).' },
      { n: '14.2', t: 'Where the Provider processes personal data on the Client’s behalf, for example form submissions from visitors to the Client Site, Annex 1 applies.' },
    ],
  },
  {
    id: 'force-majeure', num: '15', title: 'Force majeure',
    clauses: [
      { n: '15.1', t: 'Neither party is liable for a delay or failure caused by events beyond its reasonable control, such as natural disasters, epidemics, war, government action, large-scale cyberattacks or major outages of infrastructure providers. The affected party informs the other without delay and does what it reasonably can to limit the effects.' },
      { n: '15.2', t: 'If such an event prevents the service for more than 60 days in a row, either party may terminate the Agreement in writing, and the Provider refunds the Fee paid for the whole months remaining in the current Contract Year.' },
    ],
  },
  {
    id: 'changes-to-terms', num: '16', title: 'Changes to these General Terms',
    clauses: [
      { n: '16.1', t: 'The Provider may update these General Terms. A new version applies to an existing Client only from its next renewal date, and only if the Provider sends it in writing at least 90 days before that date. The Client may then choose not to renew under clause 7.4.' },
      { n: '16.2', t: 'If a change is required by law, it may apply earlier. If it is to the Client’s material disadvantage, the Client may terminate the Agreement in writing within 30 days of being told, with a refund of the Fee for the whole months remaining in the current Contract Year.' },
      { n: '16.3', t: 'Changes to the Order Form must be signed by both parties; electronic signatures count.' },
    ],
  },
  {
    id: 'notices', num: '17', title: 'Notices',
    clauses: [
      { n: '17.1', t: 'Formal notices, such as notice of non-renewal or termination, are given in writing to the notice addresses on the Order Form. Notice to the Provider goes to marco@rossoconsulting.ch.' },
      { n: '17.2', t: 'Each party may change its notice address by telling the other in writing.' },
    ],
  },
  {
    id: 'general', num: '18', title: 'General',
    clauses: [
      { n: '18.1', lead: 'Transfer.', t: 'The Provider may transfer the Agreement to a company it controls that is set up to run Astia Web, such as a limited company (Sagl), by notice in writing; that company takes over all of the Provider’s rights and obligations. The Client may transfer the Agreement only with the Provider’s written consent.' },
      { n: '18.2', lead: 'Entire agreement.', t: 'The Agreement is the parties’ entire agreement on its subject and replaces earlier proposals and discussions. Marketing materials describe the service but do not add obligations beyond the Agreement.' },
      { n: '18.3', lead: 'Severability.', t: 'If a provision is invalid or unenforceable, the rest of the Agreement remains in force, and the provision is replaced by the valid provision closest to the parties’ intention.' },
      { n: '18.4', lead: 'No waiver.', t: 'Not enforcing a right does not mean giving it up.' },
      { n: '18.5', lead: 'Languages.', t: 'The Agreement exists in English and Italian. If the two versions differ, the English version prevails.' },
    ],
  },
  {
    id: 'law', num: '19', title: 'Law and disputes',
    clauses: [
      { n: '19.1', t: 'The Agreement is governed by Swiss law, excluding its conflict-of-law rules and the UN Convention on Contracts for the International Sale of Goods (CISG).' },
      { n: '19.2', t: 'If a dispute arises, the parties first try in good faith to settle it by talking. Either party may go to court if no solution is found within 30 days of a written request to talk.' },
      { n: '19.3', t: 'The courts of Lugano, Switzerland, have exclusive jurisdiction. The Provider may also bring proceedings at the Client’s registered office.' },
    ],
  },
];

export const ANNEX_INTRO =
  'This annex applies where the Provider processes personal data on the Client’s behalf (art. 9 FADP and, where applicable, art. 28 GDPR). It forms part of the Agreement.';

export const ANNEX_1: TermsSection[] = [
  {
    id: 'a1', num: 'A1', title: 'Roles and scope',
    clauses: [
      { n: 'A1.1', t: 'The Client is the controller of the personal data processed through the Client Site. The Provider processes it as a processor, on the Client’s behalf.' },
      {
        n: 'A1.2', t: 'What is processed:',
        items: [
          '(a) Purpose: hosting the Client Site and, where the Client Site has forms, receiving form submissions and forwarding them to the email address the Client chooses; backups, maintenance and support;',
          '(b) Data subjects: visitors to the Client Site, people who send enquiries through its forms, and the Client’s staff who use the content editor;',
          '(c) Data: technical data such as IP addresses in server logs; where forms are used, the contact details and content of enquiries; login details of editor accounts;',
          '(d) Duration: the term of the Agreement and the deletion period in clause 10.5.',
        ],
      },
      { n: 'A1.3', t: 'The Client Site is not designed to process sensitive personal data. The Client does not ask visitors for such data through the Client Site without agreeing it with the Provider first.' },
    ],
  },
  {
    id: 'a2', num: 'A2', title: 'The Provider’s obligations',
    clauses: [
      { n: 'A2.1', t: 'The Provider processes the personal data only for the purposes above and on the Client’s documented instructions, which are this Agreement and the Client’s written requests. It tells the Client if it believes an instruction breaches data protection law.' },
      { n: 'A2.2', t: 'The Provider ensures that everyone it authorises to process the data is bound to confidentiality.' },
      { n: 'A2.3', lead: 'Security.', t: 'The Provider takes appropriate technical and organisational measures, including: encrypted connections (HTTPS); a static live site without a public admin login or database; access to accounts limited to those who need it and protected with two-factor authentication where available; regular updates and backups; and, where forms are used, deleting submissions held at the hosting provider periodically and at the latest at the end of the Agreement.' },
      { n: 'A2.4', t: 'The Provider does not copy personal data of visitors to the Client Site into its code repositories or AI tools.' },
      { n: 'A2.5', t: 'The Provider helps the Client, to a reasonable extent, to respond to requests from data subjects and to meet its own obligations on security, breach notification and impact assessments.' },
      { n: 'A2.6', lead: 'Breaches.', t: 'The Provider notifies the Client without undue delay after becoming aware of a breach of security affecting the Client’s personal data, with the information available to it at the time.' },
      { n: 'A2.7', lead: 'End of processing.', t: 'At the end of the Agreement the Provider returns the data with the handover package where the Client asks for it, and deletes it under clause 10.5.' },
      { n: 'A2.8', t: 'The Provider makes available the information reasonably needed to show compliance with this annex. Audits beyond that are at the Client’s cost, with reasonable notice, at most once a year.' },
    ],
  },
  {
    id: 'a3', num: 'A3', title: 'Subprocessors',
    clauses: [
      { n: 'A3.1', lead: 'Hosting and forms.', t: 'The Client authorises the Provider to use subprocessors for hosting the Client Site and, where the Client Site has forms, for handling form submissions. At the date of these terms, both are provided by Netlify, Inc. Forms are handled this way unless the Client asks in writing for a different provider, for example one in Switzerland or the EU; the Provider then proposes an alternative, and any additional cost is agreed in advance as a Special Request.' },
      { n: 'A3.2', lead: 'Changes.', t: 'The Provider informs the Client in writing at least 30 days before adding or replacing a subprocessor that processes the Client’s personal data. The Client may object on reasonable data-protection grounds; if no solution is found, the Client may terminate the Agreement with a refund of the Fee for the whole months remaining in the current Contract Year.' },
      { n: 'A3.3', t: 'The Provider uses subprocessors only under data protection terms that oblige them to protect the data appropriately, and remains responsible to the Client for their work.' },
      { n: 'A3.4', lead: 'Transfers abroad.', t: 'Netlify, Inc. may process data in the United States. Such transfers take place on the basis of safeguards recognised under the FADP and the GDPR, such as standard contractual clauses.' },
    ],
  },
  {
    id: 'a4', num: 'A4', title: 'The Client’s obligations',
    clauses: [
      { n: 'A4.1', t: 'The Client ensures that it has a lawful basis for the processing and that its privacy policy informs visitors that the Client Site is hosted, and any form data handled, by the Provider and its subprocessors.' },
      { n: 'A4.2', t: 'The Client tells the Provider without delay if it finds errors or irregularities in the processing.' },
    ],
  },
];
