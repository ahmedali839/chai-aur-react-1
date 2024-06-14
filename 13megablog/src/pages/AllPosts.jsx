import React, {useState, useEffect} from 'react'
import appwriteService from  "../appwrite/config" 
import { Container, PostCard } from '../components/Index'

function AllPosts() { 
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])

    appwriteService.getPosts([])
    .then((posts) => {
if (posts) {
    setPosts(posts.documents)
}
    })
    

    
  return (
    <div className='py-8 w-full'>
<Container>
<div className="w-full">
{posts.map((post) => (
<div key={post.$id} className='p-2 w-1/2'>
<PostCard post={post} />
</div>
))
}
</div>
</Container>
    </div>
  )
}

export default AllPosts