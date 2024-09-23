import { useEffect, useState } from 'react'

import { FaChevronDown } from 'react-icons/fa'

export default function DownArrow() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
    <div
      className={`col-flex bottom-5 left-1/2 absolute -translate-x-1/2 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <p>Scroll Down</p>
      <FaChevronDown className="w-8 h-8 text-[#9DF3c4]" />
    </div>
  )
}
