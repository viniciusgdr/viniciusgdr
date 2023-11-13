import Layout from '@viniciusgdr/components/Layout'
import './globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import Transition from '@viniciusgdr/components/Transition'
import { useRouter } from 'next/router'
export default function RootLayout({ Component, pageProps }: {
  Component: any,
  pageProps: any
}) {
  const router = useRouter()

  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}
