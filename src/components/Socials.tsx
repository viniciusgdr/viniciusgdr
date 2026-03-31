import Link from 'next/link';
import { RiGithubLine, RiInstagramLine, RiLinkedinLine, RiMailLine } from 'react-icons/ri';
const Socials = () => {
  return (
    <div className='flex gap-x-5 items-center text-lg'>
      <Link href={'https://www.instagram.com/viniciusgdr1/'} target='_blank' rel='noopener noreferrer' aria-label='Instagram' className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/viniciusgdr/'} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.github.com/viniciusgdr/'} target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'mailto:viniciusgdr@outlook.com'} aria-label='Email' className='hover:text-accent transition-all duration-300'>
        <RiMailLine />
      </Link>
    </div>
  )
};

export default Socials;
