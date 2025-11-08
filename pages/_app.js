import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }){
  return (<>
    <Nav />
    <main className="container"><Component {...pageProps} /></main>
    <Footer />
    <a href="https://wa.me/989396042449" className="fixed left-6 bottom-6 bg-[#25D366] p-3 rounded-full shadow-lg">💬</a>
  </>)
}

export default MyApp
