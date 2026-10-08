/**
 * /llms-full.txt: the whole offer as plain text for AI systems, generated at
 * build time from the same copy the pages use, so it never drifts from them.
 * /llms.txt (in public/) is the short index that points here.
 */
import type { APIRoute } from 'astro';
import { formatNumber, plain } from '@/i18n';
import { shared } from '@/i18n/shared';
import { home } from '@/i18n/home';
import { how } from '@/i18n/how';
import { pricing, COST_SERIES } from '@/i18n/pricing';

export const GET: APIRoute = () => {
  const s = shared.en;
  const h = home.en;
  const w = how.en;
  const p = pricing.en;
  const n = (v: number) => formatNumber(v, 'en');
  const last = (k: keyof typeof COST_SERIES) => COST_SERIES[k][COST_SERIES[k].length - 1];

  const lines: string[] = [
    '# Astia Web',
    '',
    `> ${plain(h.hero.title)} ${h.hero.lede}`,
    '',
    'Astia Web is a website service run by Marco Rosso Consulting (Marco Paolo Rosso, sole proprietorship), Via Don G. Gagliardi 23, 6932 Breganzona (Lugano), Switzerland. UID CHE-188.786.759. Hospitality first (independent hotels, B&Bs, lodges, restaurants), open to any owner-led small business. Languages: English, German, Italian.',
    '',
    '## The price',
    '',
    '- 150 a month per site, in CHF, EUR or USD depending on the market. Excluding VAT. No setup fee.',
    '- Billed yearly in advance (1,800 per site per year). Renews each year unless cancelled 30 days before renewal; a reminder is sent 60 days ahead.',
    '- Same price for one site or fifty. No tiers, no per-page or per-language charges.',
    '',
    `### ${s.included.title}`,
    '',
    ...s.included.items.map((i) => `- ${i.t}: ${i.d}`),
    '',
    `### ${s.discussed.title}`,
    '',
    ...s.discussed.items.map((i) => `- ${i}`),
    '',
    s.discussed.note,
    '',
    '## How it works',
    '',
    ...w.steps.items.map((st) => `- ${st.when}: ${st.t}. ${st.d}`),
    '',
    `Every brand guide contains: ${w.steps.guide.join(', ')}.`,
    '',
    `${w.change.note}`,
    '',
    '## How sites are built',
    '',
    w.built.intro,
    '',
    `| | ${w.built.cols.join(' | ')} |`,
    `|---|${w.built.cols.map(() => '---').join('|')}|`,
    ...w.built.rows.map((r) => `| ${r.label} | ${r.cells.map(([t]) => t).join(' | ')} |`),
    '',
    ...w.ready.items.map((i) => `- ${i.t}: ${i.d}`),
    '',
    '## Five-year cost (illustrative, typical quotes)',
    '',
    `- ${p.cost.series.typical}: about ${n(last('typical'))} over five years (launch, hosting, paid changes, a refresh in year 3).`,
    `- ${p.cost.series.astia}: ${n(last('astia'))} over five years, everything included.`,
    `- ${p.cost.series.lean}: about ${n(last('lean'))}. If a business wants a simple site and will rarely change it, a lean one-off build is cheaper, and Astia Web says so.`,
    '',
    '## Why it matters now',
    '',
    `${plain(h.changed.title)} ${h.changed.body}`,
    `In March 2025, ${h.changed.values[0]} of every 100 Google searches without an AI summary led to a click on a website; with an AI summary, ${h.changed.values[1]}. (Source: ${h.changed.source})`,
    ...h.changed.meaning.items.map((i) => `- ${i.t} ${i.d}`),
    '',
    `${plain(h.cycle.panelTitle)} ${h.cycle.panelBody}`,
    '',
    '## Five questions to ask any website provider (with Astia Web’s answers)',
    '',
    ...s.questions.items.map((q, i) => `${i + 1}. ${q.q} Astia Web: ${q.a.replace('{money}', '9,000')}`),
    '',
    '## Frequently asked questions',
    '',
    ...s.faq.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
    '## Contact',
    '',
    `- ${s.person.name}, ${s.person.role}: ${s.person.email}, ${s.person.phone}`,
    '- Book a 30-minute call: https://astiaweb.com/book-a-call',
    '- Pages: https://astiaweb.com/ · https://astiaweb.com/pricing · https://astiaweb.com/how-it-works · https://astiaweb.com/work · https://astiaweb.com/journal',
    '- General Terms: https://astiaweb.com/terms · Privacy: https://astiaweb.com/privacy',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
