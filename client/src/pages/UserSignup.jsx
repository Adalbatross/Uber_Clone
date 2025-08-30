import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const UserSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()
  const submitHandler = (e)=>{
    e.preventDefault();
    setUserData({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setFirstname('');  
    setLastname('');  
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
          className='w-16 mb-8.5'
          src='https://imgs.search.brave.com/-mMYzi4IoKkQJDvuZ0lR4OCPodpulKpPEhzrQFr4ark/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dW5kZXJjb25zaWRl/cmF0aW9uLmNvbS9i/cmFuZG5ldy9hcmNo/aXZlcy91YmVyXzIw/MThfbG9nby5wbmc'
          alt="logo"
        />

        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
        
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-3.5 mb-6'>
          <input
            required
            value={firstname}
            onChange={(e)=>{
                setFirstname(e.target.value)
            }}
            className='bg-[#eeee] w-1/2  rounded px-4 py-2  text-base placeholder:text-sm'
            type="text"
            placeholder='First name'
          />
          <input
            required
            value={lastname}
            onChange={(e)=>{
                setLastname(e.target.value)
            }}
            className='bg-[#eeee]  rounded px-4 py-2 w-1/2 text-base placeholder:text-sm'
            type="text"
            placeholder='Last name'
          />

          </div>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className='bg-[#eeee] mb-6 rounded px-4 py-2 w-full text-base placeholder:text-sm'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Create Password</h3>
          <div className='relative mb-6'>
            <input
              required
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              className='bg-[#eeee] rounded px-4 py-2 w-full text-base placeholder:text-sm'
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
            Register
          </button>

          <p className='text-center'>
            Already have a account?{" "}
            <Link to='/user-login' className='text-blue-600'>
              Login Here
            </Link>
          </p>
        </form>
      </div>

      <div className="mt-auto">
        <p className='text-[10px] leading-tight'>
            By creating an account, you agree to our Terms of Service and Privacy Policy. You consent to the collection, storage, and use of your information as described in our policies. Please ensure that all information provided is accurate and up-to-date.
        </p>
      </div>
    </div>
  )
}

export default UserSignup
