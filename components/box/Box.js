'use client'

import * as THREE from 'three'

export default function Box() {
    const globalGeometry = new THREE.BoxGeometry()
const globalMaterial = new THREE.MeshBasicMaterial()
  return (
    <group dispose={null}>
      <mesh geometry={globalGeometry} material={globalMaterial} />
</group>
      )
  }