type Props = {
  url: string
  title: string
  description: string
}

export default function Card(props: Props) {
  const { title, description } = props
  return (
    <div className="max-w-sm h-auto p-6 bg-[#1d5286] rounded-lg shadow korean-font grid grid-row-3">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>

      <p className="mb-1 text-sm text-gray-400">{description}</p>
      <button className="text-xs text-white bg-[#0080ff] rounded-lg hover:scale(1.1)">
        More Info
      </button>
    </div>
  )
}
