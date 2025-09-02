import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import { PartnershipForm } from "../ui/partnership-form";


export default function CallToAction() {
    return (
        <section className="py-20 bg-foreground">
            <div className="section rounded-3xl border px-6 py-12 md:py-20 bg-white/75 backdrop-blur-md">
                <div className="max-w-100 flex flex-col items-start">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl ">Ready to Build Your Legacy?</h2>
                    <p className="mt-4  opacity-80 max-w-xl mx-auto">Join the movement to crown the next generation of business kings and queens. Partner with us for meaningful exits and strategic scale by 2030.
</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Modal trigger={<Button
                            variant="dark"
                            size="lg">
                                <span>Start a Partnership</span>
                            </Button>}>
                <h2 className="text-2xl font-semibold mb-4">Partnership Inquiry</h2>
                <PartnershipForm />
              </Modal>

                    </div>
                </div>
            </div>
        </section>
    )
}