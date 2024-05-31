import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import { useState } from "react";
import Sky from "../models/Sky.jsx";
import Bird from "../models/Bird.jsx";
import Plane from "../models/Plane.jsx";
import HomeInfo from "../components/HomeInfo.jsx";
import ganna from "../assets/sakura.mp3";
import soundon from "../assets/icons/soundon.png";
import soundoff from "../assets/icons/soundoff.png";

const Home = () => {
  const audioRef = useRef(new Audio(ganna));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setisPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const [isRotating, setisRotating] = useState(false);
  const [CurrentStage, setCurrentStage] = useState(1);

  // for making responsive for every screen
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPositions = [0, -6, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.6, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPositions, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  // ================end here ===========================

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPositions;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPositions = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPositions = [0, -4, -4];
    }
    return [screenScale, screenPositions];
  };

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* for the pop up  */}
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {CurrentStage && <HomeInfo currentStage={CurrentStage} />}
      </div>

      {/* Canvas is used to create 3D model */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* this is used for see the loader when page is loaded */}
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setisRotating={setisRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setisPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
