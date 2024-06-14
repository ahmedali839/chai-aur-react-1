import { useState, useEffect } from 'react';
import './App.css';
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth" ;
import {login, logout} from "./store/authSlice" 
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';


function App() {

  const [loading, setLoading] = useState(true) 
 const dispatch = useDispatch() 


 useEffect(() => { 
  authService.getCurrentUser()
  .then((userData) => {
    if (userData) {
      dispatch(login({userData}))
       }
       else {
        dispatch(logout())
       }
  }) 
  .finally(() => setLoading(false))
 }, [])
 

  console.log(import.meta.env.VITE_APPWRITE_URL) 
  
  return !loading ? (
    <div className='flex flex-wrap content-between bg-gray-600 min-h-screen'>
<div className='w-full block'> 
<Header /> 
<main>
{/*  we will write here Outlet after line after router-provider */}
  {/* <Outlet /> */} 
  <Outlet />
</main> 
<Footer />
</div>


    </div>
  ) : <div>Loading...</div>  
}

export default App
