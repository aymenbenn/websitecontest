export interface Package {
  id: string;
  name: string;
  duration: string;
  summary: string;
  object: string;
  included: string[];
  hersToChange: string[];
  note: string;
}

export const packages: Package[] = [
{
  id: 'first-weeks',
  name: 'First Weeks',
  duration: 'Six weeks of care',
  summary:
  'For the stretch where the days lose their edges. The object arrives before the birth; the care begins the day she comes home.',
  object: 'The linen box, the folded throw, the first card',
  included: [
  'A care lead who introduces herself by message, not by call',
  'Two night visits a week for the first three weeks',
  'Meals arranged around what she can keep down',
  'One lactation visit, at home, whenever she asks for it',
  'Laundry collected and returned folded, weekly'],

  hersToChange: [
  'Swap night visits for daytime hours',
  'Pause everything for a week without losing it',
  'Move meals to groceries, or to someone cooking in her kitchen',
  'Choose who in her circle can see that she used something'],

  note: 'Most gifts start here.'
},
{
  id: 'first-season',
  name: 'First Season',
  duration: 'Four months of care',
  summary:
  'For the recovery that keeps going after the visitors stop coming. The same care, held open long enough to matter.',
  object: 'The linen box, the folded throw, the season journal',
  included: [
  'Everything in First Weeks',
  'A care lead who stays the same person for the whole season',
  'Pelvic floor physiotherapy, six sessions, at home or nearby',
  'A postnatal check she does not have to book herself',
  'A standing hour each week that is hers to spend on nothing',
  'Someone to sit with the baby while she sleeps in daylight'],

  hersToChange: [
  'Hold the physio sessions until she is ready to use them',
  'Redirect the weekly hour to childcare for an older child',
  'Add a second address if she moves or stays with family',
  'Keep her care lead beyond the season at her own cost'],

  note: 'Chosen when a circle gives together.'
},
{
  id: 'first-year',
  name: 'First Year',
  duration: 'Twelve months, used at her pace',
  summary:
  'For as long as she needs it. Nothing expires; the balance waits until she reaches for it.',
  object: 'The linen box, the folded throw, the year of cards',
  included: [
  'Everything in First Season',
  'Care that never expires while the balance holds',
  'Mental health sessions with a perinatal specialist, unlimited within the year',
  'Return-to-work planning, if and when that becomes a question',
  'Sleep support at the month she asks for it, not the month we assume'],

  hersToChange: [
  'Stop and restart as many times as she wants',
  'Hand a portion of the balance to a partner or her mother',
  'Convert unused care into ongoing household help',
  'Close her file entirely and keep the object'],

  note: 'For a first child, or a hard recovery.'
}];