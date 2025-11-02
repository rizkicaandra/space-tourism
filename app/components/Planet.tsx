'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import PlanetTravel from './PlanetTravel';

function Planet() {
  const [planetIndex, setPlanetIndex] = useState(0);
  const [currentPlanet, setCurrentPlanet] = useState(0);

  const handlePlanetChange = (index: number) => {
    if (index !== planetIndex) {
      setPlanetIndex(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPlanet(planetIndex);
    }, 350);
    return () => clearTimeout(timer);
  }, [planetIndex]);

  const planets = [
    {
      name: 'Moon',
      description:
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 km',
      travel: '3 days',
      image: '/destination/image-moon.webp',
    },
    {
      name: 'Mars',
      description:
        'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 mil. km',
      travel: '9 months',
      image: '/destination/image-mars.webp',
    },
    {
      name: 'Europa',
      description:
        'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 mil. km',
      travel: '3 years',
      image: '/destination/image-europa.webp',
    },
    {
      name: 'Titan',
      description:
        'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 bil. km',
      travel: '7 years',
      image: '/destination/image-titan.webp',
    },
  ];

  return (
    <main className='m-6 md:m-10 xl:flex xl:items-center xl:justify-center'>
      <div className='flex w-full flex-col items-center justify-center gap-6 xl:max-w-277.5 xl:items-start'>
        {/* title */}
        <h1 className='text-preset-8 md:text-preset-5-tablet xl:text-preset-5 leading-4.75 text-white uppercase md:self-start'>
          <span className='mr-6 font-bold text-white/25'>01</span>pick your
          destination
        </h1>

        {/* content */}
        <div className='flex flex-col items-center justify-center gap-8 xl:min-h-183.5 xl:flex-row xl:gap-10'>
          {/* planet image */}
          <div
            className={`my-6.5 transition-opacity duration-700 md:my-10.5 xl:mx-7.25 ${planetIndex !== currentPlanet ? 'opacity-0' : 'opacity-100'}`}
          >
            <Image
              src={planets[currentPlanet].image}
              alt={'moon'}
              width={300}
              height={300}
              className='z-0 h-full w-37.5 animate-[spin_120s_linear_infinite] md:w-75 xl:w-120'
            />
          </div>

          {/* planet info */}
          <div className='flex max-w-128 flex-col items-center justify-center gap-6 md:my-4.5 xl:ml-11.75 xl:max-w-111.25 xl:items-start xl:gap-10'>
            {/* planet choices */}
            <ul className='flex min-h-8 items-center justify-center gap-8'>
              {planets.map((planet, index) => (
                <li
                  key={index}
                  className={`text-preset-8 min-h-8 cursor-pointer leading-4.5 text-white uppercase ${
                    index === planetIndex ? 'border-b-3 border-white' : ''
                  } hover:border-b-3 hover:border-white/50`}
                  onClick={() => handlePlanetChange(index)}
                >
                  {planet.name}
                </li>
              ))}
            </ul>

            {/* planet information */}
            <div
              className={`text-center transition-opacity duration-700 xl:text-start ${planetIndex !== currentPlanet ? 'opacity-0' : 'opacity-100'}`}
            >
              <h2 className='text-preset-2-mobile md:text-preset-2-tablet font-bellefair xl:text-preset-2 mb-4 leading-16 text-white uppercase md:leading-23 xl:leading-27.5'>
                {planets[currentPlanet].name}
              </h2>

              <p className='text-preset-9-mobile font-barlow md:text-preset-9-tablet xl:text-preset-9 text-blue-300 md:-mx-1.5 md:leading-7.25 xl:mx-0'>
                {planets[currentPlanet].description}
              </p>
            </div>

            {/* separator */}
            <div className='h-0.25 w-full max-w-128 bg-white/25'></div>

            {/* planet travel */}
            <div
              className={`transition-opacity duration-700 ${planetIndex !== currentPlanet ? 'opacity-0' : 'opacity-100'} flex flex-col items-center justify-center gap-6 md:flex-row`}
            >
              <PlanetTravel
                label='avg. distance'
                content={planets[currentPlanet].distance}
              />

              <PlanetTravel
                label='est. travel time'
                content={planets[currentPlanet].travel}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Planet;
