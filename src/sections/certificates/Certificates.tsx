// react
import { useRef } from "react";

// components
import SectionWrapper from "../../components/SectionWrapper";
import CertificateCard from "./CertificateCard";

import CertificatesSliderHolder, {
  type CertificatesHolderRefType,
} from "./CertificatesSliderHolder";

// utils
import { nanoid } from "nanoid";

// imgs
// bee venom
import beeVenom_1 from "../../../imgs/certificates/10.svg";

// AUPS
import AUPS_1 from "../../../imgs/certificates/AUPS/1.jpg";
import AUPS_2 from "../../../imgs/certificates/AUPS/2.jpg";
import AUPS_3 from "../../../imgs/certificates/AUPS/3.jpg";

// hejama imgs
import hejamaImg from "../../../imgs/certificates/hejama/1.jpg";
import hejamaImg_2 from "../../../imgs/certificates/hejama/2.jpg";
import hejamaImg_3 from "../../../imgs/certificates/hejama/3.png";

// training
import training_1 from "../../../imgs/certificates/trainer/1.jpg";

// massage imgs
import img_1 from "../../../imgs/certificates/massage/1.jpg";
import img_2 from "../../../imgs/certificates/massage/2.svg";
import img_3 from "../../../imgs/certificates/massage/3.jpg";
import img_4 from "../../../imgs/certificates/massage/4.jpeg";
import img_5 from "../../../imgs/certificates/massage/5.jpg";
import img_6 from "../../../imgs/certificates/massage/6.jpg";
import img_7 from "../../../imgs/certificates/massage/7.jpg";
import img_8 from "../../../imgs/certificates/massage/8.jpg";
import img_9 from "../../../imgs/certificates/massage/9.jpg";

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
];
const hijamaImgs = [hejamaImg, hejamaImg_2, hejamaImg_3];
const AUPS = [AUPS_1, AUPS_2, AUPS_3];

const imgsList = [
  ...AUPS,
  ...hijamaImgs,
  ...massageAndFirstAidImgs,
  beeVenom_1,
  training_1,
];

const Certificates = () => {
  // refs
  const certificatesHolderRef = useRef<CertificatesHolderRefType>(null);

  return (
    <SectionWrapper title="الشهادات" id="certificates">
      <ul className="mt-4 certificate-imgs-holder">
        {imgsList.map((img) => (
          <CertificateCard
            key={nanoid()}
            imgAttr={{
              src: img,
              className: "object-contain",
            }}
            imgHolderAttr={{
              onClick: () =>
                certificatesHolderRef.current?.handleOpenModalClick(
                  imgsList.findIndex((image) => image.includes(img))
                ),
            }}
          />
        ))}
      </ul>

      <CertificatesSliderHolder
        ref={certificatesHolderRef}
        imgsList={imgsList}
      />
    </SectionWrapper>
  );
};
export default Certificates;
