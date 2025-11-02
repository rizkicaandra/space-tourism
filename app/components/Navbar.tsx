'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  const links = [
    { number: '00', name: 'home', href: '/' },
    { number: '01', name: 'destination', href: '/destination' },
    { number: '02', name: 'crew', href: '/crew' },
    { number: '03', name: 'technology', href: '/technology' },
  ];

  const handleSidebar = () => {
    setAnimation(!animation);
    if (animation) {
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 600);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <header className='relative'>
      <nav className='flex w-full items-center justify-between px-6 py-6 md:py-0 md:pr-0 md:pl-10 xl:pt-10 xl:pl-16'>
        {/* logo */}
        <div className='md:mr-10 xl:mr-0'>
          <Image
            src='/shared/logo.svg'
            width={48}
            height={48}
            alt='logo'
            className='h-10 w-10 md:h-full md:w-13.5 xl:mr-16 xl:w-13'
          />
        </div>

        <div className='-mr-8 hidden h-0.25 w-full bg-white/25 xl:z-10 xl:ml-16 xl:inline-block'></div>

        {/* hamburger */}
        <button
          type='button'
          area-label='hamburger'
          className='md:hidden'
          onClick={handleSidebar}
        >
          <Image
            src='/shared/icon-hamburger.svg'
            width={24}
            height={21}
            alt='hamburger'
            className='h-full w-6'
          />
        </button>

        <ul className='hidden h-24 w-full items-center justify-center bg-white/5 text-white uppercase backdrop-blur-2xl md:flex md:gap-12'>
          {links.map((link) => (
            <li
              key={link.name}
              className={`text-preset-8 flex h-full border-b-4 leading-none hover:border-white/50 ${
                pathname === link.href ? 'border-white' : 'border-transparent'
              }`}
            >
              <Link
                href={link.href}
                className='flex h-full items-center justify-center text-center'
              >
                <span className='mr-3 font-bold'>{link.number}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div
          className={`bg-slate-975/50 ${animation ? 'fade-in-right' : 'fade-in-left'} absolute top-0 right-0 flex h-screen w-14/20 flex-col items-end justify-start gap-12 pl-8 backdrop-blur-2xl`}
        >
          <button
            type='button'
            aria-label='close'
            className='my-8 mr-6'
            onClick={handleSidebar}
          >
            <Image
              src='/shared/icon-close.svg'
              width={48}
              height={48}
              alt='icon-close'
              className='h-full w-6'
            />
          </button>

          <ul className='font-barlow-condensed w-full uppercase duration-300'>
            {links.map((link) => (
              <li
                key={link.name}
                className={`text-preset-8 mb-8 w-full border-r-4 text-left leading-none text-white ${
                  pathname === link.href ? 'border-white' : 'border-transparent'
                }`}
              >
                <Link href={link.href}>
                  <span className='pr-3 font-bold'>{link.number}</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
