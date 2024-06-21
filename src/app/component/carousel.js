'use client'
import { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide

  const nextSlide = () => {
    const totalSlides = 5; // Assuming 5 slides
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    const totalSlides = 5; // Assuming 5 slides
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Carousel items */}
        <div className="duration-700 ease-in-out opacity-0" data-carousel-item style={{ opacity: currentSlide === 0 ? 1 : 0 }}>
          <img src="https://cdn.discordapp.com/attachments/1022845891394162799/1253569669453971527/Screenshot_32.png?ex=6676553b&is=667503bb&hm=ace1366e7302910842fc563c8b9076b6dd514e91f8433daa4ba708ed45764e13" className="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Slide 1" />
        </div>
        <div className="duration-700 ease-in-out opacity-0" data-carousel-item style={{ opacity: currentSlide === 1 ? 1 : 0 }}>
          <img src="https://cdn.discordapp.com/attachments/1022845891394162799/1253571313507766312/Screenshot_31.png?ex=667656c3&is=66750543&hm=664f0267dc9170e71af81889b361b60dae40e17103ede39e3c35977fbc0fa585&" className="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Slide 2" />
        </div>
        <div className="duration-700 ease-in-out opacity-0" data-carousel-item style={{ opacity: currentSlide === 2 ? 1 : 0 }}>
          <img src="https://cdn.discordapp.com/attachments/1022845891394162799/1253569669453971527/Screenshot_32.png?ex=6676553b&is=667503bb&hm=ace1366e7302910842fc563c8b9076b6dd514e91f8433daa4ba708ed45764e13" className="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Slide 3" />
        </div>
        <div className="duration-700 ease-in-out opacity-0" data-carousel-item style={{ opacity: currentSlide === 3 ? 1 : 0 }}>
          <img src="https://cdn.discordapp.com/attachments/1022845891394162799/1253569669453971527/Screenshot_32.png?ex=6676553b&is=667503bb&hm=ace1366e7302910842fc563c8b9076b6dd514e91f8433daa4ba708ed45764e13" className="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Slide 4" />
        </div>
        <div className="duration-700 ease-in-out opacity-0" data-carousel-item style={{ opacity: currentSlide === 4 ? 1 : 0 }}>
          <img src="https://cdn.discordapp.com/attachments/1022845891394162799/1253569669453971527/Screenshot_32.png?ex=6676553b&is=667503bb&hm=ace1366e7302910842fc563c8b9076b6dd514e91f8433daa4ba708ed45764e13" className="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Slide 5" />
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-white'}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
