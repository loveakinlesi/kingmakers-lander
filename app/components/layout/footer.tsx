import { Link } from "../ui/link"


const links = [
    {
        title: 'About Us',
        href: '#about',
    },
    {
        title: 'Our Philosophy',
        href: '#',
    },
    {
        title: 'Contact Us',
        href: '#',
    },
]

export default function FooterSection() {
    return (
        <footer className="bg-foreground border-b py-12">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-between gap-12">
                    <div className="order-last flex items-center gap-3 md:order-first">
                        <Link
                            to="#"
                            aria-label="go home">
                            {/* <LogoIcon /> */}
                        </Link>
                        <span className="text-background block text-center text-sm">© {new Date().getFullYear()} Kingmakers, All rights reserved</span>
                    </div>

                    <div className="order-first flex flex-wrap gap-x-6 gap-y-4 md:order-last">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                to={link.href}
                                className="text-background hover:text-background/75 block duration-150">
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}