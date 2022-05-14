const redux =  require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware



const initialstate = {
    loading:false,
    users:[],
    errors:''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () =>{
    return {
        type:FETCH_USERS_REQUEST,
    }
}

const fetchUsersSuccess = (users) =>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users,
    }
}

const fetchUsersFailure = (error) =>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error,
    }
}


const reducer = (state = initialstate,action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:return{
            ...state,
            loading:true
        }
        case FETCH_USERS_SUCCESS:return{
            ...state,
            loading:false,
            users:action.payload
        }
        case FETCH_USERS_FAILURE:return{
            ...state,
            loading:false,
            error:action.payload
        } 
    }
}



const FetchUser = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response);
            dispatch(fetchUsersSuccess(response.data.map(user=>user.id)))
        })
        .catch((error)=>{
            
            dispatch(fetchUsersFailure(error.message))
        })
    }
}
const store = createStore(reducer,applyMiddleware(thunkMiddleware,logger))
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(FetchUser())