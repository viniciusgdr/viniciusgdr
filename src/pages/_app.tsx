import Layout from '@viniciusgdr/components/Layout'
import './globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import Transition from '@viniciusgdr/components/Transition'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';

export default function RootLayout({ Component, pageProps }: {
  Component: any,
  pageProps: any
}) {
  const router = useRouter()

  return (
    <Layout>
      <NextSeo
        defaultTitle="Carlos Vinicius"
        description="Carlos Vinicius - Desenvolvedor Web"
        canonical='https://viniciusgdr.com'
        openGraph={{
          url: 'https://viniciusgdr.com',
          title: 'Carlos Vinicius',
          description: 'Carlos Vinicius - Desenvolvedor Web',
          images: [
            {
              url: 'https://viniciusgdr.com/og-image.png',
              width: 1200,
              height: 630,
              alt: 'Carlos Vinicius - Desenvolvedor Web',
            },
          ],
          site_name: 'Carlos Vinicius',
        }}
        twitter={{
          handle: '@viniciusgdr1',
          site: '@viniciusgdr1',
          cardType: 'summary_large_image',
        }}
        themeColor='#000000'
        titleTemplate='%s | Carlos Vinicius'
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/logo.png',
          },
        ]}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
          },
          {
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black',
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Carlos Vinicius',
          },
          {
            name: 'theme-color',
            content: '#000000',
          },
        ]}
        languageAlternates={[
          {
            hrefLang: 'pt-BR',
            href: 'https://viniciusgdr.com',
          },
        ]}
      />
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}
