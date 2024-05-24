// components
import SectionWrapper from "../../components/SectionWrapper";
import ProductCard from "./ProductCard";

// hooks
import useProducts from "../../hooks/useProducts";

// utils
import { nanoid } from "nanoid";

const Products = () => {
  const products = useProducts();

  return (
    <SectionWrapper id="products" title="منتجاتنا">
      <ul className="grid products-list gap-5">
        {products.map((product) => (
          <ProductCard {...product} key={nanoid()} />
        ))}
      </ul>
    </SectionWrapper>
  );
};
export default Products;
