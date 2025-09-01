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

             <div className="section border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-foreground px-6">Philosophy</span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-3/5">
                        <h2 className="text-3xl font-semibold sm:text-4xl">Our Investment Philosophy</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>Disciplined underwriting, hands-on value creation, and local-global networks that help good companies grow well and exit profitably.</p>
                    </div>
                </div>
                </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 section">
                {
                    philosophies.map((item, index) => (
                        <div key={index} className="rounded-[20px] overflow-hidden relative min-h-80 h-fit md:h-150 p-4 md:p-6 flex flex-col group">
                          
                                <figure className="absolute size-full inset-0">
                                    <img src={item.image} alt="" className="size-full object-cover rounded-[20px] grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" /> 
                                </figure>
                                <div className="absolute size-full inset-0 bg-gradient-to-b from-transaprent to-black"></div>
  <div className="flex flex-col gap-4 relative mt-auto text-background">
                                <h6 className="text-xl md:text-3xl font-semibold">{item.title}</h6>
                                <p className="text-sm md:text-base opacity-85">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}
