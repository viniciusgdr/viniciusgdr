import Layout from '@viniciusgdr/components/Layout'
import './globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import Transition from '@viniciusgdr/components/Transition'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

const SITE_URL = 'https://viniciusgdr.com';
const SITE_NAME = 'Carlos Vinicius (viniciusgdr)';
const DEFAULT_DESCRIPTION = 'Carlos Vinicius (viniciusgdr) — Desenvolvedor fullstack especializado em aplicações web e mobile com Node.js, React, Next.js, TypeScript e Docker. Portfolio, projetos e contato.';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Carlos Vinicius',
  alternateName: ['viniciusgdr', 'vinicius gdr', 'gdr'],
  url: SITE_URL,
  jobTitle: 'Desenvolvedor Fullstack',
  knowsAbout: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Docker', 'Clean Architecture', 'Go', 'Python'],
  sameAs: [
    'https://github.com/viniciusgdr',
    'https://linkedin.com/in/viniciusgdr',
  ],
};

export default function RootLayout({ Component, pageProps }: {
  Component: any,
  pageProps: any
}) {
  const router = useRouter()

  return (
    <Layout>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </Head>
      <DefaultSeo
        defaultTitle={`Carlos Vinicius (viniciusgdr) — Desenvolvedor Fullstack`}
        description={DEFAULT_DESCRIPTION}
        canonical={SITE_URL}
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: SITE_URL,
          siteName: SITE_NAME,
          title: 'Carlos Vinicius (viniciusgdr) — Desenvolvedor Fullstack',
          description: DEFAULT_DESCRIPTION,
          images: [
            {
              url: `${SITE_URL}/og-image.png`,
              width: 1200,
              height: 630,
              alt: 'Carlos Vinicius (viniciusgdr) — Desenvolvedor Fullstack',
            },
          ],
        }}
        twitter={{
          handle: '@viniciusgdr1',
          site: '@viniciusgdr1',
          cardType: 'summary_large_image',
        }}
        themeColor='#000000'
        titleTemplate='%s | viniciusgdr — Carlos Vinicius'
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/CV.png',
          },
        ]}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'keywords',
            content: 'viniciusgdr, vinicius gdr, gdr, carlos vinicius, desenvolvedor fullstack, developer, portfolio, react, next.js, node.js, typescript, docker',
          },
          {
            name: 'author',
            content: 'Carlos Vinicius (viniciusgdr)',
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
            content: 'viniciusgdr',
          },
          {
            name: 'theme-color',
            content: '#000000',
          },
        ]}
        languageAlternates={[
          {
            hrefLang: 'pt-BR',
            href: SITE_URL,
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
