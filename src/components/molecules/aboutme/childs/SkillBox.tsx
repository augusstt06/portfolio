type Props = {
  title: string
  color: string
  icon: JSX.Element
}

export default function SkillBox(props: Props) {
  const { title, color, icon } = props

  return (
    <div
      className={`text-[#fff] row-flex justify-center max-w-2/3 max-h-2/3 w-28 h-8 text-sm rounded-lg gap-4`}
      style={{ backgroundColor: color }}
    >
      <div className="hidden md:block ">{icon}</div>
      <span>{title}</span>
    </div>
  )
}
