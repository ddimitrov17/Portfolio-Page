import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import VirtualDesk from '../../components/VirtualDesk';
import CanvasLoader from '../../components/CanvasLoader';
export default function Home() {
    return (
        <section id="home" className="w-full h-[700px]">
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                    <VirtualDesk scale={0.03} position={[0, 0, 0]} rotation={[0, 130, 0]} />
                </Suspense>
                <PerspectiveCamera makeDefault position={[0, 2, 10]} />
                <OrbitControls enableZoom={true} />
                <ambientLight intensity={0.9} />
            </Canvas>
        </section>
    )
}