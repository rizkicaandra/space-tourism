import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className='h-screen w-full overflow-x-hidden bg-[url("/home/background-home-mobile.jpg")] bg-cover bg-center bg-no-repeat md:bg-[url("/home/background-home-tablet.jpg")] xl:bg-[url("/home/background-home-desktop.jpg")]'>
      <Navbar />
      <Hero />
    </div>
  );
}
