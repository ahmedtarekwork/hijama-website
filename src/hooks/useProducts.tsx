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
        "آلام المفاصل و العظام",
        "التهابات المرارة وحصوات الكلي و المرارة",
        "التهابات البروستاتا",
      ],
      img: plants,
    },

    {
      title: "كريمات لعلاج كل من:",
      contentList: [
        "خشونة الركبة وآلام المفاصل والعمود الفقري",
        "حبوب الشباب و الإلتهابات الجلدية",
      ],
      img: cream,
    },

    {
      title: "منتجات عسل النحل",
      contentList: [
        "عسل نحل طبيعي 100%",
        "تركيبة عسل نحل للطاقة و القوة",
        "تركيبة عسل نحل لعلاج العقم عند الرجال والنساء",
      ],
      img: honey,
    },

    {
      title: "تركيبات زيوت لعلاج كل من:",
      contentList: [
        "تساقط الشعر والقشرة وتقوية  وإطالة الشعر",
        "حبوب الشباب و الإلتهابات الجلدية",
        "خشونة الركبة والتهاب المفاصل",
      ],
      img: oliveOil,
    },
  ];
};

export default useProducts;
