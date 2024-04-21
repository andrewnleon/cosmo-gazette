import * as React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Earth() {
  return (
    <Canvas>
      <ambientLight intensity={0.02} />
      <spotLight position={[6, 7, 9]} angle={0.30} />
      <PlanetEarth position={[0, 0, 0]} />
    </Canvas>
  );
}

function PlanetEarth(props: JSX.IntrinsicElements["mesh"]) {
  const earthMesh = React.useRef();
  const cloudMesh = React.useRef();

  useFrame(() => {
    //@ts-ignore
    earthMesh.current.rotation.x = 0.10;
    //@ts-ignore
    earthMesh.current.rotation.y += 0.0001;
    //@ts-ignore
    cloudMesh.current.rotation.y += 0.0001;
  });

  const [
    earthMap,
    cloudMapAlpha,
    normalMap,
    invertMap,
  ] = useLoader(TextureLoader, [
    `/assets/textures/earth_day_texture.jpg`,
    `/assets/textures/earth_clouds_texture.png`,
    `/assets/textures/8k_earth_normal_map.jpg`,
    `/assets/textures/earth_specular_texture.jpg`,
  ]);
  return (
    //@ts-ignore
    <>
      {/* Clouds */}
      <mesh
        //@ts-ignore
        ref={cloudMesh}
        scale={3}
        rotation-x={Math.PI * 0.0}
        rotation-y={Math.PI * 0.25}
        {...props}
      >
        <sphereGeometry args={[1.010, 100]} />
         <meshStandardMaterial
          map={cloudMapAlpha}
          transparent
        />
      </mesh> 

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
          normalMap={normalMap}
          roughnessMap={invertMap}
        />
      </mesh>
    </>
  );
}
