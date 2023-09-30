import React from 'react'

function Light() {
  return (
    <>
    {/* <axesHelper args={[5]} /> */}
    <ambientLight intensity={0.2} />
    <directionalLight position={[40,10,5]} intensity={0.2} />
    <directionalLight
    castShadow
    position={[10,550,100]}
    intensity={2.3}
    />
    <spotLight intensity={3} position={[20,50,50]}  castShadow />
    </>
  )
}

export default Light