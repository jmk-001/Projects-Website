import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { LANG_COLOR } from "../../data/Constants";
import { useSelection } from "../Context/SelectionContext";
import gsap from "gsap";
import * as THREE from "three";

const BgColor = () => {
  const { gl, scene } = useThree();
  const { langSelected } = useSelection();

  useEffect(() => {
    const startColor = new THREE.Color();
    gl.getClearColor(startColor);

    const endColor = new THREE.Color(LANG_COLOR[langSelected]);

    if (langSelected !== 0) {
      scene.fog = new THREE.Fog(endColor, 2, 3); // Set fog color and range
    } else {
      scene.fog = null; // Remove fog if no language is selected
    }

    gsap.to(startColor, {
      r: endColor.r,
      g: endColor.g,
      b: endColor.b,
      duration: 0.3,
      onUpdate: () => {
        gl.setClearColor(startColor);
      },
      ease: "power2.inOut",
    });
  }, [gl, langSelected, scene]);

  return null;
};

export default BgColor;
