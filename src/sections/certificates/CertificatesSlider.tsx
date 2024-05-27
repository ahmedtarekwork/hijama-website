// react
import { useEffect, useRef, useState, type CSSProperties } from "react";

import {
  Swiper,
  SwiperSlide,
  type SwiperRef,
  type SwiperClass,
} from "swiper/react";
import { FreeMode, Navigation, Thumbs, Scrollbar } from "swiper/modules";

// swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";

// utils
import { nanoid } from "nanoid";
import SliderBtn from "./SliderBtn";

type Props = {
  showSwiper: boolean;
  imgsList: string[];
  afterOpenSlider?: {
    Fn: (swiper: SwiperClass) => void;
    cleanerFn?: (swiper: SwiperClass) => void;
  };
};

const CertificatesSlider = ({
  showSwiper,
  imgsList,
  afterOpenSlider,
}: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // refs
  const swiperRef = useRef<SwiperRef | null>(null);

  const smallerSliderNextBtnRef = useRef<HTMLButtonElement>(null);
  const smallerSliderPrevBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (afterOpenSlider) {
      const { cleanerFn, Fn } = afterOpenSlider;
      const swiper = swiperRef.current?.swiper;
      if (swiper) {
        Fn(swiper);

        if (cleanerFn) return () => cleanerFn(swiper);
      }
    }
  }, [showSwiper]);

  return (
    showSwiper && (
      <div className="px-4 pb-4 h-full select-none certificates-modal-sliders-holder">
        <div className="flex items-center h-[95%] mb-4 gap-2">
          <Swiper
            className="self-stretch"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={swiperRef as any}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".bigger-slider-prev-btn",
              nextEl: ".bigger-slider-next-btn",
            }}
            grabCursor={true}
            style={
              {
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              } as CSSProperties
            }
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
          >
            ;
            {imgsList.map((img, i) => (
              <SwiperSlide
                key={nanoid()}
                style={{
                  padding: 5,
                }}
              >
                <img
                  className="object-contain w-full h-full pointer-events-none"
                  src={img}
                  alt={`certificate image number ${i + 1}`}
                  width="100%"
                  height="100%"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <SliderBtn
            direction="next"
            name="bigger-slider-prev-btn max-sm:hidden sm:-order-[1]"
          />
          <SliderBtn
            direction="prev"
            name="bigger-slider-next-btn max-sm:hidden"
          />
        </div>

        <div className="flex gap-1 items-center certificates-smaller-slider">
          <SliderBtn
            ref={smallerSliderNextBtnRef}
            direction="next"
            name="smaller-slider-next-btn"
          />

          <Swiper
            navigation={{
              nextEl: ".smaller-slider-prev-btn",
              prevEl: ".smaller-slider-next-btn",
            }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onSwiper={setThumbsSwiper as any}
            onSlideChange={(swiper) => {
              // rich "start or end" of slider
              const isStart = swiper.isBeginning;
              const isEnd = swiper.isEnd;

              // slider btns
              const startBtn = smallerSliderNextBtnRef.current;
              const endBtn = smallerSliderPrevBtnRef.current;

              if (startBtn && endBtn) {
                if (isStart) {
                  startBtn.disabled = true;
                  endBtn.disabled = false;
                } else if (isEnd) {
                  endBtn.disabled = true;
                  startBtn.disabled = false;
                } else {
                  endBtn.disabled = false;
                  startBtn.disabled = false;
                }
              }
            }}
            slidesPerView={1}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs, Scrollbar, FreeMode]}
            freeMode={true}
            scrollbar={true}
            grabCursor={true}
            centeredSlides={false}
            slidesPerGroupSkip={5}
            breakpoints={{
              769: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              550: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              450: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
              },
              1: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
              },
            }}
          >
            {imgsList.map((img, i) => (
              <SwiperSlide key={nanoid()}>
                <img
                  className="object-contain w-full h-full pointer-events-none"
                  src={img}
                  alt={`small certificate image number ${i + 1}`}
                  width="100%"
                  height="100%"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <SliderBtn
            ref={smallerSliderPrevBtnRef}
            direction="prev"
            name="smaller-slider-prev-btn"
          />
        </div>
      </div>
    )
  );
};
export default CertificatesSlider;
