import { Sora } from '@next/font/google'
import TopLeftImg from './TopLeftImg';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

const Layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <div className="min-h-screen h-full bg-primary/60">
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
};

export default Layout;
