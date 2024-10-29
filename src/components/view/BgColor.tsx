import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { COLOR } from "../../data/Constants";
import * as THREE from "three";

const BgColor = () => {
  const { gl } = useThree();

  useEffect(() => {
    const startColor = new THREE.Color(COLOR.BLACK);
    gl.setClearColor(startColor);
  }, [gl]);

  return null;
};

export default BgColor;
