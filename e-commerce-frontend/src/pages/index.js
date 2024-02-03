import React from "react";
import ProductList from "../components/ProductList";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: "$35",
    description: "This is a Description",
    brand: "Supreme"
  },
  {
    id: 2,
    name: "Basic Tee",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: "$35",
    description: "This is a Description",
    brand: "Supreme"
  },
  {
    id: 3,
    name: "Basic Tee",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: "$35",
    description: "This is a Description",
    brand: "Supreme"
  },
  {
    id: 4,
    name: "Basic Tee",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: "$35",
    description: "This is a Description",
    brand: "Supreme"
  }
];

function Index() {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default Index;
