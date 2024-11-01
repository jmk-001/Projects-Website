import { Canvas } from "@react-three/fiber";
import BgColor from "./BgColor";
import Camera from "./Camera";
import ModelGroup from "../3d/ModelGroup";
import Light from "../3d/Light";
import ProjectInfoBox from "../UI/ProjectInfoBox";

const MainView: React.FC = () => {
  return (
    <div className="w-screen h-screen m-0 p-0 overflow-hidden">
      <Canvas>
        <Light />
        <BgColor />
        <Camera />
        <ModelGroup />
      </Canvas>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <ProjectInfoBox />
      </div>
      <div className="absolute bottom-1 right-1 text-gray-500">
        <a
          href={"https://github.com/jmk-001/Projects-Website"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
        >
          https://github.com/jmk-001/Projects-Website
        </a>
      </div>
    </div>
  );
};

export default MainView;
