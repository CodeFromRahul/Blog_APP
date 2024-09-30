import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


const Logoutbtn = () => {

    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout)
        }).catch((error)=>{
            throw new error
        })
    }
}
  return (

   <button className='inline-block px-10 py-5 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>


  )


export default Logoutbtn