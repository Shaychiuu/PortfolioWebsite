import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import {useFrame, useThree} from '@react-three/fiber'
import pineyScene from '../models/3d/Piney.glb'
import {a} from '@react-spring/three'

const Piney = (props) => {
  const pineyRef = useRef();
  const { nodes, materials } = useGLTF(pineyScene);
  return (
    <a.group ref = {pineyRef} {...props}>
      <group
        position={[0.145, -1.865, -0.03]}
        rotation={[Math.PI / 2, 0.062, Math.PI]}
        scale={0.362}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[0, 244.09, 0]}
            rotation={[-0.675, 0, -1.602]}
            scale={100}
          >
            <mesh

              geometry={nodes.pinecone_pinecone_1.geometry}
              material={nodes.pinecone_pinecone_1.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pinecone_pinecone.geometry}
              material={nodes.pinecone_pinecone.material}
            />
          </group>
        </group>
      </group>
      <group
        position={[0.478, -3.676, -0.314]}
        rotation={[-1.567, 0.091, -1.757]}
        scale={0.022}
      >
        <group rotation={[-Math.PI, 0, 0]}>
          <group position={[0.23, -3.834, 3.522]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wood_stick_04_wood_stick_04.geometry}
              material={nodes.wood_stick_04_wood_stick_04.material}
              position={[0.531, 0, 2.321]}
              rotation={[-3.105, -0.201, 1.262]}
            />
          </group>
        </group>
      </group>
      <group
        position={[-0.106, -3.95, 0.194]}
        rotation={[Math.PI / 2, 0.128, 2.48]}
        scale={0.02}
      >
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.wood_stick_04_wood_stick_04_1.geometry}
            material={nodes.wood_stick_04_wood_stick_04_1.material}
            position={[0.23, -3.834, 3.522]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box.geometry}
        material={nodes.Box.material}
        position={[-0.264, -2.728, -0.587]}
        rotation={[0, -0.825, 0.157]}
        scale={2.269}
      />
    </a.group>
  );
}

useGLTF.preload("/Piney.glb");
export default Piney;
