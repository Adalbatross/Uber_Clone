import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const ConfirmedRidePanelRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

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
  }, [vehiclePanelOpen])
  
  useGSAP(() => {
    if (confirmedRidePanel) {
      gsap.to(ConfirmedRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(ConfirmedRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  },[confirmedRidePanel])
  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  },[vehicleFound])
  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  },[waitingForDriver])




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
        className="fixed w-full z-10 bg-white translate-y-full bottom-0 px-3 py-10 pt-13"
      >
        <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/> 
      </div>
      <div
        ref={ConfirmedRidePanelRef}
        className="fixed w-full z-10 bg-white translate-y-full bottom-0 px-3 py-6 pt-13"
      >
       <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bg-white translate-y-full bottom-0 px-3 py-6 pt-13"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
      ref={waitingForDriverRef}
        className="fixed w-full z-10 bg-white  bottom-0 px-3 py-6 pt-13"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  );
}

export default Home
