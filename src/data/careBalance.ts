export interface CareThing {
  id: string;
  thing: string;
  unit: string;
  contributedBy: string;
  share: number;
}

/** Shown as things, never as amounts. `share` is only used for bar width. */
export const careThings: CareThing[] = [
{
  id: 'nights',
  thing: 'Nights someone else is awake',
  unit: '9 nights',
  contributedBy: 'Her sister, two colleagues',
  share: 26
},
{
  id: 'meals',
  thing: 'Dinners she does not plan',
  unit: '24 dinners',
  contributedBy: 'Her book group',
  share: 22
},
{
  id: 'physio',
  thing: 'Recovery appointments, at home',
  unit: '6 sessions',
  contributedBy: 'Her mother',
  share: 18
},
{
  id: 'laundry',
  thing: 'Washing collected and returned',
  unit: '11 weeks',
  contributedBy: 'Her aunt',
  share: 14
},
{
  id: 'hours',
  thing: 'Hours that are hers alone',
  unit: '16 hours',
  contributedBy: 'Four friends',
  share: 12
},
{
  id: 'lactation',
  thing: 'Feeding help, whenever she asks',
  unit: '3 visits',
  contributedBy: 'Her neighbour',
  share: 8
}];


export const balanceCopy = {
  heading: 'Her circle adds to a balance. It leaves as things.',
  body:
  'Anyone can add to the gift after it is given. She never sees a total, and she is never asked to spend one. The balance is only ever described to her the way she would describe it herself — nine nights, twenty-four dinners, six appointments.',
  steps: [
  {
    label: 'Someone adds',
    text: 'A friend adds to the gift from the card she was sent. No account, no app.'
  },
  {
    label: 'It becomes a thing',
    text: 'The balance is converted into care before she ever hears about it.'
  },
  {
    label: 'She reaches for it',
    text: 'She asks for a night, a meal, an appointment. That is the whole interaction.'
  }]

};