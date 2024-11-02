import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";
import { AnimationMixer, AnimationClip, Group } from "three";
import { useSelection } from "../Context/SelectionContext";
import { LANG_KEY } from "../../data/Constants";
import * as THREE from "three";
import gsap from "gsap";

const Model = ({
  url,
  position,
}: {
  url: string;
  position: [number, number, number];
}) => {
  const gltf = useLoader(GLTFLoader, url);
  const mixer = useRef(new AnimationMixer(gltf.scene)).current;
  const modelRef = useRef<Group>(null);
  const name = url.slice(url.lastIndexOf("/") + 1, -4);

  const defaultPos = new THREE.Vector3(position[0], 0, 0);
  const idleAnimationName = `${name}_idle`;
  const clips = gltf.animations;

  const { langSelected, setLangSelected } = useSelection();

  // Animation handler
  useEffect(() => {
    const clip = AnimationClip.findByName(clips, idleAnimationName);

    if (clip) {
      const action = mixer.clipAction(clip);

      const randomStartTime = Math.random() * clip.duration;
      action.time = randomStartTime;
      action.play();
    }
  }, [clips, idleAnimationName, mixer]);

  useFrame((_, delta) => {
    mixer.update(delta);
  });

  // Transition Scale
  const gsapScale = (targetScale: THREE.Vector3, duration = 0.1) => {
    if (modelRef.current) {
      gsap.to(modelRef.current.scale, {
        x: targetScale.x,
        y: targetScale.y,
        z: targetScale.z,
        duration: duration,
        ease: "power2.inOut",
      });
    }
  };

  // Transition Position
  const gsapPosition = (targetPos: THREE.Vector3, duration = 0.1) => {
    if (modelRef.current) {
      gsap.to(modelRef.current.position, {
        x: targetPos.x,
        y: targetPos.y,
        z: targetPos.z,
        duration: duration,
        ease: "power2.inOut",
      });
    }
  };

  // Transition Rotation
  const gsapRotation = (targetRot: THREE.Euler, duration = 0.1) => {
    if (modelRef.current) {
      gsap.to(modelRef.current.rotation, {
        x: targetRot.x,
        y: targetRot.y,
        z: targetRot.z,
        duration: duration,
        ease: "power2.inOut",
      });
    }
  };

  // Language Logo onClick Handler
  const onClickHandler = () => {
    if (langSelected !== LANG_KEY[name]) {
      if (langSelected !== 0) {
        return null;
      }
      setLangSelected(LANG_KEY[name]);
      gsapPosition(new THREE.Vector3(-1.5, 1, 0), 0.5);
      gsapRotation(new THREE.Euler(0, 0, -0.5), 0.5);
    } else {
      setLangSelected(LANG_KEY["none"]);
      gsapPosition(defaultPos, 0.5);
      gsapRotation(new THREE.Euler(0, 0, 0), 0.5);
    }
  };

  return (
    <primitive
      key={name}
      ref={modelRef}
      object={gltf.scene}
      scale={0.5}
      position={position}
      onClick={() => onClickHandler()}
      onPointerOver={() => {
        if (langSelected === 0 || langSelected === LANG_KEY[name])
          gsapScale(new THREE.Vector3(0.55, 0.55, 0.55));
      }}
      onPointerOut={() => {
        gsapScale(new THREE.Vector3(0.5, 0.5, 0.5));
      }}
    />
  );
};

export default Model;
