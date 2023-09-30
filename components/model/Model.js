import React,{useState,useRef} from "react"
import { useFrame } from "react-three-fiber";


export default function Model(props) {
    const meshRef = useRef(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) =>{
    // console.log(meshRef)
    

    })
    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <sphereGeometry args={[1, 40, 40]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }