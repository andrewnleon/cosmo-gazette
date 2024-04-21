import * as React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Venus() {
  return (
    <Canvas>
      <ambientLight intensity={0.01} />
      <spotLight position={[0, 50, 100]} color={0xd46400} angle={1} />
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
    `/assets/textures/venus_texture.jpg`,
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
