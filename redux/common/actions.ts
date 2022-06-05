import { GET_TEXT_DISPLAY, SET_TEXT_DISPLAY } from './types'

export const addTextDisplay = (payload: any) => {
    return {
        type: SET_TEXT_DISPLAY,
        payload,
    }
}

