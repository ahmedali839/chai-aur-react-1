import React from 'react'
import {LogoutBtn, Container, Logo} from "../Index" 
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const authStatus = useSelector((state) => state.auth.status)
const navigate = useNavigate() 
 
const navItem = [
  {
    name: 'Home',
    slug: "/",
    active: true
  }, 
  {
    name: "Login",
    slug: "/login",
    active: !authStatus,
},
{
    name: "Signup",
    slug: "/signup",
    active: !authStatus,
},
{
    name: "All Posts",
    slug: "/all-posts",
    active: authStatus,
},
{
    name: "Add Post",
    slug: "/add-post",
    active: authStatus,
},
]

function Header() {
  return (
    <div> 
    <Container> 
    <nav className='flex'>
<div className='mr-4'>
<Link to="/">
<Logo />
</Link>
</div>
   
   <ul className='flex ml-auto'>
{
  navItem.map((item) => item.active ? (
<li key={item.name}>
<button 
className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-lg'
onClick={() => navigate(item.slug)}
>{item.name}</button>
</li>

  ) : (null) ) 
}
{authStatus && (
    <li>
      <LogoutBtn />
    </li>
  )
}
   </ul>


    </nav>
    </Container>
    Header</div>
  )
}

export default Header