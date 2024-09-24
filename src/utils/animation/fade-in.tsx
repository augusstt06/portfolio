import gsap from 'gsap'

export function splitText(element: HTMLElement) {
  const text = element.innerText
  const letters: string[] = text.split('')
  element.innerHTML = letters.map((letter) => `<span>${letter}</span>`).join('')
}

// 개별 문자에 애니메이션을 적용하는 함수
export function animateRandomLettersIn(element: HTMLElement) {
  gsap.fromTo(
    element.querySelectorAll('span'),
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      stagger: {
        each: 0.1,
        from: 'random',
      },
    },
  )
}

// 나갈 때 애니메이션
export function animateRandomLettersOut(element: HTMLElement) {
  gsap.to(element.querySelectorAll('span'), {
    opacity: 0,
    duration: 1,
    ease: 'power2.in',
    stagger: {
      each: 0.1,
      from: 'random',
    },
  })
}
