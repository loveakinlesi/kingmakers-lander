import { Link } from "../ui/link"
import { Logo } from "../ui/logo"


const links = [
    {
        title: 'About Us',
        href: '#about',
    },
    {
        title: 'Our Philosophy',
        href: '#philosophy',
    },
    {
        title: 'Team',
        href: '#team',
    },
    {
        title: 'FAQs',
        href: '#faqs',
    },
    {
        title: 'Contact Us',
        href: '#contactus',
    },

]

export default function FooterSection() {
    return (
        <footer className="bg-foreground border-b py-12">
            <div className="section px-6">
                <div className="flex flex-wrap justify-between gap-12">
                    <div className="order-last flex items-start md:items-center gap-3 md:order-first">
                        <Link
                            to="#"
                            aria-label="go home">
                            <Logo size={16} className="text-white" />
                        </Link>
                        <span className="text-background block text-sm text-right md:text-center">&copy;{new Date().getFullYear()} Accelra Group, All rights reserved</span>
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