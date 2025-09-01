import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import { Link } from '../ui/link'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'

export default function WhoWeAre() {
    const sectionRef = useRef<HTMLElement>(null);

   useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Start collapsed
      gsap.set(section, { "--x": "0px", "--y": "0px", "--r": "0px" } as any);

      const R_VISIBLE = 120; // px
      const R_HIDDEN = 0;

      let idleTimer: number | null = null;
      const clearIdle = () => {
        if (idleTimer !== null) {
          window.clearTimeout(idleTimer);
          idleTimer = null;
        }
      };

      const collapse = () => {
        gsap.to(section, {
          duration: 0.4,
          ease: "linear",
          "--r": `${R_HIDDEN}px`,
        } as any);
      };

      const onPointerMove = (e: PointerEvent) => {
        const rect = section.getBoundingClientRect();
        // coords relative to the section
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        clearIdle();
        idleTimer = window.setTimeout(collapse, 800);

        // move the circle center
        gsap.to(section, {
          duration: 0.25,
          ease: "linear",
          "--x": `${x - R_VISIBLE / 2}px`,
          "--y": `${y - R_VISIBLE / 2}px`,
        } as any);

        // within bounds? show; else hide
        if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
          gsap.to(section, {
            duration: 0.18,
            ease: "power2.out",
            "--r": `${R_VISIBLE}px`,
          } as any);
        } else {
          collapse();
        }
      };

      const onPointerLeave = () => {
        clearIdle();
        collapse();
      };

      section.addEventListener("pointermove", onPointerMove, { passive: true });
      section.addEventListener("pointerleave", onPointerLeave);

      return () => {
        section.removeEventListener("pointermove", onPointerMove);
        section.removeEventListener("pointerleave", onPointerLeave);
        clearIdle();
      };
    },
    { scope: sectionRef } // keeps things scoped & auto-cleaned if the element changes
  );
    return (
        <section className="py-16 md:py-32" >
            <div className="section space-y-8 px-6 md:space-y-12" id='about'>
                <figure className='relative w-full h-full aspect-video border-6 border-primary rounded-(--radius) overflow-hidden ' ref={sectionRef}>
                <img
                    className=" grayscale absolute w-full h-full aspect-video object-cover"
                    src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="team image"
                    loading="lazy"
                />
                <div className="cursor-clip aspect-video object-cover rounded-(--radius) absolute w-full h-full will-change-[clip-path]
                     [clip-path:circle(var(--r,0px)_at_var(--x,0px)_var(--y,0px))] bg-primary/10">
                 <img
                    className='w-full h-full object-cover rounded-(--radius) mix-blend-overlay'
                    src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="team image"
                    loading="lazy"
                />
                </div>
                </figure>

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-5xl md:text-7xl font-medium">Who We Are</h2>
                    <div className="space-y-6">
                        <p>Accelra invest where culture and lifestyle meet capital. As a private equity and credit investment firm, we are dedicated to unlocking value in the music, photography, food, film, fashion, and other creative industries across African and Europe. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}