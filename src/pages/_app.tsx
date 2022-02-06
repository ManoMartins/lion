import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import { AuthContextProvider } from '../contexts/auth'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  )
}

export default MyApp
