import { PerspectiveCamera } from "@react-three/drei";

const Camera: React.FC = () => {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 5, 0]}
        fov={50}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </>
  );
};

export default Camera;
