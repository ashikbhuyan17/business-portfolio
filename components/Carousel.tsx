import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Rating from './Rating';

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: 'start',
      }}
      className="max-md:w-11/12 md:max-w-full"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <div className="bg-[#001845] space-y-7 text-white rounded-lg p-6 shadow-lg w-full ">
                  <div className="flex items-center mb-4">
                    <Rating rating={5} />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="John Doe"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">Mr. John Doe</p>
                      <p className="text-sm">Business Owner</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
