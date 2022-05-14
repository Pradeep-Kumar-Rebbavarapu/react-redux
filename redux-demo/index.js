const redux = require('redux')
const reduxLogger = require('redux-logger')
const produce = require('immer').produce






const createStore = redux.createStore
const CombineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()



const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAM'




function buyCake () {
    return {
      type: BUY_CAKE,
      info: 'First redux action'
    }
  }
  
  function buyIceCream () {
    return {
      type: BUY_ICECREAMS
    }
  }
  
// (initialState,action) => newState


const initialCakeState = {
    numOfCakes:10
}
const initialIceCreamState = {
    numOfIceCreams:20
}



const CakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case BUY_CAKE: return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
      default: return state
    }
  }
  
  const IceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAMS: return produce(state,(draft)=>{
        
      })
      default: return state
    }
  }

const rootReducer = CombineReducers({
    cake:CakeReducer,
    icecream:IceCreamReducer,
})

const store = createStore(rootReducer)
console.log('initial state',store.getState());
const unsubscribe = store.subscribe(()=>{
});
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()
