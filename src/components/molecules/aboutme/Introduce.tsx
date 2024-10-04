export default function Introduce() {
  const paragraphs = [
    {
      key: 'head',
      content: (
        <p className="text-[1.1rem] md:text-[1.7rem]">
          안녕하세요 끊임없이{' '}
          <span className={`text-[var(--main-color)]`}>성장</span>을 추구하는
          프론트엔드 개발자 김충연입니다 .
        </p>
      ),
    },
    {
      key: 'subHead',
      content: (
        <p className="text-[1.1rem] md:text-[1.7rem]">
          2020년부터 프론트엔드 개발자를 목표로 개인 공부 및 프로젝트를 꾸준히
          진행하고 있습니다.
        </p>
      ),
    },
    {
      key: 'description',
      content: (
        <div className="text-[1.1rem] md:text-[1.7rem]">
          <p>
            기능완성에서 나아가 재사용/유지보수 개선, 코드 품질 향상을 위해
            지속적으로 코드를 리뷰하며{' '}
          </p>
          <p>
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
    <article className="h-full lg:col-span-2 rounded-lg text-2xl transition-all duration-[1.5s] ease-in-out space-y-3 relative row-flex overflow-scroll">
      <div className="pr-2 pl-6 h-2/3 text-left korean-bold-font w-full space-y-6 flex flex-col items-start">
        {paragraphs.map((data) => (
          <div key={data.key}>{data.content}</div>
        ))}
      </div>
    </article>
  )
}
