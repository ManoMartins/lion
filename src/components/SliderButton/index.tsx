import { HTMLAttributes } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import styles from './styles.module.scss';

interface SliderButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'prev' | 'next';
}

export function SliderButton({ type, ...rest }: SliderButtonProps) {
  return (
    <button className={`${styles.sliderButtonContainer} ${styles[type]}`} {...rest}>
      {type === 'prev' && <FiChevronLeft size={24} />}
      {type === 'next' && <FiChevronRight size={24} />}
    </button>
  )
}