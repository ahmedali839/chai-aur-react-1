import './App.css'
import Card from './components/Card'

function App() { 

 const someObj  = {
  name : "ahmed yar",
  age: 12,

 } 
 const newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 p-10 text-black rounded-xl mb-4'>tailwindcss</h1> 
<Card view="visit profile" name="Ahmed Yar" />
<Card obj = {someObj}/>  
<Card obj = {newArr}/>  
<Card /> 
 </>
  )
}

export default App