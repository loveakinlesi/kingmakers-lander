import { cn } from "~/lib/utils"


const philosophies = [
    {
        title: "Disciplined Underwriting",
        description: "We focus on businesses with strong fundamentals and untapped markets, conducting thorough due diligence to identify sustainable competitive advantages.",
        image: "https://images.unsplash.com/flagged/photo-1559733404-9b79677fc959?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Hands-On Partnership",
        description: "We don’t just invest money — we roll up our sleeves. Our team provides operational insight, strategic guidance, and the networks needed for meaningful scale.",
        image: "https://images.unsplash.com/photo-1752159400890-d906038f1b35?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        title: "Local-Global Networks",
        description: "Leveraging deep connections across Africa, Europe, and diaspora communities to unlock opportunities and facilitate profitable exits.",
        image: "https://images.unsplash.com/photo-1669950200209-69d8292c032f?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]








export default function Philosophy() {
    return (
        <section id='philosophy' className="flex flex-col justify-center overflow-hidden w-full relative bg-foreground text-background py-20">
            <div className="section flex flex-col items-center gap-4 mb-10">
                <h2 className="text-3xl lg:text-[clamp(3rem,_2.55rem+0.82vw,_3.75rem)] font-bold tracking-[-0.0375rem] whitespace-pre-line font-fg uppercase leading-none text-left md:text-center">Our Investment Philosophy</h2>
                <p className="self-center lg:w-3/5 md:text-center font-fg text-lg opacity-80">Disciplined underwriting, hands-on value creation, and local-global networks that help good companies grow well and exit profitably.</p>

                {/* <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {
                        philosophies.map((item, index)=> (
                            <div className="bg-background text-foreground rounded-[20px] p-6 flex flex-col gap-4" key={index}>
                                <h6 className="text-xl font-bold font-fg">{item.title}</h6>
                                <p className="text-base opacity-85">{item.description}</p>
                            </div>
                        ))
                    }
                </div> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 section">
                {
                    philosophies.map((item, index) => (
                        <div key={index} className="rounded-[20px] overflow-hidden relative min-h-80 h-fit md:h-150 p-6 flex flex-col">
                          
                                <figure className="absolute size-full inset-0">
                                    <img src={item.image} alt="" className="size-full object-cover rounded-[20px]" /> 
                                </figure>
                                <div className="absolute size-full inset-0 bg-gradient-to-b from-transaprent to-black"></div>
  <div className="flex flex-col gap-4 relative mt-auto text-background">
                                <h6 className="text-2xl md:text-4xl font-bold font-fg uppercase">{item.title}</h6>
                                <p className="text-base opacity-85">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}
