import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
const [length, setLength] = useState(8) 
const [numberAllowed, setNumberAllowed] = useState(true) 
const [chracterAllowed, setChracterAllowed] = useState(true) 
const [password, setPassword] = useState("")  

// useRef hook it's use to reference a object and objects always not linked to each other. if one button in the bottom of the page and your input is in the top of the page you can entre related || linked by useRef
 
const passwordRef = useRef(null) 

const copyPasswordToClipboard = useCallback(() => { 
  passwordRef.current?.select(); 
  passwordRef.current?.setSelectionRange(0,3)
window.navigator.clipboard.writeText(password)
},[password])



const passwordGenerator = useCallback(() => { 
let pass = "";
let str = "ABCDEFGHIJLKMMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if (numberAllowed) str += "1234567890";
if(chracterAllowed) str += "{}|:>?<,./;']['|";  

for (let i = 0; i <= length; i++) {
let char = Math.floor(Math.random() * str.length +1) 

pass += str.charAt(char)
  
}
setPassword(pass)
}
  ,[length, numberAllowed, chracterAllowed, setPassword])
 
useEffect(() => { 
passwordGenerator()
}, [length, numberAllowed, chracterAllowed, passwordGenerator])


return (
    <>
      <div className='max-w-48px mx-auto w-full shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'> 
      <h2 className= 'my-3 text-white text-center'>Password Generator</h2>
       <div className='rounded-lg shadow-md flex overflow-hidden mb-4'> 
      <input type="text" value={password} className='px-3 py-1 outline-none w-full' placeholder='password' readOnly ref={passwordRef} /> 
      <button onClick={copyPasswordToClipboard} className='bg-blue-500 text-white outline-none px-4 py-3'>Copy</button> 
       </div>
      
<div className='gap-x-1 items-center flex'>   
<div className='gap-x-2 text-sm flex'> 
 <input 
 type="range"  
min={6} 
max={100} 
className='cursor-pointer' 
value={length}
 onChange={(e) => {setLength(e.target.value)}} 
 
 /> 
<label>length: {length}</label>
 </div>
<div className='items-center gap-x-1 flex'> 
 <input 
 type="checkbox"  
 defaultChecked={numberAllowed} 
 onChange={() => setNumberAllowed((prev) => !prev)}
id='numberInput'
 />
<label className='' htmlFor='numberInput'>Numbers</label>
 </div> 
 <div className='items-center gap-x-1 flex'> 
 <input  
 type="checkbox" 
 id='chracterInput' 
 onChange={() => setChracterAllowed((prev) => !prev)}
  defaultChecked={chracterAllowed} 
   /> 
   <label htmlFor='chracterInput'>Character</label>
 </div>
</div>

      </div>
      </>
  )
}

export default App
