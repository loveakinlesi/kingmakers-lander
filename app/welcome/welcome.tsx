import About from "~/components/sections/about";
import Hero from "~/components/sections/hero";
import Numbers from "~/components/sections/numbers";
import Philosophy from "~/components/sections/philosophy";
import Portfolio from "~/components/sections/portfolio";

export function Welcome() {
  return (
    <main className="max-w-full min-h-screen relative" role="main">
   <Hero/>
   <Numbers/>
   <About/>
   <Portfolio/>
   <Philosophy/>
    </main>
  );
}

