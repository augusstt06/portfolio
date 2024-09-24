export default function Introduce() {
  const paragraphs = [
    {
      key: 'head',
      content: (
        <p className="mb-2">
          안녕하세요 끊임없이{' '}
          <span className={`text-[var(--main-color)] text-3xl`}>성장</span>을
          추구하는 프론트엔드 개발자 김충연입니다 .
        </p>
      ),
    },
    {
      key: 'subHead',
      content: (
        <p className="mb-2">
          2020년부터 프론트엔드 개발자를 목표로 개인 공부 및 프로젝트를 꾸준히
          진행하고 있습니다.
        </p>
      ),
    },
    {
      key: 'description',
      content: (
        <p>
          기능완성에서 나아가 재사용/유지보수 개선, 코드 품질 향상을 위해
          지속적으로 코드를 리뷰하며 <br />
          <span className={`text-[var(--main-color)] text-3xl`}>
            어제보다 발전한 코드
          </span>
          를 작성하기 위해 노력하고 있습니다 .
        </p>
      ),
    },
  ]

  return (
    <article className="h-40 lg:h-auto lg:col-span-2 rounded-lg p-3 korean-font text-2xl transition-all duration-[1.5s] ease-in-out space-y-3 relative">
      <div className="xl:top-16 md:top-12 md:left-20 lg:left-4 xl:left-24 xxl:left-[25rem] left-12 top-12 absolute text-left">
        {paragraphs.map((data) => (
          <div key={data.key}>{data.content}</div>
        ))}
      </div>
    </article>
  )
}
