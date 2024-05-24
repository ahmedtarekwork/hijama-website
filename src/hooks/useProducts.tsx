import { type ProductCardComponentProps } from "../sections/products/ProductCard";

// imgs
import plants from "../../imgs/products/1.jpg";
import cream from "../../imgs/products/2.jpg";
import honey from "../../imgs/products/3.jpg";
import oliveOil from "../../imgs/products/4.webp";

const useProducts = (): ProductCardComponentProps[] => {
  return [
    {
      title: "اعشاب لعلاج كل من:",
      contentList: [
        "القولون",
        "نزلات البرد",
        "رفع المناعة",
        "آلام الكلي والمثانة",
      ],
      img: plants,
    },

    {
      title: "كريمات لعلاج كل من:",
      contentList: [
        "خشونة الركبة وآلام المفاصل والعمود الفقري",
        "علاج فروة الرأس وتساقط الشعر والقشرة",
      ],
      img: cream,
    },

    {
      title: "منتجات عسل النحل",
      contentList: ["عسل نحل طبيعي 100%", "تركيبة عسل للطاقة و القوة"],
      img: honey,
    },

    {
      title: "الزيوت",
      contentList: ["تركيبة زيت الزيتون لعلاج الشعر"],
      img: oliveOil,
    },
  ];
};

export default useProducts;
