import { useAuth } from '../contexts/auth';
import styles from '../styles/home.module.scss';

export default function Log() {
  const { logIn, logOut } = useAuth()

  return (
    <div className={styles.homeContainer}>
      <button onClick={() => logOut()}>Forget password</button>
    </div>
)
}

