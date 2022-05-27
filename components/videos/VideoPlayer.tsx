import React, { FC } from 'react'
import ReactPlayer from 'react-player'
import classes from './VideoPlayer.module.css'

export interface VideoPlayerProps {
    url: string
}

export const VideoPlayer: FC<VideoPlayerProps> = (props) => {
    return (
        <div className={classes.videoPlayer}>
            <ReactPlayer
                className="react-player fixed-bottom"
                url={props.url}
                width="100%"
                height="100%"
                controls
                loop
            />
        </div>
    )
}
