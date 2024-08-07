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

// AUPS
import AUPS_1 from "../../../imgs/certificates/AUPS/1.jpg";
import AUPS_2 from "../../../imgs/certificates/AUPS/2.jpg";
import AUPS_3 from "../../../imgs/certificates/AUPS/3.jpg";

// hejama imgs
import hejamaImg from "../../../imgs/certificates/hejama/1.webp";
import hejamaImg_2 from "../../../imgs/certificates/hejama/2.jpg";
import hejamaImg_3 from "../../../imgs/certificates/hejama/3.png";

// bee venom
import bee_venom from "../../../imgs/certificates/bee_venom/1.svg";
import bee_venom_2 from "../../../imgs/certificates/bee_venom/2.jpg";

// massage imgs
import img_1 from "../../../imgs/certificates/massage/1.jpg";
import img_2 from "../../../imgs/certificates/massage/2.jpg";
import img_3 from "../../../imgs/certificates/massage/3.jpg";
import img_4 from "../../../imgs/certificates/massage/4.jpg";

// training
import training_1 from "../../../imgs/certificates/training/1.svg";
import training_2 from "../../../imgs/certificates/training/2.svg";

// cards
import card_1 from "../../../imgs/certificates/cards/1.jpg";
import card_2 from "../../../imgs/certificates/cards/2.svg";
import card_3 from "../../../imgs/certificates/cards/3.jpg";
import card_4 from "../../../imgs/certificates/cards/4.jpeg";
import card_5 from "../../../imgs/certificates/cards/5.jpg";
import card_6 from "../../../imgs/certificates/cards/6.jpg";
import card_7 from "../../../imgs/certificates/cards/7.svg";

const AUPS = [AUPS_1, AUPS_2, AUPS_3];
const hijamaImgs = [hejamaImg, hejamaImg_2, hejamaImg_3];
const beeVenom = [bee_venom, bee_venom_2];
const massageAndFirstAidImgs = [img_1, img_2, img_3, img_4];
const training = [training_1, training_2];
const cards = [card_1, card_2, card_3, card_4, card_5, card_6, card_7];

const imgsList = [
  ...AUPS,
  ...hijamaImgs,
  ...beeVenom,
  ...massageAndFirstAidImgs,
  ...training,
  ...cards,
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
