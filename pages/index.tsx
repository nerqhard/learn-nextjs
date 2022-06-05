import { LaptopWorking } from 'components/lottie/laptop-working/LaptopWorking'
import TextAnimation from 'components/text-animation/TextAnimation'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'
import { useDispatch } from 'react-redux'
import { getTextDisplay } from '../redux/common/operation'
import { AppDispatch } from '../redux/store'

const Home: NextPage = () => {
    const dispatch: AppDispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getTextDisplay());
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
