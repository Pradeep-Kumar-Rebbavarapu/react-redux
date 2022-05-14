import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './UserSlice'
export default function UserView() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    const Users = useSelector((state)=>{
        return state.user
    })
    console.log(Users);
  return (
    <div>
        <h2>List of Users</h2>
        {Users.loading && <h1>loading...</h1>}
        {!Users.loading && Users.error? <h1>{Users.error}</h1>:null}
        {!Users.loading && Users.data.length ? (
            <ul>
                {
                    Users.data.map((user)=>{
                        return(
                            <h1>
                                {user.id} : {user.name}
                            </h1>
                        )
                    })
                }
            </ul>
        ):(
            null
        )}
      
    </div>
  )
}
