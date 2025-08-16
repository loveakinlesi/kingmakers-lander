
export default function About() {
    return (
        <section id='about' className="min-h-[max(640px,_100vh)] flex justify-center overflow-hidden w-full relative">
            <div className="relative md:text-center lg:py-16 section grid items-center grid-rows-[auto_1fr] grid-cols-auto" style={{ gridTemplateAreas: "content media" }}>
                <div className="flex flex-col gap-6 mb-8 items-center">
                    <h2 className="text-3xl lg:text-[clamp(3rem,_2.55rem+0.82vw,_3.75rem)] font-bold tracking-[-0.0375rem] whitespace-pre-line font-fg uppercase leading-none text-left md:text-center">We invest where culture and lifestyle meets capital.</h2>
                    <span className="flex flex-col lg:w-3/5 items-center">
                        <span className="text-left md:text-center font-fg text-lg">
                            Kingmakers is a private equity and credit investment firm dedicated to unlocking value in music, photography, food, film, fashion, and other creative industries across Africa. The creative industries in Africa generate approximately $4.2 billion annually, with projections to reach $20 billion and create 20 million jobs in the coming years.
                        </span>
                    </span>

                </div>
                <div className="relative size-full">
             <picture>
                  <source srcSet="/about.png" />
                  <img src="/about.png" className=" size-full object-center object-cover" />
                </picture>
                </div>
            </div>
        </section>
    )
}
