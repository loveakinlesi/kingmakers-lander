import { Link } from "react-router";
import { Button } from "../ui/button";


export default function CallToAction() {
    return (
        <section className="py-20 bg-foreground">
            <div className="section rounded-3xl border px-6 py-12 md:py-20 bg-white/75 backdrop-blur-md">
                <div className="max-w-100 flex flex-col items-start">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl ">Ready to Build Your Legacy?</h2>
                    <p className="mt-4  opacity-80 max-w-xl mx-auto">Join the movement to crown the next generation of business kings and queens. Partner with us for meaningful exits and strategic scale by 2030.
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