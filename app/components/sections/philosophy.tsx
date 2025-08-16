

const philosophies = [
    {
        title: "Disciplined Underwriting",
        description: "We focus on businesses with strong fundamentals and untapped markets, conducting thorough due diligence to identify sustainable competitive advantages."
    },
    {
        title: "Hands-On Partnership",
        description: "We don’t just invest money — we roll up our sleeves. Our team provides operational insight, strategic guidance, and the networks needed for meaningful scale."
    }, {
        title: "Local-Global Networks",
        description: "Leveraging deep connections across Africa, Europe, and diaspora communities to unlock opportunities and facilitate profitable exits."
    }
]








export default function Philosophy() {
    return (
        <section id='philosophy' className="flex justify-center overflow-hidden w-full relative bg-foreground text-background py-20">
            <div className="section flex flex-col items-center gap-4">
                <h2 className="text-3xl lg:text-[clamp(3rem,_2.55rem+0.82vw,_3.75rem)] font-bold tracking-[-0.0375rem] whitespace-pre-line font-fg uppercase leading-none text-left md:text-center">Our Investment Philosophy</h2>
                <p className="self-center lg:w-3/5 md:text-center font-fg text-lg opacity-80">Disciplined underwriting, hands-on value creation, and local-global networks that help good companies grow well and exit profitably.</p>

                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {
                        philosophies.map((item, index)=> (
                            <div className="bg-background text-foreground rounded-[20px] p-6 flex flex-col gap-4" key={index}>
                                <h6 className="text-xl font-bold font-fg">{item.title}</h6>
                                <p className="text-base opacity-85">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
