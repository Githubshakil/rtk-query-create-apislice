import React from 'react'
import { useGetAllPostsQuery } from '../redux/services/posts/postApi';
import { Link } from 'react-router';

const Home = () => {
    const { data, error, isLoading } = useGetAllPostsQuery();
  console.log(data);

  if (error) return <div>Something Went Wrong</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
    <div>
        <ul className=' text-gray-900 text-sm font-semibold max-w-120 mt-4 border border-gray-400 shadow-lg p-5 container max-h-screen mx-auto'>
          {data.slice(0,60).map((post, id) => (
            <li key={id} className='mb-2 '>
              <Link to={`/blogs/${post.id}`} className='flex justify-start capitalize'>
              <span className='text-xl font-bold text-gray-600 mr-2'>{post.id}.</span>
              <h1 className='text-lg font-bold text-blue-600 mr-2'>{post.title}</h1>
              </Link>
              
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home