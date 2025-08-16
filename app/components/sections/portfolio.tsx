
import Autoplay, { type AutoplayOptionsType } from 'embla-carousel-autoplay';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { cn } from '~/lib/utils';
import { Button } from '../ui/button';


const autoplayOptions: AutoplayOptionsType = {
  delay: 5000,
  stopOnMouseEnter: false,
};

const portfolio = [
  {
    "name": "LAGOS NOIR",
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
  const autoplay = useMemo(() => Autoplay(autoplayOptions), []);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: true },
    [autoplay],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);


  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    setScrollSnaps(emblaApi!.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    setSelectedIndex(emblaApi!.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);



  return (
    <div className=" flex justify-center overflow-hidden w-full relative " >
      <div className="relative text-start lg:py-22 gap-10 lg:gap-16 section grid items-start grid-rows-[initial] lg:grid-cols-[450px_488px]" style={{ gridTemplateAreas: "content media" }}>

        <div className="flex flex-col gap-4 lg:gap-6  z-50 h-full">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.0375rem] whitespace-pre-line font-fg uppercase leading-none text-left">What we've done so far</h2>
          <span className="flex flex-col">
            <span className="text-left font-fg text-lg">
              From bold streetwear brands to award-winning restaurants and globally streamed music labels, we’ve backed the visionaries shaping the future of culture.
            </span>
          </span>
          <Button variant="dark" asChild className='w-fit'>
            <Link to="/">Pitch your Idea</Link>
          </Button>

        </div>

        <div className="relative lg:max-h-125 lg:min-h-[initial] lg:relative lg:self-center size-full overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {
              portfolio.map((item, index) => (
                <div key={index} className={cn("!aspect-[1/0.708661] inset-0  w-full h-80 ml-4 @container transition-all duration-500 ease-in-out", selectedIndex === index && "scale-100 z-50", 

                )}>
                  <div className="relative h-full cursor-pointer rounded-[20px] overflow-hidden bg-gray-500">
                    <div className="absolute inset-0">
                      <picture>
                        <source srcSet={item.image} />
                        <img src={item.image} className="absolute size-full object-[50%_50%] object-cover" />
                      </picture>
                    </div>
                    <div className="absolute inset-0 size-full bg-gradient-to-b from-foreground/85 to-foreground/20"/>

                    <div className="relative p-9 flex flex-col text-left text-background gap-2 h-full">
                      <h6 className="text-[8cqw] leading-[1.2] font-semibold font-fg ">{item.name}</h6>
                      <p className="opacity-85">{item.description}</p>

                      <div className="mt-auto">
                        <b className="text-[20cqw] leading-none font-fg ">{item.amount}</b>
                        <p className="">Amount Invested</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))

            }

          </div>
          <div className="w-full flex items-center  gap-2 my-4 justify-center">
            {
                scrollSnaps.map((_, index) => (
                    <div className={cn("rounded-full !size-2 bg-gray-400 cursor-pointer hover:bg-gray-600 transition-all duration-300 ease-in-out", selectedIndex === index && "bg-gray-600")} onClick={() => scrollTo(index)} key={index}/>
                ))
            }
          </div>
        </div>
        </div>


    </div>
  )
}
