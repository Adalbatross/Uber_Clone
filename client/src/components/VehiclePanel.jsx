import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
          onClick={() => {
            // setPanelOpen(false) 
            props.setVehiclePanelOpen(false);
          }}
          className="p-1 text-center w-[93%] absolute top-0"
        >
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h2 className="text-2xl font-semibold mb-5">Choose a Vehicle</h2>
        <div onClick={()=>{
            props.setConfirmedRidePanel(true);
        }} className="flex border-2 border-gray-300 active:border-black bg-gray-100 mb-2 rounded-xl w-full items-center justify-between p-3">
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
        <div onClick={()=>{
            props.setConfirmedRidePanel(true)
        }} className="flex border-2 border-gray-300 active:border-black  bg-gray-100 mb-2 rounded-xl w-full items-center justify-between p-3">
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
        <div onClick={()=>{
            props.setConfirmedRidePanel(true)
        }} className="flex border-2 border-gray-300 active:border-black  bg-gray-100 mb-2 rounded-xl w-full items-center justify-between p-3">
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
  )
}

export default VehiclePanel
