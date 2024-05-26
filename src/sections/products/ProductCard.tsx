import List, { type ListComponentProps } from "../../components/List";

export type ProductCardComponentProps = {
  title: string;
  img: string;
} & ListComponentProps;

const ProductCard = ({
  contentList,
  title,
  img,
}: ProductCardComponentProps) => {
  return (
    <li className="border-2 border-blue-500 p-2 rounded-md">
      <div>
        <img
          loading="lazy"
          src={img}
          alt={"product image"}
          className="max-h-[400px] object-contain mx-auto mb-5"
          width="100%"
          height="100%"
        />
      </div>
      <h3 className="title-with-line text-xl max-sm:font-semibold font-extrabold mb-7 dark:text-blue-400 text-blue-600">
        {title}
      </h3>
      <List contentList={contentList} />
    </li>
  );
};
export default ProductCard;
