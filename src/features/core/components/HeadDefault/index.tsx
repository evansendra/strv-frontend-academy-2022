import Head from 'next/head'
import type { FC } from 'react'

export const HeadDefault: FC = () => (
  <Head>
    <meta charSet="UTF-8" />
    <title>Eventio</title>
    <meta
      name="description"
      content="A platform that allows registered users to sign up for and create events."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#323c46" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500&family=Playfair+Display&display=swap"
    />
    <meta name="msapplication-TileColor" content="#f9f9fb" />
    <meta name="theme-color" content="F9F9FB" />
    <meta property="og:title" content="Eventio" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.absolute.url" />
    <meta property="og:image" content="https://absolute.url/share-banner.png" />
  </Head>
)
