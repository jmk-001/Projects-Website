import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { LANG_KEY, LANG_COLOR } from "../../data/Constants";
import { useSelection } from "../Context/SelectionContext";
import gsap from "gsap";
import * as THREE from "three";

const BgColor = () => {
  const { gl } = useThree();
  const { langSelected } = useSelection();

  useEffect(() => {
    const startColor = new THREE.Color();
    gl.getClearColor(startColor);

    console.log(LANG_COLOR[langSelected]);
    const endColor = new THREE.Color(LANG_COLOR[langSelected]);
    console.log(endColor);

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
  }, [gl, langSelected]);

  return null;
};

export default BgColor;