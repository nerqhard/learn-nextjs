import { SET_TEXT_DISPLAY } from './types'

const initialState = {
    textDisplay: ''
}

const commonReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_TEXT_DISPLAY:
            return {
                ...state,
                textDisplay: action.payload,
              }
        default:
            return state
    }
}

export default commonReducer;