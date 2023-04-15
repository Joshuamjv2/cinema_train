import Footer from "./Footer"
import Head from "next/head"
export default function Layout({children, title}){
    return (
        <main>
            <Head>
                <title>{title}</title>
            </Head>
            {/* <Navigation /> */}
            {children}
            <Footer />
        </main>
    )
}