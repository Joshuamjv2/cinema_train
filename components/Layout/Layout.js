import Footer from "./Footer"
import Head from "next/head"
import Navigation from "./Navigation"
import { useContext, useState, useEffect } from "react"
import { UserContextProvider } from "@/contextapi/UserContext"

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