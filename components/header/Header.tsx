import { IconAnimations } from 'components/animations/IconAnimations'
import React from 'react'
import { useRouter } from 'next/router'
import classes from './Header.module.css'
import { Tooltip } from '@mui/material'
import { MenuItem } from './menu-item/MenuItem'

export const Header = () => {
    const router = useRouter()

    const handleOnClickVideos = () => {
        router.push('./videos')
    }
    const handleOnClickMain = () => {
        router.push('./')
    }
    const handleOnClickSetting = () => {
        router.push('./')
    }
    return (
        <div className={classes.header}>
            <MenuItem onClick={handleOnClickMain} pathAnimation={'/work-from-home.json'} title={'Go to Home'}/>
            <MenuItem onClick={handleOnClickVideos} pathAnimation={'/energy-rocket.json'} title={'Go to My Videos'}/>
            <MenuItem onClick={handleOnClickSetting} pathAnimation={'/setting.json'} title={'Go to Setting'}/>
        </div>
    )
}
