import React from 'react'

const RidePopup = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setRidePopupPanel(false)
        }}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">New Ride Available!</h2>
      <div className='flex items-center justify-between p-3 bg-yellow-300 rounded-lg mt-4'>
        <div className='flex items-center gap-3 '>
            <img
            className='h-12 w-11 rounded-full object-cover' 
            src="https://imgs.search.brave.com/qZfKZJdwEghyFvKYaGNOKWalErBbeLu1usjKXAcLiNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NC9KQVlfMDU3Mi0y/LTItNThmNzk4YTAw/YzRkYV9fODgwLmpw/Zw" 
            alt="" />
            <h2 className='text-lg font-medium'>Shaurya Rawat</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM</h5>
      </div>
      
      <div className="flex gap-2 justify-between items-center flex-col">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Dighi hills Pimprichinchiwad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className=" text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Dighi hills Pimprichinchiwad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3  border-gray-200">
            <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹120.567</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash Cash mb-2</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.setConfirmRidePopupPanel(true);
          }}
          className="w-full mt-5 bg-green-500 font-semibold p-2 rounded-lg text-white"
        >
          Accept
        </button>
        <button
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
          className="w-full mt-1 bg-gray-300 font-semibold p-2 rounded-lg text-gray-700"
        >
          Ignore
        </button>
      </div>
    </div>
  );
}

export default RidePopup