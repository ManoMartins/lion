import { useAuth } from '../contexts/auth';
import styles from '../styles/home.module.scss';

export default function Home() {
  const { logIn, logOut } = useAuth()

  return (
    <div className={styles.homeContainer}>
      <button onClick={() => logIn()}>Login</button>
      <button onClick={() => logOut()}>logOut</button>
    </div>
)
}

