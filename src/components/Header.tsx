import Image from 'next/image';
import Link from 'next/link';
import Socials from './Socials';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter()


  return <header className={`flex md:absolute z-20 w-full items-center ${router.asPath === '/' && 'bg-black/30'} md:bg-transparent px-16 xl:px-0 xl:h-[90px]`}>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-0 xl:py-8'>
        <Link href={'/'}>
          <Image src={'/logo.png'} width={220} height={50} alt='Logo' priority={true} />
        </Link>
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
