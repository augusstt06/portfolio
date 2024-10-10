import Avatar from '@/components/atom/avatar/Avatar'
import Skills from '@/components/molecules/aboutme/Skills'

export default function Introduce() {
  const paragraphs = [
    {
      key: 'head',
      content: (
        <p>
          끊임없이 <span className={`text-[var(--main-color)]`}>성장</span>을
          추구하는 프론트엔드 개발자 김충연입니다.
        </p>
      ),
    },
    {
      key: 'description',
      content: (
        <p>
          지속적으로 코드를 리뷰하며{' '}
          <span className={`text-[var(--main-color)]`}>
            어제보다 발전한 코드
          </span>
          를 작성하기 위해 노력하고 있습니다.
        </p>
      ),
    },
    {
      key: 'description2',
      content: (
        <p>
          사용해보지 않은 기술/개념들을 여러 레퍼런스를 참고하며 개인 프로젝트에
          사용해보고 블로그에 기록하고 있습니다.
        </p>
      ),
    },
    {
      key: 'description3',
      content: <p></p>,
    },
  ]

  return (
    <article className="pt-12 pl-8 pr-8 h-full lg:col-span-4 rounded-lg text-2xl transition-all duration-[1.5s] ease-in-out space-y-3 overflow-scroll grid grid-cols-4">
      <div className="hidden md:block col-span-1 ">
        <Avatar />
      </div>
      <div className="col-span-4 md:col-span-3 pr-2 pl-6 h-2/3 text-left korean-font w-full space-y-6 flex flex-col items-start justify-center text-[1.1rem] md:text-[1.3rem]">
        {paragraphs.map((data) => (
          <div key={data.key}>{data.content}</div>
        ))}
        <Skills />
      </div>
    </article>
  )
}
