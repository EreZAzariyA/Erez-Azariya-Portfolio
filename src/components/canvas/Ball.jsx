import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imageUrl]);
  
  return (
    <Float speed={0.25} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[ 2 * Math.PI, 0, 6.25 ]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(Math.PI / 4) * 3}
        />
        <Ball imageUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;