import { useGLTF } from '@react-three/drei';

export default function Books(props) {
    const { nodes, materials } = useGLTF('/models/bookpile.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.Material}
                position={[0, 0.395, 0]}
                scale={[-0.099, 0.385, 0.385]}
            />
        </group>
    )
}

useGLTF.preload('/models/bookpile.glb')