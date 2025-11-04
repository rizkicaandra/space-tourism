'use client';
import Image from 'next/image';
import Title from './Title';
import { useEffect, useState } from 'react';

function Technology() {
  const technologies = [
    {
      number: 1,
      portrait: '/technology/image-launch-vehicle-portrait.jpg',
      landscape: '/technology/image-launch-vehicle-landscape.jpg',
      title: 'Launch vehicle',
      description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    },
    {
      number: 2,
      portrait: '/technology/image-spaceport-portrait.jpg',
      landscape: '/technology/image-spaceport-landscape.jpg',
      title: 'Spaceport',
      description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    },
    {
      number: 3,
      portrait: '/technology/image-space-capsule-portrait.jpg',
      landscape: '/technology/image-space-capsule-landscape.jpg',
      title: 'Space capsule',
      description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    },
  ];

  const [technologyIndex, setTechnologyIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);

  const handleChangeTechnology = (index: number) => {
    if (index !== technologyIndex) setTechnologyIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentIndex(technologyIndex);
    }, 350);
    return () => clearTimeout(timer);
  }, [technologyIndex]);

  return (
    <main className='my-6 md:my-10 xl:mt-12 xl:mb-0 xl:ml-44'>
      <div className='flex w-full flex-col items-center justify-center gap-6 xl:items-start'>
        {/* title */}
        <Title
          number={'03'}
          title={'space launch 101'}
          className='mx-10 xl:ml-0'
        />

        {/* content */}
        <div className='flex flex-col items-center justify-center gap-8 xl:w-full xl:max-w-350 xl:flex-row xl:justify-between xl:gap-12'>
          {/* image */}
          <div
            className={`mt-16 transition-opacity duration-700 xl:order-2 xl:mt-0 ${contentIndex !== technologyIndex ? 'opacity-0' : 'opacity-100'}`}
          >
            {/* image portrait mobile */}
            <Image
              src={technologies[contentIndex].portrait}
              alt={'image-launch-vehicle-portrait'}
              width={400}
              height={400}
              className={`h-64.5 w-93.25 object-cover ${technologies[contentIndex].number === 3 ? 'object-center' : 'object-bottom'} md:hidden`}
            />

            {/* image landscape tablet */}
            <Image
              src={technologies[contentIndex].landscape}
              alt={'image-launch-vehicle-landscape'}
              width={400}
              height={400}
              className={`hidden h-89 w-192 object-cover object-center md:inline-block xl:hidden`}
            />

            {/* image potrait desktop */}
            <Image
              src={technologies[contentIndex].portrait}
              alt={'image-launch-vehicle-potrait'}
              width={400}
              height={400}
              className={`hidden h-150 w-152 object-cover object-center xl:inline-block`}
            />
          </div>

          {/* description */}
          <div className='flex flex-col items-center justify-center gap-10 xl:max-w-277.75 xl:flex-row'>
            {/* description choice */}
            <div className='flex flex-row items-center justify-center gap-4 xl:flex-col xl:gap-8'>
              {technologies.map((item, index) => (
                <button
                  type='button'
                  key={item.number}
                  className={`font-bellefair text-preset-4-mobile md:text-preset-4-tablet xl:text-preset-4 h-10 w-10 cursor-pointer rounded-full border text-center hover:border-white md:h-14 md:w-14 xl:h-20 xl:w-20 ${index === technologyIndex ? 'border-white bg-white text-blue-900' : 'border-white/25 text-white'}`}
                  onClick={() => {
                    handleChangeTechnology(index);
                  }}
                >
                  {item.number}
                </button>
              ))}
            </div>

            {/* description content */}
            <div
              className={`font-bellefair flex max-w-83 flex-col items-center justify-center gap-4 transition-opacity duration-700 md:max-w-133 xl:max-w-122.75 xl:items-start ${contentIndex !== technologyIndex ? 'opacity-0' : 'opacity-100'}`}
            >
              {/* info */}
              <h3 className='text-preset-4-mobile md:text-preset-4-tablet xl:text-preset-4 leading-5.25 text-white/51 uppercase md:leading-7 xl:leading-9.25'>
                The terminology...
              </h3>

              {/* title */}
              <h2 className='text-preset-3-mobile md:text-preset-3-tablet xl:text-preset-3 leading-7 text-white uppercase md:leading-11.5 xl:leading-16'>
                {technologies[contentIndex].title}
              </h2>

              {/* description */}
              <p className='text-preset-9-mobile md:text-preset-9-tablet font-barlow xl:text-preset-9 text-center leading-6.75 text-blue-300 md:leading-7.25 xl:text-start xl:leading-8'>
                {technologies[contentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Technology;
