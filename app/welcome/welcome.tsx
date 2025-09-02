import About from "~/components/sections/about";
import ContactUs from "~/components/sections/contact";
import DidYouKnoW from "~/components/sections/didyouknow";
import FAQs from "~/components/sections/faqs";
import Hero from "~/components/sections/hero";
import Numbers from "~/components/sections/numbers";
import Philosophy from "~/components/sections/philosophy";
import Portfolio from "~/components/sections/portfolio";
import TeamSection from "~/components/sections/team";
import WhoWeAre from "~/components/sections/whoweare";

export function Welcome() {
  return (
    <main className="max-w-full min-h-screen relative" role="main">
   <Hero/>
   <WhoWeAre/>
   <Numbers/>
   <DidYouKnoW/>
   <Philosophy/>
   {/* <Portfolio/> */}
   <About/>
   <TeamSection/>
   <FAQs/>
   <ContactUs />
    </main>
  );
}

