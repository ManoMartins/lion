import { NextSeo } from 'next-seo';
import { useAuth } from '../contexts/auth';
import styles from '../styles/home.module.scss';

export default function Home() {
  const { logIn, logOut } = useAuth()

  return (
    <div className={styles.homeContainer}>
      <NextSeo 
        title='Home'
        description='Home page'
        canonical='https://lion-gamma.vercel.app'
        openGraph={{
          url: 'https://lion-gamma.vercel.app',
          title: 'Home page OP ',
          description: 'Home page - OP description',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1578166375397-5711fb282325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
              alt: 'Home page',
            },
          ],
        }}
      />

      <button onClick={() => logIn()}>Login</button>
    </div>
)
}

