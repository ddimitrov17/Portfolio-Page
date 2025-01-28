import { useGLTF } from '@react-three/drei';

export default function SocialNetwork(props) {
    const { nodes, materials } = useGLTF('/Portfolio-Page/models/social.glb')
    return (
        <group {...props} dispose={null}>
            {/* <group position={[0.004, 0.716, 0.154]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials['Material.009']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.lips}
                />
            </group> */}
            {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials['brows.001']}
                position={[-0.04, 0.742, 0.258]}
                rotation={[1.313, -0.015, 0.391]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_9.geometry}
                material={materials['brows.001']}
                position={[0.053, 0.748, 0.251]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11.geometry}
                material={materials['brows.001']}
                position={[0.003, 0.684, 0.248]}
                rotation={[0.109, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_13.geometry}
                material={materials['Material.014']}
                position={[-0.023, 0.635, 0.241]}
                rotation={[1.592, -0.236, 0.09]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_15.geometry}
                material={materials['Material.015']}
                position={[0.042, 0.754, 0.272]}
                rotation={[-0.334, 0.234, 0.113]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_17.geometry}
                material={materials['Material.015']}
                position={[-0.044, 0.737, 0.271]}
                rotation={[-0.128, -0.313, -0.081]}
            /> */}
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_19.geometry}
                material={materials.Material}
                position={[-0.001, 0.721, 0.111]}
            />
        </group>
    )
}


useGLTF.preload('/Portfolio-Page/models/social.glb')