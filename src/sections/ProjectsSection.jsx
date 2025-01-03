import { useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { myProjects } from "../data/projects";

export default function ProjectSection() {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];
    const projectCount = myProjects.length;

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
        <section className="c-space my-20 p-12">
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


                        <a
                            className="flex items-center gap-2 cursor-pointer text-white"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
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
                                        }`}
                                ></button>
                            ))}
                        </div>

                        <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="border border-aboutBorder bg-black-200 rounded-lg h-96 md:h-full">

                </div>
            </div>
        </section>
    )
}