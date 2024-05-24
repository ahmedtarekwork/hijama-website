import List from "../components/List";

// imgs & videos
import hijama from "../../imgs/services/1.jpg";
import massage from "../../imgs/services/2.mp4";
import fireTowel from "../../imgs/services/3.mp4";
import worm from "../../imgs/services/4.jpg";
import beePoison from "../../imgs/services/5.jpg";

import { type ServicesCardComponentProps } from "../sections/services/ServicesCard";

const useServices = (): ServicesCardComponentProps[] => {
  return [
    {
      cardId: "hijama-service",
      img: { data: hijama, type: "img" },

      title: "العلاج بالحجامة",
      description: (
        <>
          <p>قال ﷺ : "إن أمثل ما تداويتم به الحجامة".</p>
          <h3 className="title-with-line font-semibold pb-2 my-5">
            من فوائد الحجامة:
          </h3>

          <List
            contentList={[
              "علاج الجلطات و الشلل النصفي",
              "علاج ارتفاع ضغط الدم",
              "علاج امراض الدم و المناعة",
              "علاج الغدة الدرقية",
              "علاج خشونة الركبة وعرق النسا وآلام اسفل الظهر",
              "علاج الصداع النصفي وآلام الرأس",
              "علاج الضعف العام و الإرهاق",
              "تحسين وتعزيز الجهاز المناعي",
            ]}
          />
        </>
      ),
      callUsBtnHref: {
        href: "https://wa.me/201094713802?text=لقد شاهدت موقعك الالكتروني واريد ان تقوم بعمل حجامة لي",
        newTab: true,
      },
    },

    {
      cardId: "massage-service",
      img: {
        data: massage,
        type: "video",
      },

      title: "التدليك العلاجي",
      description: "يقوم بعلاج خشونة الركبة وآلام الاكتاف و الرقبة وعرق النسا.",
      callUsBtnHref: {
        href: "https://wa.me/201094713802?text=لقد شاهدت موقعك الالكتروني واريد انت تقوم بالتدليك العلاجي لي",
        newTab: true,
      },
    },

    {
      cardId: "fire-towel-service",

      img: {
        data: fireTowel,
        type: "video",
      },

      title: "الفوطة النارية",
      description: "تقوم بعلاج آلام الظهر والرطوبة الزائدة في الجسم.",
      callUsBtnHref: {
        href: "https://wa.me/201094713802?text=لقد شاهدت موقعك الالكتروني واريد ان تقوم بعمل الفوطة النارية لي",
        newTab: true,
      },
    },

    {
      cardId: "insect-service",

      img: {
        data: worm,
        type: "img",
      },

      title: "العلاج بدودة العلق",
      description: "تقوم دودة العلق بعلاج خشونة الركبة والدوالي وغيرهما.",
      callUsBtnHref: {
        href: "https://wa.me/201094713802?text=لقد شاهدت موقعك الالكتروني واريد ان تقوم بعلاجي بدودة العلق",
        newTab: true,
      },
    },

    {
      cardId: "fire-towel-service",

      img: {
        data: beePoison,
        type: "img",
      },

      title: "العلاج بمصل النحل",
      description: "يقوم مصل النحل بعلاج خشونة الركبة والمفاصل وغيرهم.",
      callUsBtnHref: {
        href: "https://wa.me/201094713802?text=لقد شاهدت موقعك الالكتروني واريد ان تقوم بعلاجي بمصل النحل",
        newTab: true,
      },
    },
  ];
};

export default useServices;
