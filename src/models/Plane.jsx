import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    console.log('Available actions:', actions); // Log available actions for debugging

    if (isRotating) {
      if (actions['Take 001']) {
        actions['Take 001'].play();
      } else {
        console.error('Action "Take 001" not found');
      }
    } else {
      if (actions['Take 001']) {
        actions['Take 001'].stop();
      } else {
        console.error('Action "Take 001" not found');
      }
    }
  }, [actions, isRotating]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
