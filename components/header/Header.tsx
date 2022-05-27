import { IconAnimations } from 'components/animations/IconAnimations'
import React from 'react'
import { useRouter } from 'next/router'
import classes from './Header.module.css'
import { Tooltip } from '@mui/material'

export const Header = () => {
    const router = useRouter()

    const handleOnClickVideos = () => {
        router.push('./videos')
    }
    const handleOnClickMain = () => {
        router.push('./')
    }
    return (
        <div className={classes.header}>
        <div className={classes.iconHeader} onClick={handleOnClickMain}>
            <Tooltip title="Go to Home">
                <IconAnimations path="/work-from-home.json" />
            </Tooltip>
        </div>
        <div className={classes.iconHeader} onClick={handleOnClickVideos}>
            <Tooltip title="Go to my videos">
                <IconAnimations path="/energy-rocket.json" />
            </Tooltip>
        </div>
        </div>
    )
}
