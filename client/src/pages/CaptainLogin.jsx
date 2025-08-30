import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CaptainLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})
  const navigate = useNavigate()  
  const submitHandler = (e)=>{
    e.preventDefault();
    setCaptainData({
        email:email,
        password:password
    })
    console.log(captainData);    
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
          className='w-20 mb-8'
          src='https://www.svgrepo.com/show/505031/uber-driver.svg'
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
            Join our fleet!{" "}
            <Link to='/captain-signup' className='text-blue-600'>
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>

      <div className="mt-auto">
        <Link to='/user-login'className='flex items-center justify-center bt-5 bg-red-400 text-white font-semibold rounded px-4 py-2 w-full text-lg'>
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
