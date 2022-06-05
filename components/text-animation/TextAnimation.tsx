import { getTextDisplay } from '@/base/redux/common/operation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Typewriter from 'typewriter-effect'
import classes from './TextAnimation.module.css'

export default function TextAnimation() {
    const {textDisplay} = useSelector((state: any) => state.common);

    return (
        <div className={classes.textAnimation}>
            <Typewriter
                options={{
                    strings: textDisplay,
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    )
}
