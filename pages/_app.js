import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'
import '../components/FontAwesomeIcons/index'

const prefix=process.env. NEXT_PUBLIC_BASE_PATH || '';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
 <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
