import { create } from 'zustand'

import { MAIN } from '@/constant'

type State = {
  step: string
  setStep: (destination: string) => void
}

export const useStepStore = create<State>()((set, get) => ({
  step: MAIN,
  setStep: (destination) => {
    set({ step: destination })
  },
}))
