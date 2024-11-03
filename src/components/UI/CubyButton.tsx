import { useState } from "react";
import { useSelection } from "../Context/SelectionContext";

const CubyButton = () => {
  const [mouseHoevered, setMouseHovered] = useState(false);
  const { cubySelected, setCubySelected } = useSelection();

  return (
    <button
      className="relative w-10 h-10 bg-transparent focus:outline-none"
      onMouseEnter={() => setMouseHovered(true)}
      onMouseLeave={() => setMouseHovered(false)}
      onClick={() => (!cubySelected ? setCubySelected(true) : null)}
    >
      <img
        src={
          mouseHoevered
            ? `${process.env.PUBLIC_URL}/icons/cuby.png`
            : `${process.env.PUBLIC_URL}/icons/box.png`
        }
        alt="Cuby Button"
        className={`w-full h-full transform transition-transform duration-300 ${mouseHoevered ? "scale-125" : "scale-100"} ${mouseHoevered ? "opacity-100" : "opacity-50"}`}
      />
    </button>
  );
};

export default CubyButton;
