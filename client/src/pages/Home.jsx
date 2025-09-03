import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
  }
  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding:24,
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
  }, [panelOpen])
  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  },[vehiclePanelOpen])




  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-20 absolute left-2 top-2"
        src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
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
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacaity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              className="bg-[#eeee] px-13 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              placeholder="Add a pickup location"
            ></input>
            <input
              className="bg-[#eeee] px-13 py-2 text-base rounded-lg w-full mt-4"
              onClick={() => {
                setPanelOpen(true);
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
        <div ref={panelRef} className="opacity-0 bg-white h-0 ">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            vehiclePanelOpen={vehiclePanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bg-white translate-y-full bottom-0 px-3 py-10 pt-14"
      >
        <h5
          onClick={() => {
            // setPanelOpen(false)
            setVehiclePanelOpen(false);
          }}
          className="p-1 text-center w-[93%] absolute top-0"
        >
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h2 className="text-2xl font-semibold mb-5">Choose a Vehicle</h2>
        <div className="flex border-2 border-gray-300 active:border-black bg-gray-100 mb-2 rounded-xl w-full items-center justify-between p-3">
          <img
            className="h-12 "
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="  w-1/2 ">
            <h4 className="text-lg font-medium">
              UberGo{" "}
              <span>
                <i className="ri-user-line">4</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affrodable compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹120.20</h2>
        </div>
        <div className="flex border-2 border-gray-300 active:border-black  bg-gray-100 mb-2 rounded-xl w-full items-center justify-between p-3">
          <img
            className="h-11"
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1152/height=768/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
            alt=""
          />
          <div className=" ml-2 w-1/2 ">
            <h4 className="font-medium text-lg">
              UberAuto{" "}
              <span>
                <i className="ri-user-line">3</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affrodable auto rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹98.20</h2>
        </div>
        <div className="flex border-2 border-gray-300 active:border-black  bg-gray-100 mb-2 rounded-xl w-full items-center justify-between p-3">
          <img
            className="h-11"
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1152/height=768/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hMjU1M2ExOC0yZjc3LTQ3MjItYTRiYS1mNzM2ZjRjYjQwNWUucG5n"
            alt=""
          />
          <div className=" ml-2 w-1/2 ">
            <h4 className="font-medium text-lg">
              Moto{" "}
              <span>
                <i className="ri-user-line">1</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affrodable moto rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹68.50</h2>
        </div>
      </div>
    </div>
  );
}

export default Home
