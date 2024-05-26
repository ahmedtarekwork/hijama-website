// react
import { ComponentProps, MouseEvent, createRef, useRef } from "react";

// components
import SectionWrapper from "../../components/SectionWrapper";
import Modal, { type ModalRefType } from "../../components/Modal";
import SliderBtn from "./SliderBtn";
import CertificateCard from "./CertificateCard";

// utils
import { nanoid } from "nanoid";

// icons
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

// imgs
// hejama imgs
import hejamaImg from "../../../imgs/certificates/hejama/1.jpg";

// training
import training_1 from "../../../imgs/certificates/trainer/1.jpg";
import training_2 from "../../../imgs/certificates/trainer/2.jpeg";

// massage imgs
import img_1 from "../../../imgs/certificates/massage/1.jpeg";
import img_2 from "../../../imgs/certificates/massage/2.jpg";
import img_3 from "../../../imgs/certificates/massage/3.jpg";
import img_4 from "../../../imgs/certificates/massage/4.jpg";
import img_5 from "../../../imgs/certificates/massage/5.svg";
import img_6 from "../../../imgs/certificates/massage/6.jpg";
import img_7 from "../../../imgs/certificates/massage/7.jpeg";
import img_8 from "../../../imgs/certificates/massage/8.jpg";
import img_9 from "../../../imgs/certificates/massage/9.jpg";
import img_10 from "../../../imgs/certificates/massage/10.jpg";

const massageAndFirstAidImgs = [
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_7,
  img_8,
  img_9,
  img_10,
];
const trainingImgs = [training_1, training_2];
const imgsList = [...massageAndFirstAidImgs, ...trainingImgs, hejamaImg];

const Certificates = () => {
  const activeImgSrc = useRef("");
  const modalRef = useRef<ModalRefType>(null);
  const activeImgRef = useRef<HTMLImageElement>(null);
  const activeImgHolderRef = useRef<HTMLDivElement>(null);
  const imgHoldersList = useRef(imgsList.map(() => createRef<HTMLLIElement>()));

  const toggleActiveFromImgs = () => {
    imgHoldersList.current.map(({ current: holder }) => {
      if (holder) {
        const imgSrc = holder.querySelector("img")?.src;

        if (imgSrc) {
          holder.classList.toggle(
            "active",
            imgSrc.includes(activeImgSrc.current)
          );
        }
      }
    });
  };

  // onClick on arrow btns
  const HandleSlideImg = (mode: "previous" | "next") => {
    const lastActiveSrc = imgsList.indexOf(activeImgSrc.current);
    let finalSrcIndex = lastActiveSrc + (mode === "previous" ? -1 : 1);

    if (finalSrcIndex < 0) finalSrcIndex = imgsList.length - 1;
    if (finalSrcIndex > imgsList.length - 1) finalSrcIndex = 0;

    activeImgSrc.current = imgsList[finalSrcIndex];
    if (activeImgRef.current) activeImgRef.current.src = activeImgSrc.current;

    toggleActiveFromImgs();
  };

  const handleOpenModalClick = (e: MouseEvent<HTMLImageElement>) => {
    const currentSrc = e.currentTarget.querySelector("img")?.src || "";
    activeImgSrc.current =
      imgsList.find((src) => currentSrc.includes(src)) || "";

    modalRef.current?.toggleModal(true);
  };

  const watcher = new ResizeObserver(() => {
    const activeImg = activeImgRef.current;
    const imgHolder = activeImgHolderRef.current;

    if (activeImg && imgHolder) {
      const btnsHolderHeight =
        (imgHolder.nextElementSibling as HTMLDivElement)?.offsetHeight || 0;

      activeImg.style.height = `${
        innerWidth <= 639
          ? imgHolder.offsetHeight - btnsHolderHeight
          : imgHolder.offsetHeight
      }px`;
    }
  });

  return (
    <SectionWrapper title="الشهادات" id="certificates">
      <ul dir="ltr" className="flex gap-5 max-md:flex-col [&>*]:flex-1 ">
        {[hejamaImg, training_2].map((img, i) => {
          const imgAttr = {
            src: img,
          } as ComponentProps<"img">;
          if (i === 1) imgAttr.className = "md:w-[450px]";

          return (
            <CertificateCard
              key={nanoid()}
              className="grid place-content-center"
              imgAttr={imgAttr}
              imgHolderAttr={{
                onClick: handleOpenModalClick,
              }}
            />
          );
        })}
      </ul>

      <ul className="mt-4 massage-certificate-imgs-holder">
        {massageAndFirstAidImgs.map((img) => (
          <CertificateCard
            key={nanoid()}
            imgAttr={{
              src: img,
              className: "object-contain",
            }}
            imgHolderAttr={{
              onClick: handleOpenModalClick,
            }}
          />
        ))}
      </ul>

      <Modal
        ref={modalRef}
        afterToggleModalOpening={{
          Fn: (modal) => {
            if (modal) watcher.observe(modal);

            const src = activeImgSrc.current;
            const activeImg = activeImgRef.current;

            if (src && activeImg) {
              activeImg.src = src;
              toggleActiveFromImgs();
            }
          },
          cleanupFn: (modal) => {
            if (modal) watcher.unobserve(modal);
          },
        }}
      >
        <div className="pb-2 px-4 h-full">
          <div
            className="h-[75%] flex items-center gap-3 pb-3"
            ref={activeImgHolderRef}
          >
            <SliderBtn
              className="max-sm:hidden"
              children={<TiChevronRight />}
              onClick={() => HandleSlideImg("next")}
            />

            <div className="flex-1 h-full max-sm:flex max-sm:flex-col max-sm:gap-3 grid place-content-center">
              <img
                ref={activeImgRef}
                src={activeImgSrc.current}
                className="transition duration-[200ms] object-contain flex-1"
                alt="certificate image"
              />
              <div className="flex justify-between items-center gap-3 sm:hidden">
                <SliderBtn
                  children={<TiChevronRight />}
                  onClick={() => HandleSlideImg("next")}
                />
                <SliderBtn
                  children={<TiChevronLeft />}
                  onClick={() => HandleSlideImg("previous")}
                />
              </div>
            </div>

            <SliderBtn
              className="max-sm:hidden"
              children={<TiChevronLeft />}
              onClick={() => HandleSlideImg("previous")}
            />
          </div>

          <div className="certificate-modal-imgs-holder h-[25%] ">
            <ul
              className="flex items-center justify-start gap-3 h-full overflow-x-auto py-3"
              dir="ltr"
            >
              {imgsList.map((img, i) => (
                <li
                  ref={imgHoldersList.current[i]}
                  key={nanoid()}
                  className={
                    "relative border-[3px] border-blue-700 flex-1 max-h-full p-1 cursor-pointer modal-down-slider-img-holder scale-95 min-w-[90px]" +
                    (imgsList.indexOf(img) ===
                    imgsList.indexOf(activeImgSrc.current)
                      ? " active"
                      : "")
                  }
                  onClick={(e: MouseEvent<HTMLLIElement>) => {
                    const currentSrc =
                      e.currentTarget.querySelector("img")?.src || "";

                    const src = imgsList.find((source) =>
                      currentSrc.includes(source)
                    );

                    if (src) {
                      activeImgSrc.current = src;

                      const activeImg = activeImgRef.current;
                      if (activeImg) {
                        activeImg.src = src;

                        toggleActiveFromImgs();
                      }
                    }
                  }}
                >
                  <img
                    className="transition duration-[200ms] object-contain w-full h-full pointer-events-none"
                    src={img}
                    alt={`certificate image number ${i + 1}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </SectionWrapper>
  );
};
export default Certificates;
