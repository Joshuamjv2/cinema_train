import Footer from "./Footer"
import Head from "next/head"
import Navigation from "./Navigation"
export default function Layout({children, title}){
    return (
        <main>
            <Head>
                <title>{title}</title>
            </Head>
            <Navigation />
            {children}
            <Footer />
        </main>
    )
}