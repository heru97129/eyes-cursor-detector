
import { Canvas,useThree } from '@react-three/fiber'
import React from 'react'
import { useState } from 'react'
import Model2 from '../model/Model2'
import Light from '../light/Light'


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
       </Canvas>
    </>
  )
}

export default CanvasCad