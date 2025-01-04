import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); 
        });
    };

    return (
        <section className="w-full px-12 mb-20">
            <h2 className="text-neutral-400 font-semibold text-3xl mb-5">Contact</h2>
            <div className="col-span-1 xl:row-span-3 w-[1200px] mx-auto">
                <div className="w-full h-full border border-aboutBorder bg-aboutSectionColor rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                    <div className="flex flex-col gap-7 justify-center items-center p-12">
                        <p className="text-[#afb0b6] text-xl font-generalsans font-semibold">
                            <span className="text-2xl font-semibold mb-2 text-white font-generalsans">👦</span> Dimitar Dimitrov
                        </p>
                        <p className="text-[#afb0b6] text-xl font-generalsans font-semibold flex items-center gap-3">
                            <span className="text-2xl font-semibold mb-2 text-white font-generalsans">✉️</span> dimitardimitrov0317@gmail.com
                            <button
                                onClick={() => copyToClipboard("dimitardimitrov0317@gmail.com")}
                                className="text-sm px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                            >
                                {copied ? "Copied!" : "Copy"}
                            </button>
                        </p>
                        <p className="text-[#afb0b6] text-xl font-generalsans font-semibold">
                            <span className="text-2xl font-semibold mb-2 text-white font-generalsans">📍</span> Sofia, Bulgaria
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <a href="https://www.linkedin.com/in/dimitar-dimitrov-9b0960299" target="_blank" rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className="w-[40px] h-[40px] cursor-pointer" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/ddimitrov17" target="_blank" rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="w-[40px] h-[40px] cursor-pointer" alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
