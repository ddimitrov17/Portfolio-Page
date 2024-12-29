export default function NavigationBar() {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-between">
                <div className="flex justify-between items-center py-5 px-5">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors ml-12">
                        Dimitar Dimitrov
                    </a>
                </div>
                <div className="flex justify-between items-center py-5 px-5 gap-5 mr-12">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Home
                    </a>
                    <a href="/about" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        About
                    </a>
                    <a href="/projects" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Projects
                    </a>
                    <a href="/contact" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Contact
                    </a>
                </div>
        </header>
    )
}