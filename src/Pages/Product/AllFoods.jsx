import axios from "axios";
import { useEffect, useState } from "react";
import AllFoodsCard from "./AllFoodsCard";


const AllFoods = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const getData = async () => {
             const { data } = await axios(`${import.meta.env.VITE_API_URL}/products`);
                setProducts(data);
        }
        getData();
    },[]);


    return (
        <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white mb-10">All Food Foods </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(product => (
                <AllFoodsCard key={product._id} product={product}/>
            ))}
        </div>
    </div>
    );
};

export default AllFoods;