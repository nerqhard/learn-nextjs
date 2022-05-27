import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import { Header } from 'components/header/Header'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Code của Hà</title>
                <link rel="icon" href="/icon_ha.ico" />
            </Head>

            <main className={styles.main}>
                <Header />
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp
