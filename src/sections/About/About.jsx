export default function AboutSection() {
    return (
        <section id="about" className="w-full px-12 pt-12">
            <h2 className="text-neutral-400 font-semibold text-3xl mb-5">About me</h2>
            <div className="flex flex-col gap-5 h-full w-full mb-5">
                <div className="flex flex-row gap-5 max-600:flex-col">
                    <div className="col-span-1 xl:row-span-3 w-full">
                        <div className="w-full h-full border border-aboutBorder bg-aboutSectionColor rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                            <div>
                                <p className="text-xl font-semibold mb-2 text-white font-generalsans">Hi, I'm Dimitar Dimitrov</p>
                                <p className="text-[#afb0b6] text-base font-generalsans">
                                    I am a Full Stack Web Developer student with a passion for building web applications that solve problems or have some practical usage. I consider myself good at breaking down big problems into smaller ones which enables me to find effective solutions. I've developed several full stack web applications during my learning journey. These projects have helped me grow my skills in both frontend and backend development. I'm excited to keep learning, improving, and working on ideas that make a difference.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 xl:row-span-3 w-full">
                        <div className="w-full h-full border border-aboutBorder bg-aboutSectionColor rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                            <div>
                                <p className="text-xl font-semibold mb-2 text-white font-generalsans">My Passion for Coding</p>
                                <p className="text-[#afb0b6] text-base font-generalsans">
                                    I have always considered myself good at logical sciences, and I think coding is a natural fit for me. It combines solving logical problems with creativity, and I genuinely enjoy the process. The projects I’ve worked on show that I love coding—not just for the challenge but also for the opportunity to solve real-world problems and create useful services. As I’ve progressed in my coding journey, I’ve come to understand how much value you can create through code, whether it’s improving everyday life with useful services or products, or automating tasks to make things more efficient.                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3 w-full">
                    <div className="w-full h-full border border-aboutBorder bg-aboutSectionColor rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <div>
                            <p className="text-xl font-semibold mb-2 text-white font-generalsans">Tech Stack</p>
                            <p className="text-[#afb0b6] text-base font-generalsans">
                                These are the technologies I have specialized in and used in my projects.
                            </p>
                            <div className="flex flex-wrap gap-10 justify-center m-12">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-[80px] h-[80px]" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" className="w-[80px] h-[80px]" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-[80px] h-[80px]" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-[80px] h-[80px]" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-[80px] h-[80px]" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-[80px] h-[80px]" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" className="w-[80px] h-[80px]" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" className="w-[80px] h-[80px]" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" className="w-[80px] h-[80px]" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-[80px] h-[80px]" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}