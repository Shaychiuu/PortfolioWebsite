
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import GroundScene from '../models/3d//tree_stump_in_a_german_forest.glb';


const Ground = (props) => {
  const GroundRef = useRef();
  const { nodes, materials } = useGLTF(GroundScene);
  
  return (
    <group ref = {GroundRef} {...props} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.Material}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/tree_stump_in_a_german_forest.glb");
export default Ground