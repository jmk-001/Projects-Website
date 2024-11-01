import React from "react";

const Light: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[0, 3, 0]}
        intensity={1}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
    </>
  );
};

export default Light;
