import About from "~/components/sections/about";
import ContactUs from "~/components/sections/contact";
import DidYouKnoW from "~/components/sections/didyouknow";
import Hero from "~/components/sections/hero";
import Philosophy from "~/components/sections/philosophy";
import TeamSection from "~/components/sections/team";
import WhoWeAre from "~/components/sections/whoweare";

export function Welcome() {
  return (
    <main className="max-w-full min-h-screen relative" role="main">
   <Hero/>
   <WhoWeAre/>
   <DidYouKnoW/>
   <Philosophy/>
   <About/>
   <TeamSection/>
   <ContactUs />
    </main>
  );
}

