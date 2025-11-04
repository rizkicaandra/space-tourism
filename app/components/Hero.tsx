'use client';
import { useRouter } from 'next/navigation';
function Hero() {
  const router = useRouter();
  return (
    <main className='m-6 flex flex-col items-center justify-center md:mx-10 md:my-32 md:gap-16 xl:my-0 xl:h-3/4 xl:flex-row xl:items-end'>
      {/* hero description */}
      <div className='flex flex-col items-center justify-center gap-6 text-blue-300 md:max-w-lg xl:items-start'>
        <p className='text-preset-6-mobile font-bellefair md:text-preset-5 uppercase md:leading-8.5'>
          so, you want to travel to
        </p>
        <h1 className='text-preset-1-mobile font-bellefair md:text-preset-1 text-white uppercase md:leading-41.5'>
          space
        </h1>
        <p className='text-preset-9-mobile md:text-preset-9 text-center md:leading-7.25 xl:text-start'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      {/* hero button */}
      <div className='flex min-h-95.5 w-full items-center justify-center md:min-h-68 md:max-w-lg xl:mb-8.75 xl:max-w-135 xl:justify-end'>
        <button
          type='button'
          aria-label='explore'
          className='text-preset-4-mobile font-bellefair md:text-preset-4 h-36 w-36 cursor-pointer rounded-full bg-white text-center uppercase transition-all duration-300 outline-none hover:ring-88 hover:ring-white/10 md:h-68 md:w-68'
          onClick={() => {
            router.push('/destination');
          }}
        >
          explore
        </button>
      </div>
    </main>
  );
}

export default Hero;
