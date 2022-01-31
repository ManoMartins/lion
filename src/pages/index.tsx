import { TagsList } from '../components/Tags/List'
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <TagsList tags={[
        { title: 'Software engineer', totalNotes: 20, nextReview: '2022-02-20' },
        { title: 'English', totalNotes: 120, nextReview: '2022-02-01' },
        { title: 'French', totalNotes: 230, nextReview: '2022-02-02' },
        { title: 'French', totalNotes: 230, nextReview: '2022-02-02' },
        { title: 'French', totalNotes: 230, nextReview: '2022-02-02' },
        { title: 'French', totalNotes: 230, nextReview: '2022-02-02' },
      ]} />
    </div>
)
}

