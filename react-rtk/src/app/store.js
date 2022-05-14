import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
// import reduxLogger from 'redux-logger'
import cakeReducer from '../features/cake/cakeSlice'
import UserReducer  from '../features/user/UserSlice'
// const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        user:UserReducer,
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
    
})

export default store