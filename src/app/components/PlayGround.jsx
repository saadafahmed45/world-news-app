import React from 'react';

const PlayGround = () => {
   return (
      <div className="h-screen flex justify-center items-center">
         <div className=" relative w-[3px] h-[300px] bg-gray-400"></div>
         <div className="w-5 h-5  absolute bottom-[70px] bg-blue-600 rounded-full"></div>
      </div>
   );
};

export default PlayGround;