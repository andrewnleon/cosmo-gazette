import * as React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Jupiter() {
  return (
    <Canvas>
      <ambientLight intensity={0.02} />
      <spotLight position={[-11, 0, 90]} color={0xffffff} angle={-180} />
      <PlanetEarth position={[0, 0, 0]} />
    </Canvas>
  );
}

function PlanetEarth(props: JSX.IntrinsicElements["mesh"]) {
  const earthMesh = React.useRef();

  useFrame(() => {
    //@ts-ignore
    earthMesh.current.rotation.x = 0.10;
    //@ts-ignore
    earthMesh.current.rotation.y += 0.0001;
  });

  const [
    earthMap,
  ] = useLoader(TextureLoader, [
    `/assets/textures/jupiter_texture.jpg`,
  ]);
  return (
    //@ts-ignore
    <>
      {/* Globe */}
      <mesh
        //@ts-ignore
        ref={earthMesh}
        scale={3}
        rotation-x={Math.PI * 2}
        rotation-y={Math.PI * 0.-39.3}
        {...props}
      >
        <sphereGeometry args={[1.005, 31]} />
         <meshStandardMaterial
          map={earthMap}
        />
      </mesh>
    </>
  );
}
