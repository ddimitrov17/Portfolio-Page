import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import VirtualDesk from '../../components/VirtualDesk';
import CanvasLoader from '../../components/CanvasLoader';
import { Leva, useControls } from 'leva';
export default function Home() {
    // const c = useControls('VirtualDesk',{
    //     scale: {
    //         value: 0.04,
    //         min: 0,
    //         max: 1.5,
    //         step: 0.01
    //     },
    //     rotationX: {
    //         value:0,
    //         min: 0,
    //         max: 360,
    //         step:0.1
    //     },
    //     rotationY: {
    //         value:2.3,
    //         min: 0,
    //         max: 360,
    //         step:0.1
    //     },
    //     rotationZ: {
    //         value:0,
    //         min: 0,
    //         max: 360,
    //         step:0.1
    //     },
    //     positionX: {
    //         value:2,
    //         min: 0,
    //         max: 10
    //     },
    //     positionY: {
    //         value:0,
    //         min: 0,
    //         max: 10
    //     },
    //     positionZ: {
    //         value:0,
    //         min: 0,
    //         max: 10
    //     },
    //     cameraX: {
    //         value:0,
    //         min: 0,
    //         max: 100
    //     },
    //     cameraY: {
    //         value:9,
    //         min: 0,
    //         max: 100
    //     },
    //     cameraZ: {
    //         value:13,
    //         min: 0,
    //         max: 100
    //     }
    // })
    return (
        <section id="home" className="w-full h-[700px]">
            {/* <Leva hidden/> */}
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                    <VirtualDesk 
                    scale={0.04} 
                    position={[1, 0, 0]} 
                    rotation={[0, 2.3, 0]} />
                </Suspense>
                <PerspectiveCamera makeDefault position={[0, 9, 13]} />
                <OrbitControls enableZoom={true} />
                <ambientLight intensity={1.4} />
            </Canvas>
        </section>
    )
}