export default function Introduce() {
  const paragraphs = [
    {
      content:
        '안녕하세요 끊임없이 성장을 추구하는 프론트엔드 개발자 김충연입니다 .',
    },
    {
      content:
        '2020년부터 프론트엔드 개발자를 목표로 개인 공부 및 프로젝트를 진행해왔습니다.',
    },
    {
      content:
        '주로 Typescript, React, Next js를 사용해 프로젝트를 진행하고 있습니다.',
    },
    {
      content:
        '진행간 기능 완성에서 나아가 재사용/유지보수 개선을 위한 아토믹 패턴 적용, 렌더링 최적화를 위한 메모이제이션 사용 등, 코드 품질 향상을 위해 지속적으로 코드를 리뷰하며 개선점을 찾아 적용하고 있습니다.',
    },
  ]

  return (
    <article className="bg-white bg-opacity-10 w-[48rem] rounded-lg p-3 absolute top-8 right-24 korean-font text-lg transition-all duration-[1.5s] ease-in-out space-y-2 col-span-2">
      {paragraphs.map((data) => (
        <p key={data.content}>{data.content}</p>
      ))}
    </article>
  )
}
