import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";


import { useFrame } from "react-three-fiber";



export default function Model(props) {
    let eyes = useRef(null)
  const { nodes, materials } = useGLTF("/eyes_01/scene.gltf");
    let [rot1,setRot1] = useState(80)
  let [rot2,setRot2] = useState(0)
  let [rot3,setRot3] = useState(6.3)

function mouseEv(y,d){
  // // 79 81
  eyes.current.rotation.z = -1
  eyes.current.rotation.x = 80
}
  useEffect(()=>{
    console.log(materials)
  mouseEv()
  })
useFrame((e,delta)=>{
  let incre = delta/1000
  eyes.current.rotation.x = (rot1 - e.mouse.y)
  eyes.current.rotation.z = (e.mouse.x)
})
  return (
    <group {...props} dispose={null}>
      <mesh
      ref={eyes}
        castShadow
        receiveShadow
        geometry={nodes.Eyes_01_Eyes_01_0.geometry}
        material={nodes.Eyes_01_Eyes_01_0.material}
        position={[0,0, 0]}
        rotation={[rot1,rot2, rot3]}
      />
    </group>
  );
}

useGLTF.preload("/eyes_01/scene.gltf");
