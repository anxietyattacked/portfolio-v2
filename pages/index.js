import Head from "next/head";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import useWindowDimensions from "../utils/useWindowDimensions";
import { useState } from "react";

export default function Home() {
  const window = useWindowDimensions();
  let [isOpen, setIsOpen] = useState(false);
  let isMobile = window.width < 768;

  return (
    <div>
      <Head>
        <title>Portfolio | michealbergerson.com</title>
        <meta name="description" content="Michael Bergerson's Portfolio" />
        {/* Open Graph */}
        <meta
          property="og:url"
          content="https://www.michaelbergerson.com/"
          key="ogurl"
        />
        <meta
          property="og:image"
          content={"https://www.michaelbergerson.com/images/Portfolio.png"}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="michaelbergerson.com"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Portfolio | michealbergerson.com"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Michael Bergerson's Portfolio"
          key="ogdesc"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.michaelbergerson.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portfolio | michealbergerson.com" />
        <meta
          property="og:description"
          content="Michael Bergerson's Portfolio"
        />
        <meta
          property="og:image"
          content="https://www.michaelbergerson.com/images/Portfolio.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="michaelbergerson.com" />
        <meta
          property="twitter:url"
          content="https://www.michaelbergerson.com/"
        />
        <meta name="twitter:title" content="Portfolio | michealbergerson.com" />
        <meta
          name="twitter:description"
          content="Michael Bergerson's Portfolio"
        />
        <meta
          name="twitter:image"
          content="https://www.michaelbergerson.com/images/Portfolio.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Head>
      <Hero isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
