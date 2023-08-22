import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
   return (
      <div className="loading sm:block lg:flex xl:justify-center items-center ">
         <BounceLoader
            color="#671bb8"
            size={0}
         />
      </div>
   );
};

export default Loading;