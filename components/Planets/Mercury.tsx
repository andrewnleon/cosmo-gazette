import * as React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Mercury() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <PlanetMoon position={[0, 0, 0]} />
    </Canvas>
  );
}

function PlanetMoon(props: JSX.IntrinsicElements["mesh"]) {
  const moonMesh = React.useRef();

  useFrame(() => {
    //@ts-ignore
    moonMesh.current.rotation.x = 0.10;
    //@ts-ignore
    moonMesh.current.rotation.y += 0.0001;
  });

  const [
    moonMap,
    normalMap,
  ] = useLoader(TextureLoader, [
    `/assets/textures/mercury_texture.jpg`,
    `/assets/textures/8k_earth_normal_map.jpg`,
  ]);
  return (
    //@ts-ignore
    <>
      {/* Globe */}
      <mesh
        //@ts-ignore
        ref={moonMesh}
        scale={3}
        rotation-x={Math.PI * 2}
        rotation-y={Math.PI * 0.-39.3}
        {...props}
      >
        <sphereGeometry args={[1.005, 31]} />
         <meshStandardMaterial
          map={moonMap}
          normalMap={normalMap}
          roughnessMap={normalMap}
        />
      </mesh>
    </>
  );
}
