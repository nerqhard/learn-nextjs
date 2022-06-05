import React, { FC, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Button, TextField } from '@mui/material'
import classes from './SubmitDialog.module.scss';

export interface SubmitDialogProps {
    open: boolean
    handleClose: any
    handleSubmit: any
}

export const SubmitDialog: FC<SubmitDialogProps> = (props) => {
    const { open, handleClose, handleSubmit } = props
    const [valueText, setValueText] = useState('')

    const onChange = (e: any) => {
        const value = e?.target?.value;
        setValueText(value || '');
    }

    const handleClickSubmit = () => {
        handleSubmit(valueText);
        handleClose();
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} className={classes.submitDialog}>
                <DialogTitle>Setting Title</DialogTitle>
                <DialogContent>
                    <DialogContentText>Change title display !</DialogContentText>
                    <TextField multiline maxRows={5} className={classes.fieldInput} value={valueText} onChange={(e) => onChange(e)} color="secondary" focused />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClickSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
