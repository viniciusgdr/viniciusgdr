'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'início', path: '/', icon: <HiHome /> },
  { name: 'sobre', path: '/about', icon: <HiUser /> },
  { name: 'serviços', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'trabalhos', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'contato',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className='fixed z-50 bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[420px] xl:w-16 xl:max-w-md xl:right-[2%] xl:left-auto xl:translate-x-0 xl:top-0 xl:bottom-auto xl:h-screen flex flex-col items-center xl:justify-center gap-y-4'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-6 xl:px-0 h-[64px] bg-white/10 xl:h-max py-6 backdrop-blur-sm text-3xl xl:text-xl rounded-full shadow-lg'>
        {
          navData.map((item, index) => {
            return (
              <Link className={`${item.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transiction-all duration-300`} href={item.path} key={index}>
                <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                  <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                    <div className='text-[12px] leading-none font-semibold capitalize'>
                      {item.name}
                    </div>

                    <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>

                    </div>
                  </div>
                </div>
                <div className='p-5 md:p-1'>
                  {item.icon}
                </div>
              </Link>
            )
          })
        }
      </div>
    </nav>
  )
};

export default Nav;
