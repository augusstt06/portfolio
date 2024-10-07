type Props = {
  title: string
  color: string
  icon: JSX.Element
}

export default function SkillBox(props: Props) {
  const { title, color, icon } = props

  return (
    <div
      className={`text-[#fff] hover:scale-[1.1]  simple-transition col-flex justify-center md:grid max-w-2/3 max-h-2/3 w-60 h-12 md:grid-cols-4 px-4 py-2 text-center text-lg rounded-lg cursor-pointer`}
      style={{ backgroundColor: color }}
    >
      <div className="hidden md:block col-span-1">{icon}</div>
      <div className="col-span-3">{title}</div>
    </div>
  )
}
