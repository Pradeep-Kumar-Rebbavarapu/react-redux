import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading:false,
    data:[],
    error:""
}

// a promise either pending,fullfilled,rejected
export const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.data
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


export default UserSlice.reducer