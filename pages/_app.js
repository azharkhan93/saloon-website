
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  
  return <>
    < Navbar />
    < Sidebar />
    <Component {...pageProps} />

  </>
}
