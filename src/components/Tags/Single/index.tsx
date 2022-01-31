import { useMemo } from 'react';
import { SliderContext } from '../../../contexts/useSlider';
import { formatDistance } from '../../../utils/formatDistance';
import styles from './styles.module.scss';

export interface TagsSingleProps {
  title: string
  totalNotes: number
  nextReview: string | Date
}

export function TagsSingle({ title, totalNotes, nextReview }: TagsSingleProps) {
  const nextReviewDate = useMemo(() => {
    return formatDistance(nextReview);
  }, [nextReview])

  return (
    <SliderContext.Consumer>
      {({ elementRef }) => (
        <div className={styles.tagsSingleContainer} ref={elementRef}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.description}>
            <span>{totalNotes} notes</span>
            <p>Next review {nextReviewDate}</p>
          </div>
        </div>
      )}
    </SliderContext.Consumer>
  )
}