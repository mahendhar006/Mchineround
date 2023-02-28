import React, { useState, useEffect } from "react";
import  firestore  from "firebase";
import firebase from "./firebase";
import ProductCard from "./productcard";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("products")
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(products);
      });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Category 1 Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
  )};
export default ProductListPage;