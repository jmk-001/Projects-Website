import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";
import { AnimationMixer, AnimationClip, Group } from "three";
import { useSelection } from "../Context/SelectionContext";
import { LANG_KEY } from "../../data/Constants";

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
  const name = url.slice(8, -4);

  const idleAnimationName = `${name}_idle`;
  const clips = gltf.animations;

  const { setLangSelected } = useSelection();

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

  return (
    <primitive
      key={name}
      ref={modelRef}
      object={gltf.scene}
      scale={0.5}
      position={position}
      onClick={() => {
        console.log("set" + LANG_KEY[name]);
        setLangSelected(LANG_KEY[name]);
      }}
      onPointerOver={() => {
        modelRef.current?.scale.set(0.55, 0.55, 0.55);
      }}
      onPointerOut={() => {
        modelRef.current?.scale.set(0.5, 0.5, 0.5);
      }}
    />
  );
};

export default Model;
