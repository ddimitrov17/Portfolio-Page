import { Suspense, useEffect, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { myProjects } from "../data/projects";
import CanvasLoader from "../components/CanvasLoader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import Plane from "./project models/Plane";
import { useControls } from 'leva';
import Books from "./project models/Books";
import SocialNetwork from "./project models/Social";
import { FaGithub } from "react-icons/fa";

export default function ProjectSection() {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];
    const projectCount = myProjects.length;
    // useEffect(() => {
    //     console.log(myProjects[selectedProjectIndex].title);
    // }, [selectedProjectIndex]);

    // const { scale, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls('Books Controls', {
    //     scale: {
    //         value: 28.1,
    //         min: 1,
    //         max: 30,
    //         step: 0.1,
    //     },
    //     positionX: {
    //         value: 2.3,
    //         min: -5,
    //         max: 5,
    //         step: 0.1,
    //     },
    //     positionY: {
    //         value: -24.1,
    //         min: -50,
    //         max: 5,
    //         step: 0.1,
    //     },
    //     positionZ: {
    //         value: -4.0,
    //         min: -15,
    //         max: 5,
    //         step: 0.1,
    //     },
    //     rotationX: { value: -0.60, min: -Math.PI, max: Math.PI, step: 0.01 },
    //     rotationY: { value: 0.01, min: -Math.PI, max: Math.PI, step: 0.01 },
    //     rotationZ: { value: 0.02, min: -Math.PI, max: Math.PI, step: 0.01 },
    // });

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedProjectIndex((prevIndex) =>
                prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            );
        }, 20000);

        return () => clearInterval(interval);
    }, [projectCount]);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
    }, [selectedProjectIndex]);

    return (
        <section id="projects" className="c-space my-20 p-12">
            <p className="text-neutral-400 font-semibold text-3xl mb-5">My Work</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl bg-aboutSectionColor border border-aboutBorder rounded-lg shadow-black-200">

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg">
                        <img className="w-16 h-14 shadow-sm rounded-[10%]" src={currentProject.logo} alt="logo" />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

                        <p className="animatedText text-neutral-400">{currentProject.desc}</p>
                        <p className="animatedText text-neutral-400">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="relative group w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center"
                                >
                                    <img src={tag.path} alt={tag.name} />
                                    <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 p-2 text-xs text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        {tag.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <a href={currentProject.source} target="_blank" className="flex items-center gap-2 cursor-pointer text-white">
                            <FaGithub className="text-[1.5em]"/>
                            <p>Source Code</p>
                        </a>
                        {currentProject.href != '' && (<a
                            className="flex items-center gap-2 cursor-pointer text-white"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>)}
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
                        </button>

                        <div className="flex gap-2">
                            {myProjects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedProjectIndex(index)}
                                    className={`w-3 h-3 rounded-full ${selectedProjectIndex === index ? 'bg-white' : 'bg-gray-500'
                                        }`}></button>
                            ))}
                        </div>

                        <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="border border-aboutBorder bg-aboutSectionColor rounded-lg h-96 md:h-full">
                    <Canvas className="w-[100%] h-[100%]">
                        <Suspense fallback={<CanvasLoader />}>
                            {myProjects[selectedProjectIndex].title == 'AI Trip Assistant' && <Plane
                                scale={0.5}
                                position={[1, 0.00, 0.00]}
                                rotation={[-0.13, 0.91, 0.00]}
                            />}
                            {myProjects[selectedProjectIndex].title == 'D-Book App' && <Books
                                scale={7.2}
                                position={[2.2, -2.4, 0.0]}
                                rotation={[-0.13, 0.44, 0.00]}
                            />}
                            {myProjects[selectedProjectIndex].title == 'D-Social-Network' && <SocialNetwork scale={28.1}
                                position={[
                                    2.3,
                                    -24.1,
                                    -4.0,
                                ]}
                                rotation={[
                                    -0.60,
                                    0.01,
                                    0.02,
                                ]} />}
                        </Suspense>
                        <PerspectiveCamera makeDefault position={[-1, 9, 13]} />
                        <OrbitControls
                            enableZoom={true}
                            minPolarAngle={Math.PI / 4}
                            maxPolarAngle={Math.PI / 2}
                        />
                        <ambientLight intensity={4} />
                    </Canvas>
                </div>
            </div>
        </section>
    );
}
