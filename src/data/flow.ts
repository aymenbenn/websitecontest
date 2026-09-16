export interface FlowStep {
  id: string;
  number: number;
  title: string;
  intent: string;
  desktopNote: string;
}

export const flowSteps: FlowStep[] = [
{
  id: 'her',
  number: 1,
  title: 'Who she is',
  intent: 'Her first name and when she is due. Nothing else is asked of the buyer.',
  desktopNote:
  'Two fields sit side by side on a single row at 1280+. The step copy moves into a left column and stays fixed while the form scrolls.'
},
{
  id: 'package',
  number: 2,
  title: 'Choose the care',
  intent: 'The three packages, quiet and comparable. No badges, no "most popular".',
  desktopNote:
  'Three cards across at 1280+; the selected card holds a plum hairline rather than a fill. Stacked and full-width below 768.'
},
{
  id: 'circle',
  number: 3,
  title: 'Open it to her circle',
  intent: 'Optional. Invite others to add to the balance after the gift is given.',
  desktopNote:
  'The invite list and the preview of the card her circle receives sit in a 7/5 split. On mobile the preview collapses into a single tappable sample.'
},
{
  id: 'delivery',
  number: 4,
  title: 'Where the object goes',
  intent: 'One address, one date. Delivery is deliberately dull — the care is the product.',
  desktopNote:
  'Address block on the left, date picker held in a bordered panel on the right. Date picker becomes a native sheet on mobile.'
},
{
  id: 'message',
  number: 5,
  title: 'What she reads first',
  intent:
  'The buyer writes one short message. We show the character count as a line length, not a number.',
  desktopNote:
  'The live card preview sits beside the textarea at 1280+ and above it at 768. On mobile it sits below and is not sticky.'
},
{
  id: 'review',
  number: 6,
  title: 'Before you send it',
  intent: 'Everything in one plain summary, each line editable in place. Then one action.',
  desktopNote:
  'Summary constrained to 68ch and centred; the confirm action pins to the bottom of the viewport on mobile only.'
}];