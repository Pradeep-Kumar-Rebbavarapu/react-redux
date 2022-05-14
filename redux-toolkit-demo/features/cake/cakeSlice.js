const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numOfCakes:10
}

// reducer of cakeslice 
const cakeSlice = createSlice({
    name:'cake',
    initialState:initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numOfCakes--
        },
        restocked:(state,action)=>{
            state.numOfCakes += action.payload
        },
    },
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions