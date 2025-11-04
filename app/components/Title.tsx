function Title({
  number,
  title,
  className,
}: {
  number: string;
  title: string;
  className?: string;
}) {
  return (
    <h1
      className={`text-preset-8 md:text-preset-5-tablet xl:text-preset-5 leading-4.75 text-white uppercase md:self-start ${className}`}
    >
      <span className='mr-6 font-bold text-white/25'>{number}</span>
      {title}
    </h1>
  );
}

export default Title;
