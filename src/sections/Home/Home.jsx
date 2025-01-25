import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import VirtualDesk from "../../components/VirtualDesk";
import CanvasLoader from "../../components/CanvasLoader";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
    const [showDivs, setShowDivs] = useState(null);
    const [deskScale, setDeskScale] = useState(0.048);

    function onNoteClick(name) {
        if (name === "socialnetwork") {
            setShowDivs("socialnetwork");
            // console.log("Social Network");
        } else if (name === "tripapp") {
            setShowDivs("tripapp");
            // console.log("Trip App");
        } else if (name === "book-app") {
            // console.log("Book App");
            setShowDivs("bookapp");
        }
    };

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToProjects = () => {
        const projectsSection = document.querySelector("#projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width >= 1200) {
                setDeskScale(0.048);
            } else if (width >= 768) {
                setDeskScale(0.035);
            } else {
                setDeskScale(0.025);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section id="home" className="relative w-[90%] h-[600px] mx-auto p-16 max-1400:w-[100%]">
            <IoIosArrowDown className="absolute bottom-[-10px] left-[48.5%] h-[50px] w-[50px] text-white cursor-pointer hover:scale-110" onClick={() => scrollToSection("#about")}/>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50 w-[450px] p-1 h-[40px] border border-aboutBorder bg-aboutSectionColor rounded-lg text-white font-generalsans text-sm font-semibold flex justify-center items-center max-1400:w-[50%] text-center max-1400:text-[small] max-600:text-xs">
                TIP: Click on the sticky notes to learn more about my projects
            </div>

            <div className="absolute left-[100px] top-[95px] flex flex-col gap-10 max-600:flex-row max-600:gap-3 max-400:left-[80px]">
                <div
                    onClick={scrollToProjects}
                    className="bg-SocialNetworkBackground w-[120px] h-[110px] bg-cover z-50 rounded-xl border-2 border-white transition-transform duration-300 hover:scale-110 cursor-pointer max-600:w-[60px] max-600:h-[60px]"
                ></div>
                <div
                    onClick={scrollToProjects}
                    className="bg-TripAppBackground w-[120px] h-[120px] bg-cover z-50 rounded-xl border-2 border-white transition-transform duration-300 hover:scale-110 cursor-pointer max-600:w-[60px] max-600:h-[60px]"
                ></div>
                <div
                    onClick={scrollToProjects}
                    className="bg-BookAppBackground w-[120px] h-[100px] bg-cover z-50 rounded-xl border-2 border-white transition-transform duration-300 hover:scale-110 cursor-pointer max-600:w-[65px] max-600:h-[60px]"
                ></div>
            </div>

            <Canvas className="absolute top-0 left-0 w-full h-full z-10 border border-aboutBorder bg-[#262627] rounded-xl">
                <Suspense fallback={<CanvasLoader />}>
                    <VirtualDesk
                        scale={deskScale}
                        position={[1, 0, 0]}
                        rotation={[0, 2.3, 0]}
                        onNoteClick={onNoteClick}
                    />
                </Suspense>
                <PerspectiveCamera makeDefault position={[-1, 9, 13]} />
                <OrbitControls
                    enableZoom={true}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                />
                <ambientLight intensity={2} />
            </Canvas>
        </section>
    );
}
