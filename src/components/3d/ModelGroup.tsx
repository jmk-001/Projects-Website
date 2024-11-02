import React from "react";
import Model from "./Model";

const ModelGroup = () => {
  const MODEL_URL = {
    js: `${process.env.PUBLIC_URL}/models/js.glb`,
    ts: `${process.env.PUBLIC_URL}/models/ts.glb`,
    java: `${process.env.PUBLIC_URL}/models/java.glb`,
    dart: `${process.env.PUBLIC_URL}/models/dart.glb`,
    cs: `${process.env.PUBLIC_URL}/models/cs.glb`,
    python: `${process.env.PUBLIC_URL}/models/python.glb`,
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
