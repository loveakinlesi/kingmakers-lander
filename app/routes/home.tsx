import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kingmakers" },
    { name: "description", content: "We Don't Just Back Winners. We Make Kings." },
  ];
}

export default function Home() {
  return <Welcome />;
}
