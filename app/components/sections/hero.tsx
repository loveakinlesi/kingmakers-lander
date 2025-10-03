import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import { useRef } from "react";
import { Button } from "~/components/ui/button";
import { Link } from "~/components/ui/link";
import { TextFade } from "../ui/text-fade-up";

gsap.registerPlugin(ScrollTrigger, SplitText);


export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const h1Ref = useRef<HTMLHeadingElement | null>(null);

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
          scaleX: 1.2, // mirrored & more zoom
          scaleY: 1.2,
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

      const mySplitText = new SplitText("h1", { type: "words,chars,lines", linesClass:"overflow-hidden leading-[1.15]",}, );
      const chars = mySplitText.chars;

      gsap.fromTo(mySplitText.lines, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.02,
        ease: "back.out",
        duration: 0.7,
      }, { yPercent: 0, opacity: 1, stagger: 0.2, ease: "back.out", duration: 0.7});

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
                src="https://images.unsplash.com/photo-1575929833480-fa9ce946243c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <TextFade direction="down" className="flex flex-col gap-6 items-start text-[#f4f4f4]">
            <h1 className="text-[clamp(2rem,_1.6rem+1.64vw,_2.5rem)] md:text-[clamp(3rem,_1.8rem_+_2.18667vw,_5rem)] font-semibold tracking-[-0.075rem] whitespace-pre-line  leading-none text-left">
            Greatness from Creative Beginnings, Powering Global Brands 
            </h1>
            <p className="text-base md:text-lg text-left">
              Accelra is a private equity and credit firm investing in the creative sectors. We deploy capital and strategic support to transform culture, lifestyle, and talent into world-class brands that shape Africa and Europe’s future.</p>

          <div className="flex justify-start gap-4">
            {/* <FormModal formId="3xKJ0J" trigger={} /> */}
            <Link to="/partner">
              <Button>Partner with Us</Button>
            </Link>
              <Link to="/apply">
              <Button variant="default" className="text-white bg-white/10">Pitch Us Your Business</Button>
            </Link>
          </div>
          </TextFade>
        </div>
      </section>
    </section>
  );
}
