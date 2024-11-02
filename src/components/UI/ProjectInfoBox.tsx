import { useEffect, useState, useRef } from "react";
import { PROJECTS } from "../../data/Constants";
import { useSelection } from "../Context/SelectionContext";
import { LANG_COLOR } from "../../data/Constants";
import { gsap } from "gsap";

const ProjectInfoBox: React.FC = () => {
  const { langSelected } = useSelection();
  const [title, setTitle] = useState<string>("Title");
  const [img, setImg] = useState<string>("");
  const [description, setDescription] = useState<string>("Description");
  const [url, setURL] = useState<string>("https://www.github.com/jmk-001");

  const boxRef = useRef(null);

  useEffect(() => {
    if (langSelected && langSelected !== 0) {
      setTitle(PROJECTS[langSelected].title);
      setImg(PROJECTS[langSelected].img);
      setDescription(PROJECTS[langSelected].description);
      setURL(PROJECTS[langSelected].url);

      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    } else {
      gsap.to(boxRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [langSelected]);

  const isPointerEventsEnabled = langSelected !== 0;
  let winColor = "0x000000";
  if (langSelected) {
    winColor = LANG_COLOR[langSelected].toString();
  }

  return (
    <div
      ref={boxRef}
      className="absolute top-0 right-0 h-full w-3/5 text-white p-10"
      style={{
        opacity: 0,
        backgroundColor: `#${winColor}`,
        pointerEvents: isPointerEventsEnabled ? "auto" : "none",
        paddingTop: "20px",
      }}
    >
      <h1 className="text-2xl font-bold border-b pb-4 font-mono">{title}</h1>
      <div
        className="space-y-0 flex flex-col max-h-100 overflow-y-auto"
        style={{ paddingTop: "20px" }}
      >
        <img
          src={img}
          alt="Project Screenshot"
          className="max-h-80 h-auto w-auto object-contain rounded-md"
          style={{ paddingBottom: "20px" }}
        />
        <ul
          className="text-lg leading-relaxed list-disc list-inside font-mono"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          {description.split("\n").map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 underline hover:text-blue-400"
        >
          {url}
        </a>
      </div>
    </div>
  );
};

export default ProjectInfoBox;
