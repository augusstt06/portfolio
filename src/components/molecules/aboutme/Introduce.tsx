export default function Introduce() {
  const paragraphs = [
    {
      key: 'head',
      content: (
        <p className="mb-2 text-[1.1rem] md:text-2xl">
          안녕하세요 끊임없이{' '}
          <span className={`text-[var(--main-color)]`}>성장</span>을 추구하는
          프론트엔드 개발자 김충연입니다 .
        </p>
      ),
    },
    {
      key: 'subHead',
      content: (
        <p className="mb-2 text-[1.1rem] md:text-2xl">
          2020년부터 프론트엔드 개발자를 목표로 개인 공부 및 프로젝트를 꾸준히
          진행하고 있습니다.
        </p>
      ),
    },
    {
      key: 'description',
      content: (
        <div className="text-[1.1rem] md:text-2xl">
          <p>
            기능완성에서 나아가 재사용/유지보수 개선, 코드 품질 향상을 위해
            지속적으로 코드를 리뷰하며{' '}
          </p>
          <p className="mb-2">
            <span className={`text-[var(--main-color)]`}>
              어제보다 발전한 코드
            </span>
            를 작성하기 위해 노력하고 있습니다 .
          </p>

          <p>
            또한 스터디를 진행하며 다루거나 개인 공부한 내용들을 정리해 꾸준히
            블로그에 올리고 있으며,{' '}
          </p>
          <p>수정사항 및 내용 숙지를 위해 주기적으로 확인하고 있습니다.</p>
        </div>
      ),
    },
  ]

  return (
    <article className="md:h-2/3 lg:h-auto lg:col-span-2 rounded-lg p-3 text-2xl transition-all duration-[1.5s] ease-in-out space-y-3 relative h-full">
      <div className="h-full xl:top-12 md:top-12 md:left-20 lg:left-4 xl:left-0 xxl:left-[25rem] top-12  md:absolute pl-8 pr-8 md:pl-0 md:-r-0 text-left korean-bold-font w-full md:w-auto overflow-scroll">
        {paragraphs.map((data) => (
          <div key={data.key}>{data.content}</div>
        ))}
      </div>
    </article>
  )
}
