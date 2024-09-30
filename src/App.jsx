
import { useDispatch } from 'react-redux'
import './App.css'
import React,{useState,useEffect} from 'react'
import authService  from "./appwrite/auth.js"
import { login,logout } from './store/authSlice.js'
import { Footer, Header } from './components/index.js'
// import { Outlet } from 'react-router-dom


function App() {

  console.log(import.meta.env.VITE_APPWRITE_URL)
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout)
      }

    })
    .finally(setLoading(false))
  },[])
     
  return !loading ? (<div className='min-h-screen flex flex-wrap content-between bg-slate-500'>
  <div className='block min-h-screen'>
    <Header/>
    <main>
{/* {Outlet} */}

    </main>
    <Footer/>
  </div>
  test
  </div>):null
}

export default App
