import { createContext, MutableRefObject } from "react";

interface SliderContextValues {
  elementRef: MutableRefObject<any>
  handlePrev: () => void
  handleNext: () => void
  slideProps: {
    style: {
      transform: string;
    }
  }
  containerRef: MutableRefObject<any>
  hasNext: boolean
  hasPrev: boolean
}

export const SliderContext = createContext<SliderContextValues>({} as SliderContextValues);
