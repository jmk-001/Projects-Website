import { PerspectiveCamera } from "@react-three/drei";

const Camera: React.FC = () => {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 3, 0]}
        fov={75}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </>
  );
};

export default Camera;
