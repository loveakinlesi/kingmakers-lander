
const numbers = [
    {
        title: "Invested",
        value: "$25K+"
    },
    {
        title: "Businesses",
        value: "3"
    },
    {
        title: "ROI",
        value: "30%+"
    }, {
        title: "Sectors",
        value: "3"
    }
]

export default function Numbers() {


    return (
        <section className=" flex flex-col mb-10 gap-10 md:gap-15 lg:gap-20">

            <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 grid-flow-row list-none section">
                {
                    numbers.map((number, index) => {
                        return (
                            <li key={index} className="flex flex-col gap-2 p-6 bg-[#f7f7f7] min-h-0 rounded-[20px]">
                                <h2 className="text-4xl  whitespace-pre-line font-bold ">{number.value}</h2>
                                <p className="text-base opacity-65">{number.title}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </section>
    )
}
