import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";
import { AnimationMixer, AnimationClip, Group } from "three";

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

  const idleAnimationName = `${url.slice(8, -4)}_idle`;
  const clips = gltf.animations;

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
      ref={modelRef}
      object={gltf.scene}
      scale={0.5}
      position={position}
    />
  );
};

export default Model;
