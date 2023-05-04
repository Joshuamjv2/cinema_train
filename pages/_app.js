import '@/styles/globals.css'
import Head from 'next/head'
import { UserContextProvider } from '@/contextapi/UserContext'

import "@fortawesome/fontawesome-svg-core/styles.css"
const {library} = require('@fortawesome/fontawesome-svg-core') // this instead of import prevents hydration error
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

library.add(fab, far, fas)

export default function App({ Component, pageProps }) {
  return <>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#ffc300"/>
            <meta name="theme-color" content="#ffc300"/>
        </Head>
        <UserContextProvider><Component {...pageProps} /></UserContextProvider>
  </>
}
