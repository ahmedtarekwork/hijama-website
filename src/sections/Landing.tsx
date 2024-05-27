// react
import { createRef, useEffect, useRef, type ReactNode } from "react";

// utils
import { nanoid } from "nanoid";

// slider images
import img_1 from "../../imgs/landing/1.jpg";
import img_2 from "../../imgs/landing/2.jpg";
import img_3 from "../../imgs/landing/3.jpg";
import img_4 from "../../imgs/landing/4.jpg";
import img_5 from "../../imgs/landing/5.jpg";
import img_6 from "../../imgs/landing/6.jpg";

// imgs with text array
const imgs: { img: string; text: ReactNode }[] = [
  {
    img: img_1,
    text: (
      <p>
        قال ﷺ :
        <br />
        "أَخبَرني جبريلُ أنَّ الحَجمَ أنفعُ ما تداوى به الناسُ"
      </p>
    ),
  },
  { img: img_2, text: "علاج الضعف العام و الإرهاق" },
  {
    img: img_3,
    text: (
      <p>
        علاج الآم الرقبة وتنميل الأطراف <br /> والتهاب المفاصل
      </p>
    ),
  },
  {
    img: img_4,
    text: (
      <p>
        علاج خشونة الركبة
        <br /> وعرق النسا والآم اسفل الظهر
      </p>
    ),
  },
  {
    img: img_5,
    text: (
      <p>
        تنشيط وزيادة فعالية <br /> الجهاز المناعي
      </p>
    ),
  },
  {
    img: img_6,
    text: "تنظيم وتنشيط الدورة الدموية",
  },
];

const Landing = () => {
  const imgHoldersRefs = imgs.map(() => createRef<HTMLLIElement>());
  const textRefs = imgs.map(() => createRef<HTMLLIElement>());
  const transitionTime = 400;

  let interval = 0;
  const activeIndex = useRef(0);

  const slideingFn = () => {
    imgHoldersRefs.forEach(
      (img) =>
        img.current &&
        (img.current.style.translate = `${activeIndex.current * 100}%`)
    );

    textRefs.forEach((el, i) => {
      if (el.current) {
        if (activeIndex.current === i) {
          el.current.style.translate = "0";
        } else {
          el.current.style.translate = "0 10px";
          el.current.style.opacity = "0";

          setTimeout(
            () => el.current && (el.current.style.translate = "0 -150px"),
            transitionTime
          );
        }

        el.current.style.opacity = activeIndex.current === i ? "1" : "0";
      }
    });
  };

  const intervalFn = () => {
    clearInterval(interval);

    interval = setInterval(() => {
      if (activeIndex.current + 1 > imgHoldersRefs.length - 1)
        activeIndex.current = 0;
      else activeIndex.current += 1;

      slideingFn();
    }, 5000);
  };

  useEffect(() => {
    intervalFn();

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative overflow-hidden">
      <ul
        className="flex items-stretch justify-center bg-blue-900"
        style={{
          width: `${imgs.length * 100}%`,
        }}
      >
        {imgs.map(({ img }, i) => {
          return (
            <li
              ref={imgHoldersRefs[i]}
              key={nanoid()}
              className="flex-1 relative landing-slider-img-wrapper"
              style={{
                translate: `${activeIndex.current * 100}%`,
                transition: transitionTime + "ms",
              }}
            >
              <img
                src={img}
                alt={`landing slide image number ${i}`}
                className="object-contain w-full h-full"
                width="100%"
                height="100%"
              />
            </li>
          );
        })}
      </ul>

      <ul>
        {imgs.map(({ text }, i) => (
          <li
            ref={textRefs[i]}
            key={nanoid()}
            className="px-5 w-full text-center font-bold max-sm:font-semibold text-4xl max-sm:text-xl leading-[50px] z-10 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              opacity: activeIndex.current === i ? "1" : "0",
              transition: `translate ${transitionTime}ms, opacity 300ms`,
              translate: activeIndex.current === i ? "0" : "0 -150px",
            }}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Landing;
