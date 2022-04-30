import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    setIsMount(true)

    return () => {
      setIsMount(false)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Hà đi tập code</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.youtube.com/watch?v=Qy_ADdVXv6Q&ab_channel=1967">Pé JI 610 🫶</a>
        </h1>

        <div className={styles.description}>
          {isMount && (
            <ReactPlayer
              className="react-player fixed-bottom"
              // url= 'https://www.youtube.com/watch?v=FGz4DAylafk&ab_channel=XPEDM'
              url="videos/test.mp4"
              width="100%"
              height="100%"
              controls
            />
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by <span className={styles.logo}>🫶🫶🫶</span>
      </footer>
    </div>
  )
}

export default Home
