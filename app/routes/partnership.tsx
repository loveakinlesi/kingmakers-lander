import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "~/components/sections/partnerships/hero";
import Form from "~/components/sections/partnerships/form";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Partner with Accelra | Invest in Creative Industries" },
    { name: "description", content: "Deploy capital with Accelra Group and invest in scalable creative businesses in Africa and Europe." },
  ];
}

export default function Home() {
  return <main className="max-w-full min-h-screen relative" role="main">
    <Hero />
    <Form/>
  </main>
}
