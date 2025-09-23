import { type RouteConfig, index, route, } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("apply", "routes/business-application.tsx"),
    route("partner", "routes/partnership.tsx"),
    route("*", "routes/catchall.tsx")

] satisfies RouteConfig;
