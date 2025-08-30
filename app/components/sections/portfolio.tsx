
import { type AutoplayOptionsType } from 'embla-carousel-autoplay';
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { cn } from '~/lib/utils';
import { Button } from '../ui/button';


const autoplayOptions: AutoplayOptionsType = {
  delay: 5000,
  stopOnMouseEnter: false,
};

const portfolio = [
  {
    "name": "Elite Wear",
    "amount": "$1.5M",
    "year": 2021,
    "description": "High-end streetwear brand bringing West African aesthetics to the global stage.",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop"
  },
  {
    "name": "AFROPLATE",
    "amount": "$2.3M",
    "year": 2022,
    "description": "A premium African-fusion restaurant group with Michelin aspirations.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
  },
  {
    "name": "SONIKWAVE",
    "amount": "$1.75M",
    "year": 2020,
    "description": "Independent label amplifying new African music to international audiences.",
    "image": "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=1200&auto=format&fit=crop"
  },
  {
    "name": "FRAMEHOUSE",
    "amount": "$1.2M",
    "year": 2023,
    "description": "A photography collective turning cultural narratives into global campaigns.",
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200&auto=format&fit=crop"
  }
]


export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItem = useMemo(() => { return portfolio[selectedIndex] }, [selectedIndex]);

  return (
    <div className=" flex flex-col justify-center overflow-hidden w-full relative py-20" >
      <div className="relative text-start lg:py-22 gap-10 lg:gap-16 section grid items-start grid-rows-[initial] lg:grid-cols-[450px_488px]" style={{ gridTemplateAreas: "content media" }}>

        <div className="flex flex-col gap-4 lg:gap-6  z-50 h-full">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.0375rem] whitespace-pre-line  uppercase leading-none text-left">What we've done so far</h2>
          <span className="flex flex-col">
            <span className="text-left  text-lg">
              From bold streetwear brands to award-winning restaurants and globally streamed music labels, we’ve backed the visionaries shaping the future of culture.
            </span>
          </span>
          <Button variant="dark" asChild className='w-fit'>
            <Link to="/">Pitch your Idea</Link>
          </Button>

        </div>


      </div>

      <div className="section">
        <div className="relative size-full overflow-hidden flex flex-col gap-6">
          <div className="flex w-full flex-col gap-6">
          {
            portfolio.map((item, index) => (
 <div className={cn(" inset-0  w-full h-125 ml-4 @container transition-all duration-500 ease-in-out rounded-[20px]",
            )}
            >
              <div className="relative h-full cursor-pointer rounded-[20px] overflow-hidden bg-gray-500">
                <div className="absolute inset-0">
                  <picture>
                    <source srcSet={item.image} />
                    <motion.img src={item.image} className="absolute size-full object-[50%_50%] object-cover" />
                  </picture>
                </div>
                <div className="absolute inset-0 size-full bg-gradient-to-b from-foreground/85 to-foreground/20" />

                <div className="relative p-9 flex flex-col text-left text-background gap-2 h-full">
                  <motion.h6 className="text-[5cqw] leading-[1.2] font-semibold  ">{item.name}</motion.h6>
                  <motion.p className="opacity-85">{item.description}</motion.p>


                  <div className="mt-auto flex justify-between items-end">
                    <div className="mt-auto">
                      <b className="text-[10cqw] leading-none  ">{item.amount}</b>
                      <p className="">Amount Invested</p>
                    </div>

                   
                  </div>

                </div>
              </div>
            </div>
            ))
          }
   </div>
        </div>
      </div>
    </div>
  )
}
