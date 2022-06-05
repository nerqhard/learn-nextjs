import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './common/reducers'

export const store = configureStore({
    reducer: {
        common: commonReducer,
    },
})
