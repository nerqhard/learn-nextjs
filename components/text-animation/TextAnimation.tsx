import React from 'react'
import Typewriter from 'typewriter-effect'
import { CONTENT_MESSAGE } from './TextAnimation.config'
import classes from './TextAnimation.module.css'

export default function TextAnimation() {
    return (
        <div className={classes.textAnimation}>
            <Typewriter
                options={{
                    strings: CONTENT_MESSAGE,
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    )
}
