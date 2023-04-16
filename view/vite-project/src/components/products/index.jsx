import { useState, useEffect } from "react";
import { getProducts } from "./getProducts";
import Card from "./Card";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fecthProducts = async () => {
    const getData = await getProducts();
    setProducts(getData);
  };

  useEffect(() => {
    fecthProducts();
  }, []);
  console.log(products);

  return (
    <section className="w-[90%] mt-[4.5rem] mx-auto mb-[3rem]">
      <section
        to=""
        className="flex gap-[1.25rem] flex-wrap justify-items-end"
      >
        {products.map((product) => (
          <Card data={product} key={product.id} />
        ))}
      </section>
    </section>
  );
}
