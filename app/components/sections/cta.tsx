import { Link } from "react-router";
import { Button } from "../ui/button";


export default function CallToAction() {
    return (
        <section className="py-16 bg-[url(https://images.unsplash.com/photo-1663076125875-b8454612ed9b?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D))]">
            <div className="section rounded-3xl border px-6 py-12 md:py-20 lg:py-32 bg-white/75 backdrop-blur-md">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl font-fg">Ready to Build Your Legacy?</h2>
                    <p className="mt-4 font-fg opacity-80 max-w-xl mx-auto">Join the movement to crown the next generation of business kings and queens. Partner with us for meaningful exits and strategic scale by 2030.
</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            variant="dark"
                            size="lg">
                            <Link to="/">
                                <span>Start a Partnership</span>
                            </Link>
                        </Button>

                    </div>
                </div>
            </div>
        </section>
    )
}