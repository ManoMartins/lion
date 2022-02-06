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
          title: 'Home',
          description: 'Home page',
          images: [
            {
              url: 'https://unsplash.com/photos/S97RBrJnWiI',
              width: 800,
              height: 600,
              alt: 'Home page',
            },
          ],
        }}
      />

      <button onClick={() => logIn()}>Login</button>
    </div>
)
}

