
const numbers = [
    {
        title: "Capital Deployed",
        value: "$125m+"
    },
    {
        title: "Projects Backed",
        value: "32"
    },
    {
        title: "Value Creation Target",
        value: "$500m"
    }, {
        title: "Countries",
        value: "12"
    }
]

export default function Numbers() {


    return (
        <section className="section flex flex-col my-10 gap-10 md:gap-15 lg:gap-20">
                {/* <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.0375rem] whitespace-pre-line font-fg uppercase leading-none text-left lg:text-center">Let's run the numbers</h2> */}


            <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 grid-flow-row list-none">
                {
                    numbers.map((number, index) => {
                        return (
                            <li key={index} className="flex flex-col gap-2 p-6 bg-[#f7f7f7] min-h-0 rounded-[20px]">
                                <h2 className="text-2xl font-fg whitespace-pre-line font-semibold font-fg">{number.value}</h2>
                                <p className="text-base opacity-65">{number.title}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </section>
    )
}
