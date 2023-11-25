import Image from 'next/image';

const Bulb = () => {
  return <div className='absolute -left-36 bottom-7 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[280px] xl:w-[268px]'>
    <Image src={'/bulb.png'} width={260} height={200} alt='Bulb' className='h-full w-full' />
  </div>;
};

export default Bulb;
