import { useContext, useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Spinner from "../Spinner/Spinner";


const TopFood = () => {
    const [products, setProducts] = useState([]);
    
    const { loading } = useContext(AuthContext);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/top-foods`);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching top foods:", error);
            }
        };
        getData();
    }, []);

    if(loading){
        return <Spinner/>
    }


    return (
        <div className="container px-6 py-10 mx-auto">
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Our Top Foods</h1>
                <p className="max-w-lg mx-auto mt-4 text-gray-500">
                    Discover our top 6 dishes based on customer favorites and purchase counts.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map(product => (
                    <TopFoodCard key={product._id} product={product} />
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link to='/all-foods'>
                <button
                    className=""
                    
                >
                    <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white ">All Food</span>
                    </a>
                     </button>
                </Link>
            </div>
        </div>
    );
};

export default TopFood;
