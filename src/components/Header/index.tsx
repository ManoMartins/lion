import { FcGoogle } from 'react-icons/fc';

import { ActiveLink } from "../ActiveLink";

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <ul>
            <li>
              <ActiveLink activeClassName={styles.active} href="/">
                <a>Home</a>
              </ActiveLink>
            </li>
            
            <li>
              <ActiveLink activeClassName={styles.active} href="/tags">
                <a>Tags</a>
              </ActiveLink>
            </li>
            
            <li>
              <ActiveLink activeClassName={styles.active} href="/notes">
                <a>Notes</a>
              </ActiveLink>
            </li>
            
            <li>
              <ActiveLink activeClassName={styles.active} href="/create">
                <a>New Note</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>

        <button className={styles.loginButton}>
          <FcGoogle size={24} />
          Login In with Google
        </button>
      </div>
    </header>
  )
}