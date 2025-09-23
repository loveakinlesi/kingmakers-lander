import { gsap } from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import {
  Link as RemixLink,
  type LinkProps as RemixLinkProps,
  useNavigate,
  useLocation,
} from "react-router";

gsap.registerPlugin(ScrollToPlugin);

const scrollToAnchor = (anchor: string, duration = 1, ease = "power2.out") => {
  if (typeof window === "undefined") return;
  if (!anchor.startsWith("#")) return;

  const element = window.document.querySelector(anchor);
  if (!element) return;

  const rect = element.getBoundingClientRect();
  const targetY = window.scrollY + rect.top;

  gsap.to(window, {
    duration,
    scrollTo: { y: targetY, autoKill: true },
    ease,
  });
};

export const Link = (props: RemixLinkProps) => {
  const { to, onClick, ...rest } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const isAnchor = typeof to === "string" && to.startsWith("#");
  const isRootAnchor =
    typeof to === "string" && to.startsWith("/") && to.includes("#");

  // Case 1: normal same-page anchor
  if (isAnchor) {
    return (
      <a
        href={to}
        onClick={(e) => {
          e.preventDefault();
          scrollToAnchor(to, 1.2, "power3.out");
          onClick?.(e);
        }}
        {...rest}
      />
    );
  }

  // Case 2: navigate to `/` then scroll to anchor
  if (isRootAnchor) {
    return (
      <a
        href={to}
        onClick={(e) => {
          e.preventDefault();
          const [pathname, hash] = to.split("#");

          navigate(pathname || "/", {
            replace: false,
          });

          // wait for route change + render
          setTimeout(() => {
            scrollToAnchor(`#${hash}`, 1.2, "power3.out");
          }, 50);

          onClick?.(e);
        }}
        {...rest}
      />
    );
  }

  // Case 3: normal Remix navigation
  return <RemixLink {...props} />;
};
