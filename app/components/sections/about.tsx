
// export default function About() {
//     return (
//         <section id='about' className="min-h-[max(640px,_100vh)] flex justify-center overflow-hidden w-full relative">
//             <div className="relative md:text-center lg:py-16 section grid items-center grid-rows-[auto_1fr] grid-cols-auto" style={{ gridTemplateAreas: "content media" }}>
//                 <div className="flex flex-col gap-6 mb-8 items-center">
//                     <h2 className="text-3xl lg:text-[clamp(3rem,_2.55rem+0.82vw,_3.75rem)] font-bold tracking-[-0.0375rem] whitespace-pre-line  uppercase leading-none text-left md:text-center">We invest where culture and lifestyle meets capital.</h2>
//                     <span className="flex flex-col lg:w-4/5 items-center">
//                         <span className="text-left md:text-center  text-lg">
//                             Kingmakers is a private equity and credit investment firm dedicated to unlocking value in music, photography, food, film, fashion, and other creative industries across Africa. The creative industries in Africa generate approximately $4.2 billion annually, with projections to reach $20 billion and create 20 million jobs in the coming years.
//                         </span>
//                     </span>

//                 </div>
//                 <div className="relative size-full flex justify-center">
//              <picture className="mx-auto">
//                   <source srcSet="/about.png" />
//                   <img src="/about.png" className="h-fit self-center  object-center object-cover max-h-150 " />
//                 </picture>
//                 </div>
//             </div>
//         </section>
//     )
// }


import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import { PartnershipModal } from "../ui/partnership-modal";

export default function StatsSection() {
    return (
        <section>
            <div className="bg-muted py-12">
                <div className="section px-6">
                    <h2 className="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl">
                        <span className="text-primary">Your opportunity to partner</span> with the future of creativity and lifestyles.
                    </h2>
                    <p className="mt-4 md:text-lg">This is an open invitation to partner with us on our journey of growth and impact. As we scale with purpose and strategy towards 2030, we invite you to collaborate with us as we unlock new potentials and create lasting value for creative businesses. </p>
                    <div className="mt-8 flex gap-3">
                        <PartnershipModal trigger={<Button
                            className="pr-2" variant="dark">
                               Become a Partner
                                <ChevronRight
                                    strokeWidth={2.5}
                                    className="size-3.5! opacity-50"
                                />
                            </Button>} />
                    </div>
                </div>
            </div>
        </section>
    )
}
