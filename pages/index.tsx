import { LaptopWorking } from 'components/lottie/laptop-working/LaptopWorking'
import TextAnimation from 'components/text-animation/TextAnimation'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
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
        <div className={styles.home}>
            <LaptopWorking />
            <div className={styles.info}>
                <h1 className={styles.title}>
                    <TextAnimation />
                </h1>
            </div>
        </div>
    )
}

export default Home
