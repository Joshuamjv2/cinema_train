import Head from 'next/head'
import { Inter } from 'next/font/google'
import Slider from './components/Slider/Slider'
import Showing from './components/Showing/Showing'
import ComingSoon from './components/ComingSoon/ComingSoon'
import Layout from './components/Layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#ffc300"/>
          <meta name="theme-color" content="#ffc300"/>
      </Head>
      <Layout title={"Cinema Train - Home"}>
        <Slider />
        <Showing />
        <ComingSoon />
      </Layout>
    </div>
  )
}
