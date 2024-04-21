import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function SpaceStars() {
  return (
    <Canvas>
      <Stars
        radius={200}
        depth={50}
        count={250000}
        factor={4}
        saturation={0}
        fade={true}
        speed={0}
      />
    </Canvas>
  );
}
