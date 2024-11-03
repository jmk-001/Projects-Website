import { useState, useEffect } from "react";
import Cuby from "./Cuby";
import { useSelection } from "../Context/SelectionContext";

const CubySpawner = () => {
  const { cubySelected } = useSelection();
  const [cubies, setCubies] = useState<
    Array<{ id: number; position: [number, number, number] }>
  >([]);

  useEffect(() => {
    if (cubySelected) {
      setCubies((prevCubies) => [
        ...prevCubies,
        {
          id: prevCubies.length,
          position: [-3.35, 1, 1], // adjust position to avoid overlap
        },
      ]);
    }
  }, [cubySelected]);

  const removeCuby = (id: number) => {
    setCubies((prevCubies) => prevCubies.filter((cuby) => cuby.id !== id));
  };

  return (
    <>
      {cubies.map((cuby) => (
        <Cuby
          key={cuby.id}
          position={cuby.position}
          onAnimateEnd={() => removeCuby(cuby.id)}
        />
      ))}
    </>
  );
};

export default CubySpawner;
