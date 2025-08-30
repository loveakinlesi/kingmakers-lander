import { Link as RemixLink, type LinkProps as RemixLinkProps } from "react-router";


const scrollToAnchor = (anchor: string) => {
    if(typeof window === "undefined") return;
    if(!anchor.startsWith("#")) return;
    const element = window.document.querySelector(anchor);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
}
// @ts-ignore
export const Link = (props: RemixLinkProps) => {
    const isInternal = typeof props.to === "string" && props.to.startsWith("#");
    console.log("🚀 ~ Link ~ isInternal:", isInternal,props.to);
    if (isInternal) {
        <span {...props} onClick={()=>scrollToAnchor(props.to.toString())} />
    }

    return <RemixLink {...props}/>
}