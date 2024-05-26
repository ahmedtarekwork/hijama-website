// react
import {
  forwardRef,
  useEffect,
  useRef,
  createRef,
  type RefObject,
} from "react";

// components
import DarkModeBtn from "./DarkModeBtn";

// utils
import { nanoid } from "nanoid";

// icons
import { FaBars } from "react-icons/fa";

const linksList: { href: `#${string}`; content: string }[] = [
  { href: "#home", content: "الرئيسية" },
  { href: "#about-us", content: "نبذة عنا" },
  { href: "#certificates", content: "الشهادات" },
  { href: "#services", content: "خدماتنا" },
  { href: "#products", content: "منتجاتنا" },
  { href: "#contact-us", content: "تواصل معنا" },
];

const Header = forwardRef<HTMLElement>((_, ref) => {
  const headerRef = useRef<HTMLElement>(null);
  const navListRef = useRef<HTMLElement>(null);
  const navLinksListRef = linksList.map(() => createRef<HTMLAnchorElement>());

  const screenWidthToTransNav = 767;

  const toggleMenu = (open?: boolean) => {
    const list = navListRef.current;

    if (list) {
      const openFn = () => {
        list.classList.add("active");
        document.body.style.overflow = "hidden";
      };
      const closeFn = () => {
        list.classList.remove("active");
        document.body.style.removeProperty("overflow");
      };

      if (window.innerWidth <= screenWidthToTransNav) {
        /*
          toggle if there is no specifec status for open or close nav list
          => "open parameter not setted"
        */
        if (open === undefined) {
          list.classList.toggle("active");

          if (list.classList.contains("active")) {
            document.body.style.overflow = "hidden";
          } else document.body.style.removeProperty("overflow");
        }

        // there is a status for open or close nav list => "open parameter is setted"
        if (typeof open === "boolean") {
          open === true ? openFn() : closeFn();
        }
      } else {
        /*
          if the screen has space to spreed out nav link 
          => remove the active class form nav list, to make sure when screen get smaller again
          => the list won't be opend by default
        */
        closeFn();
      }
    }
  };

  useEffect(() => {
    const header =
      (ref as RefObject<HTMLElement>)?.current || headerRef.current;

    if (header) {
      const scrollFn = () => {
        navLinksListRef.map(({ current }) => {
          if (!current) return;

          const id = current.href.match(/#\S+/gi)?.[0];
          if (!id) return;

          const section = document.querySelector(id) as HTMLElement;
          if (!section) return;

          if (scrollY === 0)
            return current.classList.toggle("active", section.id === "home");

          const sectionParentOffsetTop =
            section.id === "home" ? 0 : section.parentElement?.offsetTop || 0;
          const offsetTop = section.offsetTop + sectionParentOffsetTop;

          if (
            scrollY + 150 >= offsetTop &&
            scrollY + 150 <= offsetTop + section.offsetHeight
          ) {
            if (!current.classList.contains("active"))
              current.classList.add("active");
          } else current.classList.remove("active");
        });
      };
      scrollFn();

      window.addEventListener("scroll", scrollFn);

      const watcher = new ResizeObserver(() => {
        document.documentElement.style.scrollPaddingTop = `${header.offsetHeight}px`;

        if (header.offsetWidth >= screenWidthToTransNav) toggleMenu(false);
      });
      watcher.observe(header);

      return () => {
        watcher.unobserve(header);
        window.removeEventListener("scroll", scrollFn);
      };
    }
  }, []);

  return (
    <header
      ref={ref || headerRef}
      id="app-header"
      className="dark:bg-slate-800 dark:text-white transition bg-white z-[1000] py-5 shadow-md fixed top-0 left-0 w-full"
    >
      <div className="container flex justify-between items-center gap-5">
        <div className="flex gap-4 items-center text-center">
          <button
            className="md:hidden"
            onClick={() => toggleMenu()}
            title="toggle side menu"
          >
            <FaBars />
          </button>

          <a className="relative mb-7 ml-5" href="#home">
            <h1 className="max-md:text-lg max-md:font-semibold text-2xl font-bold dark:text-blue-300 text-blue-600">
              طارق علي
            </h1>

            <p className="max-md:text-sm max-md:-left-4 absolute mt-1 -left-5 w-max dark:text-slate-400 text-slate-600 font-semibold">
              لعمل الحجامة
            </p>
          </a>
        </div>

        <nav ref={navListRef} className="flex-1">
          <ul className="flex items-center justify-center md:gap-1 max-md:flex-col">
            {linksList.map(({ href, content }, i) => (
              <li key={nanoid()}>
                <a
                  ref={navLinksListRef[i]}
                  href={href}
                  onClick={() => toggleMenu()}
                >
                  {content}
                </a>
              </li>
            ))}

            <li>
              <DarkModeBtn className="text-black trans-btn hidden theme-btn-in w-full bg-slate-500 bg-opacity-25 px-1 py-4" />
            </li>
          </ul>
        </nav>

        <DarkModeBtn className="text-black trans-btn theme-btn-out" />
      </div>
    </header>
  );
});
export default Header;
