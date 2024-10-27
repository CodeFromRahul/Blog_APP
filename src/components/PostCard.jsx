import React from 'react'
import appwriteService from '../appwrite/configuration.js'
import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
    <div className=' w-full bg-gray-100 rounded-lg p-4'>

    <div className='w-full justify-center mb-auto'>
    <img src={appwriteService.filePreview(featuredImage)}/>
    </div>
    <h2 className='text-xl font-bold'>{title}</h2>
    </div>
    
    </Link>
  )
}

export default PostCard
