import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import fernScene from '../models/3d/fern_grass_01.glb'

const Fern = (props) => {
const fernRef = useRef();
  const { nodes, materials } = useGLTF(fernScene);
  return (
    <group ref = {fernRef} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/fern_grass_01.glb");
export default Fern