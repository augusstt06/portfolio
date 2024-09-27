type Props = {
  title: string
  color: string
  icon: JSX.Element
  text: JSX.Element
}

export default function SkillBox(props: Props) {
  const { title, color, icon, text } = props
  return (
    <div
      className={`text-[#fff] group hover:h-[17rem] xl:hover:h-[15rem] hover:w-80 xl:hover:w-[23rem]  simple-transition grid w-52 h-12 grid-cols-4 px-4 py-2 text-center text-lg rounded-lg cursor-pointer`}
      style={{ backgroundColor: color }}
    >
      <div className="col-span-1">{icon}</div>
      <div className="col-span-3">{title}</div>
      <div className="hidden p-3 group-hover:block col-span-4">{text}</div>
    </div>
  )
}
