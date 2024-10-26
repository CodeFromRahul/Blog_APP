import React from 'react'
import {Logoutbtn,Logo} from '../index'
// import { Container } from '../Container/Container'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const authStatus = useSelector((state)=>{state.auth.status
  })
  const navigate = useNavigate()
const navItems = [
  {
    name:"Home",
    slug:"/",
    active:true
  },
  {
    name:"Login",
    slug:"/Login",
    active:!authStatus
  },
  {
    name:"Logout",
    slug:"/Logout",
    active:!authStatus

  },
  {
    name:"Allpost",
    slug:"/all-post",
    active:authStatus
  },
  {
    name:"Addpost",
    slug:"/add-post",
    active:authStatus
  }
]

    return (
    <header>
     
      <nav className='flex'>
        <Link to="/">
          <Logo width='70px'/>
        </Link>

        <ul className='flex ml-auto'>
          {navItems.map((items)=>{
             items.active? (
              <li key={items.name}>
                <button onClick={()=>navigate(items.slug)}
                className='inline-block px-5 py-2 duration-200 hover:bg-blue-400 rounded-full'
                >{items.name}</button>
              </li>
             ):null
          })}
          {authStatus && (
            <li>
            <Logoutbtn/>
            </li>
          )}
        </ul>
      </nav>
    
    </header>
  )
}

export default Header