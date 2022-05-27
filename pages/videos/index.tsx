import { VideoPlayer } from 'components/videos/VideoPlayer'
import React, { useEffect, useState } from 'react'

const Videos = () => {
    const [isMount, setIsMount] = useState(false)

    useEffect(() => {
        setIsMount(true)

        return () => {
            setIsMount(false)
        }
    }, [])

    return <>{isMount && <VideoPlayer url={'videos/test.mp4'} />}</>
}

export default Videos
