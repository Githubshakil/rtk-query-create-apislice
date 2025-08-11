import React from 'react'
import { useParams } from 'react-router'
import { useGetpostByIdQuery } from '../redux/services/posts/postApi'

const Blogs = () => {
    const {id} = useParams()
    console.log(id)
    const {data,isLoading,error} = useGetpostByIdQuery(id)
    console.log(data)
    if(error) return <div>Somthing Went Wrong!</div>
    if(isLoading) return <div>Loading...</div>
  return (
    <div className='p-5'>
        {/* <span>{data.id}</span> */}
        <h1 className='text-xl font-bold capitalize'>{data.id}. {data.title}</h1>
        <p className=' text-gray-900 text-sm font-semibold max-w-120 mt-4 border border-gray-400 shadow-lg'>{data.body}</p>
        <p className=' text-gray-900 text-sm font-semibold max-w-120 mt-4 border border-gray-400 shadow-lg'>Author: {data.userId}</p>
    </div>
  )
}

export default Blogs