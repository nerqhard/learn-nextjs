import { Tooltip } from '@mui/material'
import { IconAnimations } from 'components/animations/IconAnimations'
import React, { FC } from 'react'
import classes from './MenuItem.module.css'

export interface MenuItemProps {
    onClick: any
    title: string
    pathAnimation: string
}

export const MenuItem: FC<MenuItemProps> = (props) => {
    const { onClick, title, pathAnimation } = props

    return (
        <div className={classes.menuItem} onClick={onClick}>
            <Tooltip title={title}>
                <IconAnimations path={pathAnimation} />
            </Tooltip>
        </div>
    )
}
