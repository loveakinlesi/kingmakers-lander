import { cn } from "~/lib/utils"


const philosophies = [
    {
        title: "Disciplined Underwriting",
        description: "We invest in businesses with solid foundations and growth potential in emerging markets. Through careful research and responsible approach to investing we identify lasting strengths that set them apart from competitors.",
        image: "https://images.unsplash.com/flagged/photo-1559733404-9b79677fc959?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Hands-On Partnership",
        description: "We do more than provide funding, we become hands-on partners. Our team work closely with each business, providing operational insight, strategic guidance, and access to networks needed for meaningful scale.",
        image: "https://images.unsplash.com/photo-1752159400890-d906038f1b35?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        title: "Local-Global Networks",
        description: "We leverage our strong connections across Africa, Europe, and diaspora communities to unlock new market and growth opportunities which facilitate a clear pathway to profitable exits.",
        image: "https://images.unsplash.com/photo-1669950200209-69d8292c032f?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]








export default function Philosophy() {
    return (
        <section id='philosophy' className="flex flex-col justify-center overflow-hidden w-full relative bg-foreground text-background py-20">
            <div className="section flex flex-col items-center gap-4 mb-10">
                <h2 className="text-3xl lg:text-[clamp(3rem,_2.55rem+0.82vw,_3.75rem)] font-bold tracking-[-0.0375rem] whitespace-pre-line  uppercase leading-none text-left md:text-center">Our Investment Philosophy</h2>
                <p className="self-center lg:w-3/5 md:text-center  text-lg opacity-80">Disciplined underwriting, hands-on value creation, and local-global networks that help good companies grow well and exit profitably.</p>

                {/* <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {
                        philosophies.map((item, index)=> (
                            <div className="bg-background text-foreground rounded-[20px] p-6 flex flex-col gap-4" key={index}>
                                <h6 className="text-xl font-bold ">{item.title}</h6>
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
                                <h6 className="text-xl md:text-3xl font-semibold">{item.title}</h6>
                                <p className="text-base opacity-85">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}
