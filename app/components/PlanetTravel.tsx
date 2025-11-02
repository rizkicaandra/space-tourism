function PlanetTravel({ label, content }: { label: string; content: string }) {
  return (
    <div className='text-center md:min-w-61.25 xl:min-w-52 xl:text-start'>
      <p className='text-preset-7 mb-3 text-blue-300 uppercase md:leading-4'>
        {label}
      </p>
      <p className='text-preset-6 font-bellefair leading-8 text-white uppercase'>
        {content}
      </p>
    </div>
  );
}

export default PlanetTravel;
