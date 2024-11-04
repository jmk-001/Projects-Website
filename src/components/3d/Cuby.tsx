import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";
import { AnimationMixer, AnimationClip, Group } from "three";
import { useSelection } from "../Context/SelectionContext";
import * as THREE from "three";

const Cuby = ({
  position,
  onAnimateEnd,
}: {
  position: [number, number, number];
  onAnimateEnd: () => void;
}) => {
  const gltf = useLoader(
    GLTFLoader,
    `${process.env.PUBLIC_URL}/models/cuby.glb`
  );
  const mixer = useRef(new AnimationMixer(gltf.scene)).current;
  const modelRef = useRef<Group>(null);
  const name = "cuby";

  const rollAnimationName = "roll";
  const clips = gltf.animations;

  const { setCubySelected } = useSelection();
  const hasCompletedFirstLoop = useRef(false);

  // Animation handler
  useEffect(() => {
    const clip = AnimationClip.findByName(clips, rollAnimationName);

    if (clip) {
      const action = mixer.clipAction(clip);
      action.loop = THREE.LoopOnce;
      action.play();

      // cubySelected context to false when anim done
      const onAnimationFinished = (
        event: THREE.Event & { action: THREE.AnimationAction }
      ) => {
        if (event.action === action && !hasCompletedFirstLoop.current) {
          setCubySelected(false);
          hasCompletedFirstLoop.current = true;
        }
        if (onAnimateEnd) {
          onAnimateEnd();
        }
      };

      mixer.addEventListener("finished", onAnimationFinished);

      return () => {
        mixer.removeEventListener("finished", onAnimationFinished);
      };
    }
  }, [clips, rollAnimationName, mixer, setCubySelected, onAnimateEnd]);

  useFrame((_, delta) => {
    mixer.update(delta);
  });

  return (
    <primitive
      key={name}
      ref={modelRef}
      object={gltf.scene}
      scale={[1.5, 1.5, 1]}
      position={position}
      rotation={new THREE.Euler(-Math.PI / 2, 0, 0)}
    />
  );
};

export default Cuby;
