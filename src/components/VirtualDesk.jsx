import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useTexture } from '@react-three/drei';
import { useControls } from 'leva';

export default function VirtualDesk({ onNoteClick, ...props }) {
  const { nodes, materials } = useGLTF('/models/my_virtual_desk.glb')
  const welcomeTexture = useTexture('/assets/welcome.png');
  const socialNetworkTexture = useTexture('/assets/socialnetwork_green.png');
  const flightTexture = useTexture('/assets/flight_yellow.png');
  const monitorOff = useTexture('/assets/off_monitor.png')
  const bookAppLogo = useTexture('/assets/booklogo_pink.png');
  const blankPaper = useTexture('/assets/blankpaper.png');

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const { rotationX, rotationY, rotationZ } = useControls('Social Network Position', {
  //   rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  //   rotationY: { value: 80, min: -Math.PI, max: Math.PI, step: 0.01 },
  //   rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  // });
  return (
    <group {...props} dispose={null}>
      <group position={[0, 75.567, -29.303]}>
        <mesh geometry={nodes.Cube_Mat91_1.geometry} material={materials['Mat.9.1']} />
        <mesh geometry={nodes.Cube_Mat8_1.geometry} material={materials['Mat.8']} />
      </group>
      <group position={[-23.152, 78.928, -43.659]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Clavier_Clavier_0.geometry}
          material={materials.Clavier}
          position={[0, -0.65, 5.653]}
        />
        <mesh
          geometry={nodes['��cran_��cran_0'].geometry}
          material={materials.cran}
          position={[0, 0.65, -5.653]}
          rotation={[1.222, 0, 0]}
        >
          <meshStandardMaterial map={welcomeTexture}
            map-repeat={[1.5, 3]}
          />
        </mesh>
      </group>
      <mesh
        geometry={nodes.Crayon_1_Crayon_0.geometry}
        material={materials.Crayon}
        position={[-25.616, 78.673, -70.192]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.post_it__rose_1_Mat6_0.geometry}
        material={materials['Mat.6']}
        position={[-24.62, 78.378, -134.572]}
      />
      <mesh
        geometry={nodes.post_it__rose_Mat3_0.geometry}
        material={materials['Mat.3']}
        position={[-24.62, 78.378, -126.001]}
        rotation={[-0.17, -1.58, 0.00]}
        onPointerOver={() => (document.body.style.cursor = 'pointer')}
        onPointerOut={() => (document.body.style.cursor = 'default')}
        onClick={() => {
          onNoteClick('book-app')
          scrollToProjects();
        }}
      ><meshStandardMaterial map={bookAppLogo} map-repeat={[1, 1]} /></mesh>
      <mesh
        geometry={nodes.post_it_jaune_Mat2_0.geometry}
        material={materials['Mat.2']}
        position={[-24.62, 78.378, -117.773]}
        rotation={[-0.17, -1.58, 0.00]}
        onPointerOver={() => (document.body.style.cursor = 'pointer')}
        onPointerOut={() => (document.body.style.cursor = 'default')}
        onClick={() => {
          onNoteClick('tripapp')
          scrollToProjects();
        }}
      ><meshStandardMaterial map={flightTexture} map-repeat={[1, 1]} /></mesh>
      <mesh
        geometry={nodes.post_it_vert_Mat1_0.geometry}
        material={materials['Mat.1']}
        position={[-24.62, 78.378, -109.163]}
        rotation={[-0.17, -1.58, 0.00]}
        onPointerOver={() => (document.body.style.cursor = 'pointer')}
        onPointerOut={() => (document.body.style.cursor = 'default')}
        onClick={() => {
          onNoteClick('socialnetwork')
          scrollToProjects();
        }}
      ><meshStandardMaterial map={socialNetworkTexture} map-repeat={[1, 1]} /></mesh>
      <mesh
        geometry={nodes.Ecran_d_Ecran_d_0.geometry}
        material={materials.Ecran_d}
        position={[9.462, 77.607, -38.804]}
      ><meshStandardMaterial map={monitorOff} map-repeat={[1.2, 1.1]} /></mesh>
      <mesh
        geometry={nodes['tasse_��_th��_1_tasse_��_th��_0'].geometry}
        material={materials.tasse__th}
        position={[-12.602, 77.698, 0]}
      />
      <mesh
        geometry={nodes.Feuille_vierge_Mat_0.geometry}
        material={materials.material}
        position={[-24.62, 78.378, -85.148]}
        rotation={[0, -Math.PI / 2, 0]}><meshStandardMaterial map={blankPaper} map-repeat={[1.2, 1.1]} /></mesh>
      <mesh
        geometry={nodes.Tour_PC_1_Tour_PC_0.geometry}
        material={materials.Tour_PC}
        position={[-3.932, 77.381, 44.517]}
      />
      <mesh
        geometry={nodes.Fauteuil_de_bureau_1_Fauteuil_de_bureau_0.geometry}
        material={materials.Fauteuil_de_bureau}
        position={[-75.607, 2.379, -42.564]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      {/* <mesh
        geometry={nodes.classeur_rouge_Mat5_0.geometry}
        material={materials['Mat.5']}
        position={[-7.781, 77.698, 19.175]}
      /> */}
      <mesh
        geometry={nodes.claseur_bleu_Mat4_0.geometry}
        material={materials['Mat.4']}
        position={[-7.781, 77.698, 26.567]}
      />
    </group>
  )
}

useGLTF.preload('/models/my_virtual_desk.glb')
