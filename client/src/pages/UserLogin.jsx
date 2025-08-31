import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [userData, setUserData] = useState({})
  const {user, setUser} = useContext(UserDataContext)
  const navigate = useNavigate()
  const submitHandler = async (e)=>{
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`
      , userData);
    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }
    console.log(user);    
    setEmail('');
    setPassword('');
    
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img
          onClick={()=>{
            navigate('/')
          }}
          className='w-16 mb-8'
          src='https://imgs.search.brave.com/-mMYzi4IoKkQJDvuZ0lR4OCPodpulKpPEhzrQFr4ark/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dW5kZXJjb25zaWRl/cmF0aW9uLmNvbS9i/cmFuZG5ldy9hcmNo/aXZlcy91YmVyXzIw/MThfbG9nby5wbmc'
          alt="logo"
        />

        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className='bg-[#eeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <div className='relative mb-7'>
            <input
              required
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              className='bg-[#eeee] rounded px-4 py-2 w-full text-lg placeholder:text-base'
              type={showPassword ? "text" : "password"}
              placeholder='password'
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-1/2 -translate-y-1/2'
            >
              <img
                src={
                  showPassword
                    ? "https://imgs.search.brave.com/2C0J84kelOlKj_rfB6TRjgQ1e2MgzyYtJlDQlzKrdks/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nL28vbWlz/Y2VsbGFuZW91cy9j/b21wdXRlci1yb29t/LWludGVncmF0aW9u/L3Nob3ctcGFzc3dv/cmQtMy5wbmc"
                    : "https://imgs.search.brave.com/DqElA557etDRsbZn_3y0Lyea4S3fnPjC2VjPCUy7o30/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nL28vbWlz/Y2VsbGFuZW91cy9j/b21wdXRlci1yb29t/LWludGVncmF0aW9u/L2hpZGUtcGFzc3dv/cmQucG5n"
                }
                alt="toggle password"
                className="w-5 h-5 cursor-pointer"
              />
            </button>
          </div>

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>
            Login
          </button>

          <p className='text-center'>
            New here?{" "}
            <Link to='/user-signup' className='text-blue-600'>
              Create new Account
            </Link>
          </p>
        </form>
      </div>

      <div className="mt-auto">
        <Link to='/captain-login'className='flex items-center justify-center bt-5 bg-[#f2e70a] text-white font-semibold rounded px-4 py-2 w-full text-lg'>
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
