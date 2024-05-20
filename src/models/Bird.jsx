import React, { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    } else {
      console.error('Action "Take 001" not found');
    }
  }, [actions]);

  useFrame((state) => {
    if (!birdRef.current) return;

    const { clock, camera } = state;
    const elapsedTime = clock.getElapsedTime();

    // Slow down the sine wave effect for y rotation
    birdRef.current.rotation.y += Math.sin(elapsedTime * 0.5) * 0.1; // Adjusted factors to slow down

    // Slower position checks and rotation adjustments
    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    // Slowing down the incremental rotations
    const rotationSpeed = 0.005; // Reduced rotation speed
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.rotation.x += rotationSpeed;
      birdRef.current.rotation.z += rotationSpeed;
    } else {
      birdRef.current.rotation.x -= rotationSpeed;
      birdRef.current.rotation.z += rotationSpeed;
    }
  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
