import React, { FC, useEffect, useRef, useState } from 'react'
import type { LottiePlayer } from 'lottie-web'

export interface IconAnimationsProps {
    path: string
}

export const IconAnimations: FC<IconAnimationsProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    const [lottie, setLottie] = useState<LottiePlayer | null>(null)

    useEffect(() => {
        import('lottie-web').then((Lottie: any) => setLottie(Lottie.default))
    }, [])

    useEffect(() => {
        if (lottie && ref.current) {
            const animation = lottie.loadAnimation({
                container: ref.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                // path to your animation file, place it inside public folder
                path: props.path,
            })

            return () => animation.destroy()
        }
    }, [lottie, props.path])

    return <div ref={ref} />
}
