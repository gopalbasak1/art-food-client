import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import CategoriesFile from "./CategoriesFile";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { loading } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/categories`);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto">
      <div className="liner-container mt-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
        <h1 className="mb-[-2px] inline-block border-b-2 border-primary pb-3 text-2xl font-bold uppercase">
          Categories
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-10 mx-auto">
        {categories.map((category) => {
          return <CategoriesFile key={category._id} category={category} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
