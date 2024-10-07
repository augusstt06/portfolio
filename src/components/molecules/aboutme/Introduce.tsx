export default function Introduce() {
  const paragraphs = [
    {
      key: 'head',
      content: (
        <p>
          끊임없이 <span className={`text-[var(--main-color)]`}>성장</span>을
          추구하는 프론트엔드 개발자 김충연입니다 .
        </p>
      ),
    },
    {
      key: 'description',
      content: (
        <p>
          기능완성에서 나아가 재사용/유지보수 개선, 코드 품질 향상을 위해
          지속적으로 코드를 리뷰하며{' '}
          <span className={`text-[var(--main-color)]`}>
            어제보다 발전한 코드
          </span>
          를 작성하기 위해 노력하고 있습니다 .
        </p>
      ),
    },
    {
      key: 'description2',
      content: (
        <p>
          사용해보지 않았던 기술/개념들을 두려워하지 않으며 실사용이 가능하도록
          여러 레퍼런스를 참고하며 개인 프로젝트에 사용하며 익히고 있습니다.
        </p>
      ),
    },
    {
      key: 'description3',
      content: (
        <p>
          또한 타 분야 개발자들과 자료구조, CS 등에 대한 스터디 및 프로젝트를
          진행한 경험으로 원활한 협업이 가능합니다.
        </p>
      ),
    },
  ]

  return (
    <article className="h-full lg:col-span-2 rounded-lg text-2xl transition-all duration-[1.5s] ease-in-out space-y-3 relative row-flex overflow-scroll">
      <div className="pr-2 pl-6 h-2/3 text-left korean-bold-font w-full space-y-6 flex flex-col items-start text-[1.1rem] md:text-[1.4rem] ">
        {paragraphs.map((data) => (
          <div key={data.key}>{data.content}</div>
        ))}
      </div>
    </article>
  )
}
