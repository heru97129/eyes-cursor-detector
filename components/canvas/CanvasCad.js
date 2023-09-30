
import { Canvas,useThree } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import { useState } from 'react'
import Model2 from '../model/Model2'
import Light from '../light/Light'
import { OrbitControls } from '@react-three/drei'



function CanvasCad() {
function cam(){
 return useThree(({ camera }) => {
    camera.rotation.set(THREE.MathUtils.degToRad(30), 0, 0);
  });
} 

return (
    <>

       <Canvas  camera={cam} >
        
        <Light />
       <Model2 />
       <OrbitControls />
       </Canvas>
    </>
  )
}

export default CanvasCad