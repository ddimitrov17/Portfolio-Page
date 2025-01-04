export default function NavigationBar() {
    return (
        <header className="top-0 left-0 w-full flex justify-between bg-aboutSectionColor border-b border-aboutBorder">
                <div className="flex justify-between items-center py-5 px-5">
                    <a href="/" className="text-neutral-400 font-semibold text-xl hover:text-white ml-12">
                        Dimitar Dimitrov
                    </a>
                </div>
                <div className="flex justify-between items-center py-5 px-5 gap-5 mr-8">
                    <a href="/" className="text-neutral-400 font-semibold text-xl hover:text-white">
                        Home
                    </a>
                    <a href="#about" className="text-neutral-400 font-semibold text-xl hover:text-white">
                        About
                    </a>
                    <a href="/projects" className="text-neutral-400 font-semibold text-xl hover:text-white">
                        Projects
                    </a>
                    <a href="/contact" className="text-neutral-400 font-semibold text-xl hover:text-white">
                        Contact
                    </a>
                </div>
        </header>
    )
}