import CrewContent from '../components/CrewContent';
import Navbar from '../components/Navbar';

function Crew() {
  return (
    <div className='h-screen w-full overflow-x-hidden bg-[url("/crew/background-crew-mobile.jpg")] bg-cover bg-center bg-no-repeat md:bg-[url("/crew/background-crew-tablet.jpg")] xl:bg-[url("/crew/background-crew-desktop.jpg")]'>
      <Navbar />
      <CrewContent />
    </div>
  );
}

export default Crew;
