import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
// haut 60
// bas 0

export default function Model(props) {
  const { nodes, materials } = useGLTF("/eyes_01/scene.gltf");
  console.log(nodes)
  let [rot1,setRot1] = useState(81)
  let [rot2,setRot2] = useState(0)
  let [rot3,setRot3] = useState(6.8)
  useEffect(()=>{
    window.addEventListener('mousemove',(e)=>{
       console.log(e.clientX,e.clientY)
    //   if(window.innerWidth /2 < e.clientX ){
    //     setRot3((data)=> data < 7 ?  data += 0.01 : data = 7)
    //   }else{
    //     setRot3((data)=> data > 5.6 ? data -= 0.01 : data = 6)
    //   } 
    })

    return ()=> window.removeEventListener('mousemove',()=> {})
  })
  
  return (
    <group {...props} dispose={null}>
      <mesh
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
