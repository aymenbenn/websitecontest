export interface StoryboardFrame {
  id: string;
  index: string;
  title: string;
  beat: string;
  onScreen: string;
  motion: string;
  timing: string;
  easing: string;
}

export const storyboardFrames: StoryboardFrame[] = [
{
  id: 'arrival',
  index: '01',
  title: 'A message arrives',
  beat: 'Something reaches her before she has to ask for anything.',
  onScreen:
  'Warm off-white field. A single card settles in from below-right, slightly off-axis. One line of type inside it. Nothing else on screen yet.',
  motion:
  'Card: y 16px → 0, opacity 0 → 1, scale 0.97 → 1. Rotation settles from 1.2deg to 0. The line of type inside fades 80ms after the card lands.',
  timing: '260ms card, 160ms type, 80ms offset',
  easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
},
{
  id: 'resolving',
  index: '02',
  title: 'Small things resolve around her',
  beat: 'Open loops close, one at a time, without her handling them.',
  onScreen:
  'Four small markers are scattered around the card at uneven distances — a meal, a night, an appointment, a load of washing. Each is an outline, unresolved.',
  motion:
  'Each marker fills from outline to solid and its hairline connector draws toward the card. Staggered 55ms apart, in the order the eye reads them, not clockwise.',
  timing: '200ms per marker, 55ms stagger, 385ms total',
  easing: 'ease-out, connectors linear'
},
{
  id: 'lifting',
  index: '03',
  title: 'Weight lifts',
  beat: 'The pressure that was sitting on the composition leaves it.',
  onScreen:
  'A dense, dark band has been sitting across the lower third the whole time. It is the only heavy element on screen.',
  motion:
  'Band: y 0 → -24px while opacity 1 → 0 and height eases to 0. Everything above it rises 6px in the same window — the layout exhales rather than jumps.',
  timing: '300ms band, 240ms rise, overlapping',
  easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
},
{
  id: 'rest',
  index: '04',
  title: 'Rest',
  beat: 'The end state is calm and stays calm. No loop, no drift.',
  onScreen:
  'Card and resolved markers hold their final positions. Headline and primary action are now the highest-contrast things on screen.',
  motion:
  'Nothing animates. Headline and action cross-fade in at 140ms once the band has cleared. The sequence never replays on scroll.',
  timing: '140ms, then static',
  easing: 'ease-out'
}];


export const storyboardNotes = [
'Total sequence runs about 1.1s. No single element transitions longer than 300ms.',
'Plays once, on first paint, after fonts load. Never re-triggers on scroll or route return.',
'Under prefers-reduced-motion the end state renders immediately with a 120ms opacity fade and no movement.',
'Motion carries no information that is not also in the copy. It can be removed without the hero failing.'];