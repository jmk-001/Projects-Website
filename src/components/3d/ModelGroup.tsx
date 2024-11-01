import React from "react";
import Model from "./Model";

const ModelGroup = () => {
  const MODEL_URL = {
    js: "/models/js.glb",
    ts: "/models/ts.glb",
    java: "/models/java.glb",
    dart: "/models/dart.glb",
    cs: "/models/cs.glb",
    python: "/models/python.glb",
  };

  const spacing = 1.2;
  const models = Object.entries(MODEL_URL);

  const totalWidth = (models.length - 1) * spacing;

  return (
    <group>
      {/** Load all models */}
      {models.map(([key, url], index) => {
        const xPosition = index * spacing - totalWidth / 2;

        return <Model key={key} url={url} position={[xPosition, 0, 0]} />;
      })}
    </group>
  );
};

export default ModelGroup;
