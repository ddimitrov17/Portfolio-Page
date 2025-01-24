import { useState } from "react";

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="top-0 left-0 w-full flex justify-between items-center bg-aboutSectionColor border-b border-aboutBorder px-5 py-5">
            <div
                onClick={() => scrollToSection("#home")}
                className="text-neutral-400 font-semibold text-xl hover:text-white ml-12 cursor-pointer"
            >
                Dimitar Dimitrov
            </div>

            <nav className="hidden sm:flex gap-5 mr-8">
                <div
                    onClick={() => scrollToSection("#home")}
                    className="text-neutral-400 font-semibold text-xl hover:text-white cursor-pointer"
                >
                    Home
                </div>
                <div
                    onClick={() => scrollToSection("#about")}
                    className="text-neutral-400 font-semibold text-xl hover:text-white cursor-pointer"
                >
                    About
                </div>
                <div
                    onClick={() => scrollToSection("#projects")}
                    className="text-neutral-400 font-semibold text-xl hover:text-white cursor-pointer"
                >
                    Projects
                </div>
                <div
                    onClick={() => scrollToSection("#contact")}
                    className="text-neutral-400 font-semibold text-xl hover:text-white cursor-pointer"
                >
                    Contact
                </div>
            </nav>

            <div
                className="sm:hidden text-neutral-400 cursor-pointer"
                onClick={toggleMenu}
            >
                <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </div>

            {isMenuOpen && (
                <div className="absolute top-[60px] right-5 bg-aboutSectionColor border border-aboutBorder rounded-lg flex flex-col gap-5 px-5 py-3 shadow-lg z-50">
                    <div
                        onClick={() => scrollToSection("#home")}
                        className="text-neutral-400 font-semibold text-lg hover:text-white cursor-pointer"
                    >
                        Home
                    </div>
                    <div
                        onClick={() => scrollToSection("#about")}
                        className="text-neutral-400 font-semibold text-lg hover:text-white cursor-pointer"
                    >
                        About
                    </div>
                    <div
                        onClick={() => scrollToSection("#projects")}
                        className="text-neutral-400 font-semibold text-lg hover:text-white cursor-pointer"
                    >
                        Projects
                    </div>
                    <div
                        onClick={() => scrollToSection("#contact")}
                        className="text-neutral-400 font-semibold text-lg hover:text-white cursor-pointer"
                    >
                        Contact
                    </div>
                </div>
            )}
        </header>
    );
}
