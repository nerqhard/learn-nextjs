import { SubmitDialog } from 'components/common/dialog/SubmitDialog'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import classes from './Header.module.css'
import { MenuItem } from './menu-item/MenuItem'
import { collection, addDoc } from "firebase/firestore"; 
import { FIRE_BASE_CONSTANTS } from 'constants/firebaseConstants'
import { db } from '@/base/firebase'
import { useDispatch } from 'react-redux'
import { setTextDisplay } from '@/base/redux/common/operation'
import { AppDispatch } from '@/base/redux/store'

export const Header = () => {
    const router = useRouter()
    const dispatch: AppDispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false)

    const handleOnClickVideos = () => {
        router.push('./videos')
    }
    const handleOnClickMain = () => {
        router.push('./')
    }
    const handleOnClickSetting = () => {
        setOpenDialog(true)
    }

    const handleSubmit = async (value: any) => {
        const result = value?.split(/\r?\n/)
        dispatch(setTextDisplay(result || []));
    }

    return (
        <div className={classes.header}>
            <MenuItem
                onClick={handleOnClickMain}
                pathAnimation={'/work-from-home.json'}
                title={'Go to Home'}
            />
            <MenuItem
                onClick={handleOnClickVideos}
                pathAnimation={'/energy-rocket.json'}
                title={'Go to My Videos'}
            />
            <MenuItem
                onClick={handleOnClickSetting}
                pathAnimation={'/setting.json'}
                title={'Go to Setting'}
            />
            {openDialog && (
                <SubmitDialog
                    open={openDialog}
                    handleClose={() => setOpenDialog(false)}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    )
}
