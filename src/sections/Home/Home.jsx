import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import VirtualDesk from "../../components/VirtualDesk";
import CanvasLoader from "../../components/CanvasLoader";

export default function Home() {
    const [showDivs, setShowDivs] = useState(true);

    const toggleDivsVisibility = () => {
        setShowDivs((prev) => !prev);
    };

    const scrollToProjects = () => {
        const projectsSection = document.querySelector("#projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative w-[1200px] h-[600px] mx-auto p-16 max-1400:w-[100%]" >
            {/* TIP Button above the Canvas */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50 w-[450px] p-1 h-[40px] border border-aboutBorder bg-aboutSectionColor rounded-lg text-white font-generalsans text-sm font-semibold flex justify-center items-center">
                TIP: Click on the Laptop in order to hide/unhide the project logos.
            </div>

            {showDivs && (
                <div className="absolute left-[100px] top-[95px] flex flex-col gap-10">
                    <div
                        onClick={scrollToProjects}
                        className="bg-SocialNetworkBackground w-[120px] h-[110px] bg-cover z-50 rounded-xl border-4 border-aboutBorder transition-transform duration-300 hover:scale-110 cursor-pointer"
                    ></div>
                    <div
                        onClick={scrollToProjects}
                        className="bg-TripAppBackground w-[120px] h-[120px] bg-cover z-50 rounded-xl border-4 border-aboutBorder transition-transform duration-300 hover:scale-110 cursor-pointer"
                    ></div>
                    <div
                        onClick={scrollToProjects}
                        className="bg-BookAppBackground w-[120px] h-[100px] bg-cover z-50 rounded-xl border-4 border-aboutBorder transition-transform duration-300 hover:scale-110 cursor-pointer"
                    ></div>
                </div>
            )}

            <Canvas className="absolute top-0 left-0 w-full h-full z-10 border border-aboutBorder bg-[#262627] rounded-xl">
                <Suspense fallback={<CanvasLoader />}>
                    <VirtualDesk
                        scale={0.048}
                        position={[1, 0, 0]}
                        rotation={[0, 2.3, 0]}
                        onLaptopClick={toggleDivsVisibility}
                    />
                </Suspense>
                <PerspectiveCamera makeDefault position={[-1, 9, 13]} />
                <OrbitControls
                    enableZoom={true}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                />
                <ambientLight intensity={1.5} />
            </Canvas>
        </section>
    );
}
