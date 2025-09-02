import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import { PartnershipForm } from "../ui/partnership-form";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (imgRef.current && !imgRef.current.complete) {
        imgRef.current.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
      }

      // Animate mirrored image scaling
      gsap.fromTo(
        imgRef.current,
        { scaleX: 1, scaleY: 1 }, // mirrored + slightly zoomed in
        {
          scaleX: 5, // mirrored & more zoom
          scaleY: 5,
          ease: "none",
          transformOrigin: "50% 50%",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
      <section
        ref={sectionRef}
        className="relative lg:-mt-18 justify-center flex flex-col items-center min-h-[75dvh] md:min-h-dvh bg-white"
      >
        <div className="absolute max-h-[max(840px,_100vh)] size-full">
          <div className="relative opacity-100 size-full">
            <div className="absolute h-full w-full inset-0 overflow-hidden">
              <figure>
            <img
                  ref={imgRef}
                  src="https://images.unsplash.com/photo-1663275160801-6ce8e9a174b9?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hero"
                  className="absolute size-full object-left-top lg:object-[50%_20%] object-cover transform-gpu will-change-transform"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-black/90 to-black/40 absolute inset-0 size-full"></div>

        <section className="flex flex-row justify-between relative grow-1 shrink-1 basis-0 section my-12 md:my-20 py-10">
          <div className="md:max-w-14/20 w-full gap-4 md:gap-6 mx-0 md:min-h-50 h-auto flex flex-col lg:grid content-center justify-center md:justify-start ">
            <div className="flex flex-col gap-6 items-start text-[#f4f4f4]">
              <h1 className="text-[clamp(2rem,_1.6rem+1.64vw,_2.5rem)] md:text-[clamp(3rem,_1.8rem_+_2.18667vw,_5rem)] font-semibold tracking-[-0.075rem] whitespace-pre-line  leading-none text-left">
                Reshaping the potentials of creative industries.
              </h1>
              <p className="text-base md:text-lg text-left">
                Accelra is a private equity and credit firm for the creative industries. We turn culture and lifestyle into world-class brands across Africa and Europe. 
                </p>
            </div>

            <div className="flex justify-start">
              <Modal trigger={<Button>Partner with Us</Button>}>
                 <h2 className="text-2xl font-semibold mb-4">Partnership Inquiry</h2>
                <PartnershipForm />
              </Modal>
            </div>
          </div>
        </section>
      </section>
  );
}
