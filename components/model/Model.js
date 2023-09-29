'use client'
import * as THREE from 'three'
import React, {useEffect,useState, useRef} from 'react'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {Object3D} from 'three/src/core/Object3D'
import {AnimationClip} from 'three'
import { useFrame } from '@react-three/fiber'
import { Html } from 'next/document'

function Model() {

    const group = useRef()
    const actions = useRef()

    const [model,
        setModel] = useState()
    const [animation,
        setAnimation] = useState()
        const [scene,
            setScene] = useState()
    

    const [mixer] = useState(() => new THREE.AnimationMixer(null))

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load('/3d model/scene.gltf', async(gltf) => {
            const nodes = await gltf
                .parser
                .getDependencies('node')
            const animation = await gltf
                .parser
                .getDependencies('animation')
            setModel(nodes[0])
            setAnimation(animation)
            setScene(gltf.scene)
         console.log(gltf.scene ,group?.current)
        })


   
    }, [])


    console.log(model)
    // useEffect(()=>{
    // if( animation != undefined){
    //     console.log(animation[0],'ani')
    //     actions.current = mixer.clipAction(animation[0]).play()    
        
           
        
 
    //     return () => animation.forEach(clip => mixer.uncacheClip(clip))
    // }
    // },[animation])


    useFrame((_,delta) => mixer.update(delta))
    // useFrame(()=>{
    //     if(typeof group.current !=  'undefined'){
    //         return (group.current.rotation.y += 0.1)
    //     }
    // })

    return (
        <>
          {
            model && (
                <group ref={group} position={[0,-150,0]}>
                    <primitive ref={group} name={"Sketchfab_Scene"} object={scene} />                
                </group>
            )
          }

        </>
    )
}

export default Model