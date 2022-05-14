const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const UserReducer  =require('../features/user/UserSlice')
const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        user:UserReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
    
})

module.exports = store