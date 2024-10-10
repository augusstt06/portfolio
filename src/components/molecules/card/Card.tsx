import { useRouter } from 'next/navigation'

type Props = {
  url: string
  title: string
  description: string
}

export default function Card(props: Props) {
  const { title, description, url } = props
  const router = useRouter()
  const clickHandler = () => {
    router.push(url)
  }
  return (
    <div className="max-w-sm h-auto p-6 bg-[#343641] rounded-lg shadow korean-font grid grid-row-3">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {title}
      </h5>
      <div className="row-span-1 flex-col items-start flex justify-around">
        <p className="mb-1  text-[1rem] sm:text-[1.1rem] text-gray-400">
          {description}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center items-center"></div>
      </div>
      <div className="row-flex justify-center">
        <button
          className="text-sm text-white bg-[var(--main-color)] rounded-lg hover:scale(1.1) px-6 py-2"
          onClick={clickHandler}
        >
          Source Code
        </button>
      </div>
    </div>
  )
}
