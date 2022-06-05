import { Header } from 'components/header/Header'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import '../styles/globals.css'
import styles from '../styles/Home.module.scss'
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <Head>
                    <title>Code của Hà</title>ß
                    <link rel="icon" href="/icon_ha.ico" />
                </Head>

                <main className={styles.main}>
                    <Header />
                    <Component {...pageProps} />
                </main>
            </Provider>
        </>
    )
}

export default MyApp
