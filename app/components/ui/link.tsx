import {gsap} from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import {
    Link as RemixLink,
    type LinkProps as RemixLinkProps,
} from "react-router";

gsap.registerPlugin(ScrollToPlugin);

const scrollToAnchor = (anchor: string, duration = 1, ease = "power2.out") => {
    if (typeof window === "undefined") return;
    if (!anchor.startsWith("#")) return;

    const element = window.document.querySelector(anchor);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const targetY = window.scrollY + rect.top; // offset from page top

    gsap.to(window, {
        duration,
        scrollTo: { y: targetY, autoKill: true }, // needs ScrollToPlugin
        ease,
    });
};


export const Link = (props: RemixLinkProps) => {
    const { to, onClick, ...rest } = props;
    const isAnchor = typeof to === "string" && to.startsWith("#");

    if (isAnchor) {
        return (
            <a
                href={to}
                onClick={(e) => {
                    e.preventDefault(); // prevent full reload
                    scrollToAnchor(to, 1.2, "power3.out");
                    onClick?.(e); // preserve any user-provided onClick
                }}
                {...rest}
            />
        );
    }

    return <RemixLink {...props} />;
};
