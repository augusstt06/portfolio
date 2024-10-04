type Props = {
  url: string
  title: string
  description: string
  skills: string[]
}

export default function Card(props: Props) {
  const { title, description, skills } = props
  return (
    <div className="max-w-sm h-auto p-6 bg-[#1d5286] rounded-lg shadow korean-font grid grid-row-3">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {title}
      </h5>
      <div className="row-span-1 flex-col items-start flex justify-around">
        <p className="mb-1  text-[1rem] sm:text-[1.1rem] text-gray-400">
          {description}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center items-center">
          {skills.map((data) => (
            <span
              className="px-3 py-1  inline-block  rounded-lg border-2 border-white"
              key={data}
            >
              {data}
            </span>
          ))}
        </div>
      </div>
      <button className="text-sm text-white bg-[#0080ff] rounded-lg hover:scale(1.1)">
        More Info
      </button>
    </div>
  )
}
