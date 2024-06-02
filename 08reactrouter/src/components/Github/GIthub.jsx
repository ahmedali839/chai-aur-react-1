import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
// import { useParams } from 'react-router-dom' 

function GIthub() { 
 
  const data = useLoaderData()


// const [data, setData] = useState("") 
// useEffect(() => { 
//     fetch(`https://api.github.com/users/hiteshchoudhary`) 
//     .then((res) => res.json()) 
//     .then(data => {
//         console.log(data)
//         setData(data)
     
//     }) 
// }, [])


  return (
    <div className='bg-gray-600  text-center m-4 p-4 text-white text-3xl'>
    GITHUB followers:  {data.followers} 
    <img src={data.avatar_url} alt="github image" width={300} height={400}  />
    </div>
  )
}

export default GIthub 

export const gitInfo = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary") 
  return res.json()
}