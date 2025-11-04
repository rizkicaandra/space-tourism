import Navbar from '../components/Navbar';
import Technology from '../components/Technology';

function Techology() {
  return (
    <div className='h-full min-h-svh w-full overflow-x-hidden bg-[url("/technology/background-technology-mobile.jpg")] bg-cover bg-center bg-no-repeat md:bg-[url("/technology/background-technology-tablet.jpg")] xl:bg-[url("/technology/background-technology-desktop.jpg")]'>
      <Navbar />
      <Technology />
    </div>
  );
}

export default Techology;
