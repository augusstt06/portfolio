import { ABOUTME } from '@/constant'

export function wrapTextInSpan(element: HTMLElement | null) {
  if (element) {
    const text = element.innerText
    element.innerHTML = `<span style="display:inline-block">${text}</span>`
  }
}

// 헤더 텍스트 애니메이션 함수
export function animateHeaderText(
  h1: HTMLElement | null,
  small: HTMLElement | null,
  tl: gsap.core.Timeline,
) {
  tl.addLabel('enter')

  if (h1) {
    tl.fromTo(
      h1.querySelector('span'),
      0.6,
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, ease: 'Circ.easeOut' },
    )
  }

  tl.addLabel('h1Complete')

  if (small) {
    tl.fromTo(
      small.querySelector('span'),
      0.6,
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, ease: 'Circ.easeOut' },
      'h1Complete',
    )
  }
}

// 서브 텍스트 애니메이션 함수
export function animateSubParagraph(
  subParagraphRef: HTMLParagraphElement | null,
  tl: gsap.core.Timeline,
) {
  if (subParagraphRef) {
    tl.fromTo(
      subParagraphRef,
      1,
      { opacity: 0 },
      { opacity: 0.6, ease: 'Linear.easeNone' },
    )
  }
}

// 애니메이션 끝내는 함수
export function addExitAnimation(
  h1: HTMLElement | null,
  small: HTMLElement | null,
  subParagraphRef: HTMLParagraphElement | null,
  tl: gsap.core.Timeline,
) {
  tl.addPause()
  tl.addLabel('exit')

  if (subParagraphRef) {
    tl.to(subParagraphRef, 0.5, { opacity: 0, ease: 'Linear.easeNone' })
  }

  if (h1) {
    tl.to(
      h1.querySelector('span'),
      0.4,
      { yPercent: -200, opacity: 0, ease: 'Circ.easeIn' },
      'exit',
    )
  }

  if (small) {
    tl.to(
      small.querySelector('span'),
      0.4,
      { yPercent: -200, opacity: 0, ease: 'Circ.easeIn' },
      'exit',
    )
  }

  if (subParagraphRef) {
    tl.to(subParagraphRef, { duration: 0.4, y: 100 })
  }
}

// 클릭 이벤트 핸들러 설정 함수
export function setupClickHandler(
  subParagraphRef: HTMLParagraphElement | null,
  tl: gsap.core.Timeline,
  setStep: (step: string) => void,
) {
  subParagraphRef?.addEventListener('click', () => {
    void tl.play().then(() => {
      setStep(ABOUTME)
    })
  })
}
