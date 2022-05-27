import useWindowDimensions from 'hooks/useWindowDimensions'
import React from 'react'
import Lottie from 'react-lottie'
import animationData from 'animations/laptop-working.json'

export const LaptopWorking = () => {
    const dimension = useWindowDimensions()
    let width = 600
    if (dimension.width && dimension.width * 1.5 < width) {
        width = dimension.width
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            // preserveAspectRatio: "xMidYMid slice"
        },
    }

    return <Lottie options={defaultOptions} height={width / 1.5} width={width / 1.5} />
}
