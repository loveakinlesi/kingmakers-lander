import { Link as RemixLink, type LinkProps as RemixLinkProps } from "react-router";


const scrollToAnchor = (anchor: string) => {
    const element = document.querySelector(anchor);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

export const Link = (props: RemixLinkProps) => {
    const isInternal = typeof props.to === "string" && (props.to.startsWith("/") || props.to.startsWith("#") || props.to.startsWith(window.location.origin));
    if (!isInternal) {
        <a {...props} onClick={()=>scrollToAnchor(props.to.toString())} />
    }

    return <RemixLink {...props}/>
}