import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoriesProductCard from "./CategoriesProductCard";
import axios from "axios";

const CategoriesCard = () => {
  const { name } = useParams();
  console.log(name);
  const [brandProducts, setBrandProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/categories/${name}`);
        setBrandProducts(data);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };
    getData();
  }, [name]);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold my-10">{name}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2">
        {brandProducts.map((product) => (
          <CategoriesProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;
