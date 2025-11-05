'use client';
import Image from 'next/image';
import Title from './Title';
import { useEffect, useState } from 'react';

function CrewContent() {
  let crewItems = [
    {
      position: 'commander',
      name: 'Douglas Hurley',
      description:
        'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      image: '/crew/image-douglas-hurley.webp',
    },
    {
      position: 'Mission Specialist',
      name: 'MARK SHUTTLEWORTH',
      description:
        'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      image: '/crew/image-mark-shuttleworth.webp',
    },
    {
      position: 'pilot',
      name: 'Victor Glover',
      description:
        'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      image: '/crew/image-victor-glover.webp',
    },
    {
      position: 'Flight Engineer',
      name: 'Anousheh Ansari',
      description:
        'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      image: '/crew/image-anousheh-ansari.webp',
    },
  ];

  const [crewIndex, setCrewIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);

  const handleChange = (index: number) => {
    if (index !== crewIndex) {
      setCrewIndex(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentIndex(crewIndex);
    }, 350);
    return () => clearTimeout(timer);
  }, [crewIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        const nextIndex = (crewIndex + 1) % crewItems.length;
        handleChange(nextIndex);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        const prevIndex =
          crewIndex === 0 ? crewItems.length - 1 : crewIndex - 1;
        handleChange(prevIndex);
      }
    };

    globalThis.addEventListener('keydown', handleKeyDown);
    return () => globalThis.removeEventListener('keydown', handleKeyDown);
  }, [crewIndex, crewItems.length]);

  return (
    <main className='m-6 md:m-10 md:mb-0 xl:mt-12 xl:ml-44'>
      <div className='flex w-full flex-col items-center justify-center gap-6 xl:items-start'>
        <Title
          number={'02'}
          title={'meet your crew'}
          className='mx-10 xl:ml-0'
        />

        {/* content */}
        <div className='flex flex-col items-center justify-center gap-9.25 md:gap-8 xl:max-h-140 xl:w-full xl:flex-row'>
          {/* crew items */}
          <div className='flex flex-col items-center justify-center gap-6 xl:min-h-140 xl:justify-between'>
            {/* details */}
            <div
              className={`font-bellefair mt-10 flex flex-col items-center justify-center transition-all duration-700 md:max-w-128 xl:mt-15 xl:min-w-135 xl:items-start ${
                crewIndex !== contentIndex
                  ? 'scale-95 transform opacity-0'
                  : 'scale-100 transform opacity-100'
              }`}
            >
              {/* position */}
              <h3 className='text-preset-4-mobile md:text-preset-4-tablet xl:text-preset-4 leading-5.25 text-white/51 uppercase md:leading-7 xl:leading-9.25'>
                {crewItems[contentIndex].position}
              </h3>

              {/* name */}
              <h2 className='text-preset-3-mobile md:text-preset-3-tablet xl:text-preset-3 mt-2 leading-7 text-white uppercase md:mt-4 md:leading-11.5 xl:leading-16'>
                {crewItems[contentIndex].name}
              </h2>

              {/* description */}
              <p className='text-preset-9-mobile md:text-preset-9-tablet font-barlow xl:text-preset-9 mt-6 min-h-40.75 text-center leading-6.75 text-blue-300 md:min-h-28.5 md:leading-7.25 xl:text-start xl:leading-8'>
                {crewItems[contentIndex].description}
              </p>
            </div>

            {/* dots */}
            <div className='flex items-center justify-center gap-4 xl:mb-10 xl:w-full xl:justify-start xl:gap-10'>
              {crewItems.map((item, index) => (
                <button
                  type='button'
                  key={item.position + index}
                  className={`h-2.5 w-2.5 cursor-pointer rounded-full hover:bg-white/50 xl:h-4 xl:w-4 ${index === contentIndex ? 'bg-white' : 'bg-white/17'} `}
                  onClick={() => {
                    handleChange(index);
                  }}
                ></button>
              ))}
            </div>
          </div>

          <div
            className={`flex w-full items-center justify-center transition-opacity duration-700 ${crewIndex !== contentIndex ? 'opacity-0' : 'opacity-100'}`}
          >
            <Image
              src={crewItems[contentIndex].image}
              alt='image-hero'
              width={400}
              height={400}
              className={`h-full w-68 md:h-140 md:w-111.25 md:object-cover md:object-top xl:h-full xl:w-110`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default CrewContent;
