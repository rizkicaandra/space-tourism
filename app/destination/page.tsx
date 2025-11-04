import Navbar from '../components/Navbar';
import Planet from '../components/Planet';

function Destination() {
  return (
    <div className='h-screen w-full overflow-x-hidden bg-[url("/destination/background-destination-mobile.jpg")] bg-cover bg-center bg-no-repeat md:bg-[url("/destination/background-destination-tablet.jpg")] xl:bg-[url("/destination/background-destination-desktop.jpg")]'>
      <Navbar />
      <Planet />
    </div>
  );
}

export default Destination;
