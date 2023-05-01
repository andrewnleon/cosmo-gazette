import * as React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Mars() {
  return (
    <Canvas>
      <ambientLight intensity={0.04} />
      <spotLight position={[-11, 0, 90]} color={0xffffff} angle={-180} />
      <PlanetMars position={[0, 0, 0]} />
    </Canvas>
  );
}

function PlanetMars(props: JSX.IntrinsicElements["mesh"]) {
  const marsMesh = React.useRef();

  useFrame(() => {
    //@ts-ignore
    marsMesh.current.rotation.x = 0.10;
    //@ts-ignore
    marsMesh.current.rotation.y += 0.0001;
  });

  const [
    marsMap,
  ] = useLoader(TextureLoader, [
    `/assets/textures/mars_texture.jpg`,
  ]);
  return (
    //@ts-ignore
    <>
      {/* Globe */}
      <mesh
        //@ts-ignore
        ref={marsMesh}
        scale={3}
        rotation-x={Math.PI * 2}
        rotation-y={Math.PI * 0.-39.3}
        {...props}
      >
        <sphereGeometry args={[1.005, 31]} />
         <meshStandardMaterial
          map={marsMap}
        />
      </mesh>
    </>
  );
}
