import React from "react";
import { Canvas } from "@react-three/fiber";
import BgColor from "./BgColor";
import Camera from "./Camera";
import ModelGroup from "../3d/ModelGroup";
import Light from "../3d/Light";

const MainView: React.FC = () => {
  return (
    <div className="w-screen h-screen m-0 p-0 overflow-hidden">
      <Canvas>
        <Light />
        <BgColor />
        <Camera />
        <ModelGroup />
      </Canvas>
    </div>
  );
};

export default MainView;
