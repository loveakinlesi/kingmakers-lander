import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "~/components/sections/apply/hero";
import Form from "~/components/sections/apply/form";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Apply for Funding | Accelra Group" },
    { name: "description", content: "Apply to partner with Accelra Group. We provide capital and hands-on support to creative businesses across Africa & Europe." },
  ];
}

export default function Apply() {
  return <main className="max-w-full min-h-screen relative" role="main">
      <Hero />
      <Form />
  </main>
}
