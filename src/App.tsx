// react
import { useEffect, useRef } from "react";

// components
import Header from "./components/header/Header";
import Footer from "./components/Footer";

// sections
import Landing from "./sections/Landing";
import Certificates from "./sections/certificates/Certificates";
import Services from "./sections/services/Services";
import Products from "./sections/products/Products";
import ContactUs from "./sections/ContactUs";
import AboutUs from "./sections/AboutUs";

// icons
import { FaWhatsapp } from "react-icons/fa";

function App() {
  const headerRef = useRef<HTMLElement>(null);
  const mainELRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // if user enter to page insted of home page => redirect him to home page
    // because there is no other pages than home page
    if (location.pathname !== "/") location.replace("/");

    const header = headerRef.current;
    const main = mainELRef.current;
    const footer = footerRef.current;

    if (header && main && footer) {
      const watcher = new ResizeObserver(() => {
        main.style.marginTop = `${header.offsetHeight}px`;

        main.style.minHeight = `calc(100vh - (${
          header.offsetHeight + footer.offsetHeight
        }px))`;
      });

      watcher.observe(header);
      return () => watcher.unobserve(header);
    }
  }, []);

  return (
    <>
      <Header ref={headerRef} />

      <main ref={mainELRef}>
        <Landing />

        <div className="relative">
          <AboutUs />
          <Certificates />
          <Services />
          <Products />
          <ContactUs />

          {/* contact on whatsapp btn */}
          <a
            aria-label="whatsapp contact link"
            rel="nofollow"
            href="https://wa.me/201094713802"
            target="_blank"
            className="sticky mt-5 bottom-5 right-5 z-[999] bg-green-500 text-white rounded-full w-12 h-12 grid place-content-center hover:bg-green-600 transition duration-200 mb-5"
          >
            <FaWhatsapp className="text-[30px]" />
          </a>
        </div>
      </main>

      <Footer ref={footerRef} />
    </>
  );
}

export default App;
