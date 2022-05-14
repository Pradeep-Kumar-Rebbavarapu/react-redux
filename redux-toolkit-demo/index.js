const store = require("./app/store")
const cakeActions  =require('./features/cake/cakeSlice').cakeActions
const fetchUsers = require('./features/user/UserSlice').fetchUsers
const unSubscribe = store.subscribe(()=>{
    
})


store.dispatch(fetchUsers())