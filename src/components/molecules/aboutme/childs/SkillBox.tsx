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
      className={`text-[#fff] group hover:h-[17rem] xl:hover:h-[15rem] md:hover:w-60 hover:w-80 xl:hover:w-[23rem]  simple-transition col-flex justify-center md:grid w-28 md:w-52 h-12 md:grid-cols-4 px-4 py-2 text-center text-lg rounded-lg cursor-pointer`}
      style={{ backgroundColor: color }}
    >
      <div className="hidden md:block col-span-1">{icon}</div>
      <div className="col-span-3">{title}</div>
      <div className="hidden p-3 group-hover:block col-span-4 overflow-scroll">
        {text}
      </div>
    </div>
  )
}
