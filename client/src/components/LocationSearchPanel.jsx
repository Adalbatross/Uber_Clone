import React from 'react'

const LocationSearchPanel = (props) => {

  // sample array for location
  const location = [
    "Army Intitute Of Technology, Alandi road,Near Dighi,Pune",
    "Army Public School, Alandi road,Near Dighi,Pune",
    "Border Road Org , Alandi road,Near Dighi,Pune",
    "21B,Reliance Powerhouse, Alandi road,Near Dighi,Pune",
  ];
  return (
    <div>
      {
        location.map((elem) => {
          return (
            <div onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            } } className="flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-ceter my-2 justify-start">
              <h2 className="bg-[#eeee] h-8 w-12 flex items-center justify-center rounded-full">
                <i className="ri-map-pin-fill "></i>
              </h2>
              <h4 className="font-medium">
                {elem}
              </h4>
            </div>
          );
          
        })
      }

    </div>
  );
}

export default LocationSearchPanel
