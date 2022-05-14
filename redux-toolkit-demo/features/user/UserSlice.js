const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')


const initialState = {
    loading:false,
    data:[],
    error:""
}

// a promise either pending,fullfilled,rejected
const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
    return axios
    .get('https://jsonplaceholder.typicode.com/user')
    .then((response)=>{
        return response.data.map(user=>user.id)
    })
})



const UserSlice = createSlice({
    name:"user",
    initialState:initialState,
    extraReducers:builder=>{
        builder.addCase(fetchUsers.pending,state=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
        
    }
})


module.exports = UserSlice.reducer
module.exports.fetchUsers = fetchUsers