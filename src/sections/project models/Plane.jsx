import { useGLTF } from '@react-three/drei';
export default function Plane(props) {
  const { nodes, materials } = useGLTF('/Portfolio-Page/models/airplane.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[1.793, 0.047, -0.828]} rotation={[Math.PI / 2, 0, 0]} scale={0.688}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_0.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_2.geometry}
            material={materials['Material.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_3.geometry}
            material={materials['Material.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_4.geometry}
            material={materials['Material.013']}
          />
        </group>
        <group position={[1.833, 0.047, -0.758]} rotation={[Math.PI / 2, 0, 0]} scale={0.688}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_0.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials['Material.004']}
          />
        </group>
        <group position={[-8.966, -0.004, -0.502]} rotation={[3.104, -0.046, -0.03]} scale={0.21}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_0.geometry}
            material={materials['Material.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials['Material.009']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_0.geometry}
          material={materials['Material.002']}
          position={[2.033, 0.047, -0.918]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.688}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_0.geometry}
          material={materials['Material.001']}
          position={[1.793, 3.033, -0.845]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.688}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_0.geometry}
          material={materials['Material.010']}
          position={[1.503, 0.07, -0.806]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.659}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone_0.geometry}
          material={materials['Material.014']}
          position={[-9.848, 0.064, 1.648]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[1.299, 1.299, 1.536]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Portfolio-Page/models/airplane.glb')