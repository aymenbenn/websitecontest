import type { Faq } from '../types/audit';

export const faqs: Faq[] = [
{
  id: 'f1',
  question: 'What exactly do I get, and in what format?',
  answer:
  'A written report with every finding ranked by impact, the evidence behind it (screenshots, waterfalls, query data, session recordings — whatever applies), and a recommended fix with an effort estimate. You also get the raw working files: crawls, exports, spreadsheets. Deep Dive tiers add a live handover call recorded for whoever could not attend.'
},
{
  id: 'f2',
  question: 'How soon does work start after I pay?',
  answer:
  'Your slot is reserved the moment payment clears, and you pick your kick-off time on the next screen. Access requests are sent within one working hour. The clock on your turnaround starts when we have access, not when you pay.'
},
{
  id: 'f3',
  question: 'What access do you need from us?',
  answer:
  'Read-only is enough in almost every case: Google Analytics, Search Console, Google Ads, and a staging or production URL. For performance and UX work, access to a session-recording tool helps but is not required — we can install a temporary one.'
},
{
  id: 'f4',
  question: 'Can you implement the fixes too?',
  answer:
  'The audit is deliberately implementation-agnostic so you can hand it to any team. If you would rather we did it, we quote implementation separately after the audit, and the audit fee comes off that quote.'
},
{
  id: 'f5',
  question: 'Is this just an automated tool report?',
  answer:
  'No. Tools generate the raw data; a specialist interprets it. Every report is written by the person who ran the audit and reviewed by a second. If a finding could have come from a free scanner, it does not make the report.'
},
{
  id: 'f6',
  question: 'Which audit should I start with?',
  answer:
  'If traffic is healthy but revenue is not, start with UI & UX or Google Ads. If traffic is the problem, start with SEO or AEO. If you cannot trust your numbers, start with GA4 — everything else is guesswork until that is right. Not sure? Book the free 15-minute scoping call and we will tell you which one to buy, including if the answer is none.'
},
{
  id: 'f7',
  question: 'Do you work with agencies white-label?',
  answer:
  'Yes. Roughly a third of our work is delivered under a partner brand. Reports ship unbranded or in your template, and we stay off client calls unless invited.'
},
{
  id: 'f8',
  question: 'How does the guarantee actually work?',
  answer:
  'If your report contains fewer than five findings you consider material, reply to the delivery email within 14 days and we refund in full. You keep the report. We have honoured it four times in 240 audits — no argument, no forms.'
}];


export const guarantees = [
{
  title: 'Five material findings, or your money back',
  body: 'If fewer than five findings are worth acting on, tell us within 14 days and we refund in full. You keep the report and the raw files.'
},
{
  title: 'Fixed price, fixed date',
  body: 'The price you see is the price you pay. If we miss the turnaround on our side, the Deep Dive upgrade is free.'
},
{
  title: 'No retainer pitch',
  body: 'The handover call is a handover, not a sales meeting. If implementation is right for you, you will have to ask.'
}];