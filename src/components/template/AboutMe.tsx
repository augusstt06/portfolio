import TypingText from '../molecules/animate/TypingText'

export default function AboutMe() {
  return (
    <section className="grid h-screen grid-rows-3 pt-20">
      <article className="relative row-span-1 text-2xl font-bold">
        <div className="top-1/3 left-20 absolute space-y-5 text-4xl">
          <TypingText
            text="A Steadily growing Developer ."
            breakAfter="growing "
            highlightWord="growing"
            highlightClass="text-[#9DF3c4] font-extrabold uppercase border-b-4 border-[#9DF3c4]"
          />
        </div>
      </article>
      <article className="row-span-2">detail info</article>
    </section>
  )
}
