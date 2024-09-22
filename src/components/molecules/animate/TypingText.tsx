import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'

type Props = {
  text: string
  setIsTopSectionEnd: Dispatch<SetStateAction<boolean>>
  breakAfter?: string
  highlightWord?: string
  highlightClass?: string
}

export default function TypingText(props: Props) {
  const {
    text,
    breakAfter,
    highlightWord,
    highlightClass,
    setIsTopSectionEnd,
  } = props
  const [mainText, setMainText] = useState('')
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const typingText = text || ''

    if (count < typingText.length) {
      const timeout = setTimeout(() => {
        setMainText(typingText.slice(0, count + 1))
        setCount((prevCount) => prevCount + 1)
      }, 170)

      return () => {
        clearTimeout(timeout)
      }
    } else {
      setIsTopSectionEnd(true)
    }
  }, [text, count, setIsTopSectionEnd])

  const renderText = () => {
    if (!breakAfter) {
      return (
        <div className="inline-block whitespace-pre">
          {applyHighlight(mainText, text)}
        </div>
      )
    }

    const breakIndex = text.indexOf(breakAfter) + breakAfter.length
    const firstPart = mainText.slice(0, Math.min(breakIndex, mainText.length))
    const secondPart = mainText.slice(breakIndex)

    return (
      <>
        <div className="inline-block mb-4 whitespace-pre">
          {applyHighlight(firstPart, text.slice(0, breakIndex))}
        </div>
        {secondPart && (
          <>
            <br />
            <div className="inline-block whitespace-pre">
              {applyHighlight(secondPart, text.slice(breakIndex))}
            </div>
          </>
        )}
      </>
    )
  }

  const applyHighlight = (currentText: string, fullText: string) => {
    if (!highlightWord || !highlightClass) return currentText

    const regex = new RegExp(`(${highlightWord})`, 'gi')
    const result = []
    let lastIndex = 0

    fullText.replace(regex, (match, group, index: number) => {
      if (index >= currentText.length) return match

      const beforeMatch = fullText.slice(lastIndex, index)
      const matchedPart = currentText.slice(index, index + match.length)

      result.push(beforeMatch)
      result.push(
        <span key={index} className={highlightClass}>
          {matchedPart}
        </span>,
      )

      lastIndex = index + match.length
      return match
    })

    if (lastIndex < currentText.length) {
      result.push(currentText.slice(lastIndex))
    }

    return result
  }

  return (
    <div className="relative">
      <div className="invisible">{text}</div>
      <div className="absolute top-0 left-0">
        {renderText()}
        <span className="ml-3 animate-blink inline-block bg-current w-[0.5rem] h-[2.5rem] align-middle"></span>
      </div>
    </div>
  )
}
