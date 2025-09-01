import { Linkedin, LinkedinIcon } from "lucide-react"
import { Link } from "../ui/link"

const members = [
    {
        name: 'Tosin Lawuyi',
        role: 'Partner',
        avatar: 'tl.jpeg',
        link: 'https://www.linkedin.com/in/tosin-lawuyi/',
    },
    {
        name: 'Love Akinlesi',
        role: 'Partner',
        avatar: 'love.jpeg',
        link: 'https://www.linkedin.com/in/loveakinlesi/',
    },
    {
        name: 'Ayoola Johnson',
        role: 'Partner',
        avatar: '/aj.jpeg',
        link: 'https://www.linkedin.com/in/ayoola-johnson/',
    },
]

export default function TeamSection() {
    return (
        <section className="bg-gray-50 py-20 dark:bg-transparent" id="team">
            <div className="section border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Team</span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-3/5">
                        <h2 className="text-3xl font-semibold sm:text-4xl">Our Dream Team</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden">
                                <img
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                    src={member.avatar}
                                    alt="team member"
                                    width="826"
                                    height="1239"
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs text-primary font-semibold">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block md:translate-y-6 text-sm md:opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link
                                        to={member.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                            className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block md:translate-y-8 text-sm tracking-wide md:opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">

                                         <svg className="size-5 hover:text-primary transition-all ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}