export default function AboutSection() {
    return (
        <section className="w-full px-12">
            <h2 className="text-neutral-400 font-semibold text-3xl mb-5">About me</h2>
            <div className="flex flex-col gap-5 h-full w-full mb-5">
                <div className="flex flex-row gap-5">
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quidem eius magnam excepturi voluptas, debitis aspernatur dolorum reprehenderit ea? Ullam nemo voluptas doloremque iusto nulla!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3 w-full">
                    <div className="w-full h-full border border-aboutBorder bg-aboutSectionColor rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <div>
                            <p className="text-xl font-semibold mb-2 text-white font-generalsans">Tech Stack</p>
                            <p className="text-[#afb0b6] text-base font-generalsans">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem ea dignissimos repellat eveniet iure animi quasi suscipit possimus nam voluptas voluptatibus blanditiis corporis, illum facere incidunt est alias deserunt a ex? Doloremque qui natus voluptatum perferendis nihil quasi magnam quod dolorum fuga, autem exercitationem voluptatem itaque eaque placeat molestias reprehenderit doloribus animi fugit maiores quis libero adipisci eos. Mollitia animi vel quibusdam error blanditiis facere. Reiciendis at, eos est repudiandae nisi quas nihil perspiciatis similique omnis dicta, a ducimus non odio obcaecati impedit, quod reprehenderit? Dolores repellendus corporis ad nemo libero, cum itaque, quae impedit eius, suscipit adipisci. Consectetur voluptatum fuga culpa maiores iste aut atque officiis temporibus aperiam dolores! Veniam omnis est facere nam velit commodi impedit doloremque modi, maxime vero ullam rerum illo nostrum obcaecati quis autem sapiente ipsa asperiores, voluptatum cum? Delectus error mollitia atque nulla repudiandae, ipsa recusandae at consequuntur, nesciunt maxime cumque, tempora vero?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}