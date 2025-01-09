export default function NavigationBar() {
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="top-0 left-0 w-full flex justify-between bg-aboutSectionColor border-b border-aboutBorder">
            <div className="flex justify-between items-center py-5 px-5">
                <div
                    onClick={() => scrollToSection("#home")}
                    className="text-neutral-400 font-semibold text-xl hover:text-white ml-12 cursor-pointer"
                >
                    Dimitar Dimitrov
                </div>
            </div>
            <div className="flex justify-between items-center py-5 px-5 gap-5 mr-8">
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
            </div>
        </header>
    );
}
