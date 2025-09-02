import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const submitHandler = async (e) => {
    e.preventDefault();
  }
  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity:1
      })
      gsap.to(panelCloseRef.current, {
        opacity:1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity:0
      })
      gsap.to(panelCloseRef.current, {
        opacity:0
      })  
    }
  },[panelOpen])




  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://imgs.search.brave.com/-mMYzi4IoKkQJDvuZ0lR4OCPodpulKpPEhzrQFr4ark/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dW5kZXJjb25zaWRl/cmF0aW9uLmNvbS9i/cmFuZG5ldy9hcmNo/aXZlcy91YmVyXzIw/MThfbG9nby5wbmc"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image for temperory use */}
        <img
          className="h-full w-full object-cover"
          src="https://www.spaceotechnologies.com/wp-content/uploads/2021/04/ubermap_blur1.jpg.webp"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end absolute top-0 h-screen w-full ">
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={ panelCloseRef} onClick={() => {
            setPanelOpen(false);
          }} className='absolute opacaity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              className="bg-[#eeee] px-10 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              placeholder="Add a pickup location"
              ></input>
            <input
              className="bg-[#eeee] px-10 py-2 text-lg rounded-lg w-full mt-4"
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className='opacity-0 bg-white h-0 '>
              <LocationSearchPanel/>
        </div>
      </div>
    </div>
  );
}

export default Home
