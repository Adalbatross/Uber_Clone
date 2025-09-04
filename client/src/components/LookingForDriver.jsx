import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      {/* HEllo brother can you give me some oats */}
      <h5
        onClick={() => {
          // setPanelOpen(false)
          props.setVehicleFound(false)
        }}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">Looking for a driver</h2>
      <div className='flex gap-2 justify-between items-center flex-col'>
        <img className='h-26' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
      <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm text-gray-600 -mt-1'>Dighi hills Pimprichinchiwad</p>
            </div>
        </div>
        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
            <i className=" text-lg ri-map-pin-fill"></i>
            <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm text-gray-600 -mt-1'>Dighi hills Pimprichinchiwad</p>
            </div>
        </div>
        <div className='flex items-center gap-5 p-3  border-gray-200'>
            <i className="ri-money-rupee-circle-fill"></i>
            <div>
                <h3 className='text-lg font-medium'>₹120.567</h3>
                <p className='text-sm text-gray-600 -mt-1'>Cash Cash mb-2</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LookingForDriver