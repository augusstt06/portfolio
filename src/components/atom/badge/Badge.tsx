type Props = {
  title: string
}
export default function Badge(props: Props) {
  const { title } = props
  return (
    <div
      className={`simple-transition w-auto h-8  px-4 py-2 text-center border-2 rounded-lg cursor-pointer items-center row-flex`}
    >
      # {title}
    </div>
  )
}
