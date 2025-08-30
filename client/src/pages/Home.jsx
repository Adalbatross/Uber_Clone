import React from 'react'
import { Link } from 'react-router-dom'
import UserLogin from './UserLogin'

const Home = () => {
  return (
    <div>
        <div className='h-screen bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1563256014-5d7586c22430?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-8 w-full flex justify-between flex-col'>
            <img className='w-16 ml-8' src="https://imgs.search.brave.com/nlxN-FsXYJYZj6t_voukxXHEh14tXaTPks2wnUQx4RY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9uZXctVWJl/ci1sb2dvLXdoaXRl/LXBuZy1tZWRpdW0t/c2l6ZS5wbmc" alt="" />
            <div className='bg-white pb-7 px-4 py-4'>
                <h2 className='text-3xl font-bold'>Get started with Uber</h2>
                <Link to='/user-login'  className=' cursor-pointer flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
