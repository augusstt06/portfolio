import { FaChevronDown } from 'react-icons/fa'

export default function DownArrow() {
  return (
    <div className="col-flex bottom-10 left-1/2 absolute -translate-x-1/2">
      <p>Sroll Down</p>
      <FaChevronDown className="w-8 h-8 text-[#9DF3c4]" />
    </div>
  )
}
