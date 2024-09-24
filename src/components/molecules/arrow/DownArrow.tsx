import { useEffect, useState } from 'react'
// import { Link } from 'react-scroll'

import { FaChevronDown } from 'react-icons/fa'

type Props = {
  next: string
  scrollY: number
}
export default function DownArrow(props: Props) {
  const { scrollY } = props
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    // <Link to={next} smooth={true} duration={600}>
    <div
      className={`col-flex bottom-5 left-1/2 absolute -translate-x-1/2  ${isVisible ? 'opacity-100' : 'opacity-0'} cursor-pointer hover:text-[#9DF3c4] hover:scale-110 simple-transition`}
    >
      <p>Scroll Down</p>
      <FaChevronDown className="w-8 h-8 text-[#9DF3c4]" />
    </div>
    // </Link>
  )
}
