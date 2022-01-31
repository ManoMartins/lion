import { SliderContext } from "../../../contexts/useSlider";
import useSizeElement from "../../../hooks/useSizeElement";
import useSliding from "../../../hooks/useSliding";
import { SliderButton } from "../../SliderButton";
import { TagsSingle, TagsSingleProps } from "../Single";

import styles from './styles.module.scss';

interface TagsListProps {
  tags: TagsSingleProps[]
}

export function TagsList({ tags }: TagsListProps) {
  const { width, elementRef } = useSizeElement();
  const {
    hasPrev,
    hasNext,
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
  } = useSliding(width, tags.length);


  return (
    <SliderContext.Provider value={{
      hasPrev,
      hasNext,
      handlePrev,
      handleNext,
      slideProps,
      elementRef,
      containerRef,
    }}>
      <div className={styles.tagsListContainer}>
        <h1 className={styles.title}>Tags List</h1>

        <div className={styles.tagsListContent} ref={containerRef} {...slideProps}>
          <TagsSingle title="Software engineer" totalNotes={20} nextReview={'2022-02-20'} />
          
          <TagsSingle title="English" totalNotes={120} nextReview={'2022-02-01'} />

          <TagsSingle title="French" totalNotes={230} nextReview={'2022-02-02'} />

          <TagsSingle title="German" totalNotes={230} nextReview={'2022-02-02'} />

          <TagsSingle title="Span" totalNotes={230} nextReview={'2022-02-02'} />

        </div>

        {hasPrev && <SliderButton type="prev" onClick={handlePrev} />}
        {hasNext && <SliderButton type="next" onClick={handleNext} />}
      </div>
    </SliderContext.Provider>
  )
}
