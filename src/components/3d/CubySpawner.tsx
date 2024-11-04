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
          position: [-4.5, 1, 0.1],
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
