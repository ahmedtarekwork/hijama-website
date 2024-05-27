// react
import { useState, useRef, type ComponentProps } from "react";

// components
import SectionWrapper from "../../components/SectionWrapper";
import Modal, { type ModalRefType } from "../../components/Modal";
import CertificateCard from "./CertificateCard";
import CertificatesSlider from "./CertificatesSlider";

// utils
import { nanoid } from "nanoid";

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
  const [activeImgIndex, setActiveIndexImg] = useState<number>(0);

  // refs
  const modalRef = useRef<ModalRefType>(null);

  const [showSwiper, setShowSwiper] = useState(false);

  const handleOpenModalClick = (i: number) => {
    modalRef.current?.toggleModal(true);
    setActiveIndexImg(i);
  };

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
                onClick: () =>
                  handleOpenModalClick(
                    imgsList.findIndex((image) => image.includes(img))
                  ),
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
              onClick: () =>
                handleOpenModalClick(
                  imgsList.findIndex((image) => image.includes(img))
                ),
            }}
          />
        ))}
      </ul>

      <Modal
        ref={modalRef}
        afterToggleModalOpening={{
          Fn: (_, openModal) => setShowSwiper(openModal),
        }}
      >
        <CertificatesSlider
          showSwiper={showSwiper}
          imgsList={imgsList}
          afterOpenSlider={{
            Fn: (swiper) => swiper.slideTo(activeImgIndex),
          }}
        />
      </Modal>
    </SectionWrapper>
  );
};
export default Certificates;
