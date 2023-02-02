import '@/styles/globals.css'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 1400,

      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
  });

  return <Component {...pageProps} />
}
