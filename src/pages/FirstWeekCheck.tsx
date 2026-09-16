import React from 'react';
import { Link } from 'react-router-dom';
import { Placeholder } from '../components/Placeholder';

const sections = [
{
  heading: 'Day one is not the hard day',
  body: [
  'Almost everyone plans for the birth and almost no one plans for the fourth day, when the visitors have gone home, the milk has come in, and the adrenaline has run out. The first week is not a medical event with a start and an end. It is a slow arithmetic of small unmet needs.',
  'What follows is not advice. It is a list of the things that reliably go unhandled, and who normally ends up handling them.']

},
{
  heading: 'What actually goes wrong',
  body: [
  'She is awake at the same hours as the baby, so she never gets the four-hour block that repairs anything. Someone brings food, but on day two, not day nine. The postnatal appointment exists but she has to book it herself, by phone, during the hours she is asleep.',
  'None of these are emergencies. All of them compound.']

},
{
  heading: 'The one question worth asking her',
  body: [
  'Not “how is the baby”. Ask “what has not been done today”. It is answerable in one sentence, it does not require her to perform gratitude, and it produces something you can act on within the hour.']

},
{
  heading: 'What we do in the first week',
  body: [
  'Her care lead sends one message on the day she comes home and then does not message again until she does. Night cover starts within 48 hours. Meals are arranged around what she can keep down, not around what photographs well. If she says nothing at all, we assume she is asleep and we do not chase her.']

}];


export function FirstWeekCheck() {
  return (
    <main className="bg-paper">
      <article className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 md:py-20 lg:px-12">
        <header className="max-w-[46ch]">
          <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
            First Week Check
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.06] tracking-tightish text-ink md:text-5xl lg:text-[3.5rem]">
            The week nobody plans for, written down plainly.
          </h1>
          <p className="mt-6 font-sans text-base leading-relaxed text-ink-soft md:text-lg">
            A short read for whoever is standing closest to her. Six minutes.
          </p>
        </header>

        <div className="mt-12">
          <Placeholder
            label="Editorial lead image — quiet domestic interior, morning light, no baby props"
            ratio="21 / 9" />
          
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-20">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
              On this page
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 border-l border-line pl-4">
              {sections.map((s) =>
              <li key={s.heading}>
                  <a
                  href={`#${s.heading.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                  className="font-sans text-sm leading-snug text-ink-soft transition-colors duration-150 ease-out hover:text-plum">
                  
                    {s.heading}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div className="flex flex-col gap-12">
            {sections.map((section) =>
            <section
              key={section.heading}
              id={section.heading.toLowerCase().replace(/[^a-z]+/g, '-')}>
              
                <h2 className="font-serif text-2xl leading-snug tracking-tightish text-ink md:text-3xl">
                  {section.heading}
                </h2>
                {section.body.map((para) =>
              <p
                key={para.slice(0, 24)}
                className="mt-5 max-w-readable font-sans text-base leading-[1.75] text-ink-soft">
                
                    {para}
                  </p>
              )}
              </section>
            )}

            <aside className="rounded-card border border-line bg-canvas p-6 md:p-8">
              <p className="max-w-[40ch] font-serif text-xl leading-snug text-ink md:text-2xl">
                If you are reading this because someone you love is about to have a baby, the useful
                thing is already decided: take something off her list before she asks.
              </p>
              <Link
                to="/gift"
                className="mt-6 inline-block rounded-full bg-plum px-6 py-3 font-sans text-sm text-paper transition-colors duration-150 ease-out hover:bg-plum-soft">
                
                Give this gift
              </Link>
            </aside>
          </div>
        </div>
      </article>
    </main>);

}