'use client'
import { MAIN } from '@/constant'

import { useStepStore } from '@/app/store'

export default function Nav() {
  const { step, setStep } = useStepStore()

  const isRender = step !== MAIN
  const menus = [
    { title: 'Main' },
    { title: 'Introduce' },
    { title: 'Skills' },
    { title: 'Experiences' },
  ]

  const clickHandler = (menu: string) => {
    setStep(menu)
  }

  const isButtonDisabled = step === MAIN
  return (
    <nav
      className={`fixed w-full h-20 grid grid-cols-5 transition-opacity duration-1000 ease-in-out ${isRender ? 'opacity-100' : 'opacity-0'}`}
    >
      <section className="col-start-2 col-end-5 grid grid-cols-4 grid-center relative">
        {menus.map((data) => (
          <button
            key={data.title}
            disabled={isButtonDisabled}
            onClick={() => {
              clickHandler(data.title)
            }}
            className={`relative w-[10rem] h-16 transition-colors duration-300 text-center hover:text-[#9DF3c4]
            ${step === data.title ? 'text-[#9DF3c4]' : 'text-white'}
          `}
          >
            {data.title}
            <span
              className={`absolute left-0 bottom-0 h-1 bg-[#9DF3c4] transition-all duration-300 transform ${step === data.title ? 'w-full' : 'w-0'} `}
            />
          </button>
        ))}
      </section>
    </nav>
  )
}
