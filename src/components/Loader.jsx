import React from "react";
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    // this is used for rap any Element to render normal to 3D Element
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;

