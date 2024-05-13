import  { useContext, useEffect, useState } from "react";
import axios from "axios";
import AllFoodsCard from "./AllFoodsCard";

import ProductBanner from "./ProductBanner";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../Provider/AuthProvider";

const AllFoods = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const {loading} = useContext(AuthContext);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/search?foodName=${searchTerm}`);
            setProducts(data);
        } catch (error) {
            console.error("Error searching products:", error);
        }
    };

    if(loading){
        return <Spinner/>
    }

    return (
        <div className="container px-6 py-10 mx-auto">
            <div className="text-center mb-6">
                <ProductBanner/>
                
                <div className="flex items-center w-2/5 mx-auto relative my-10">
                <input
                    type="text"
                    placeholder="Search by food name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[200px] md:w-full mx-auto px-4 py-3 mb-4 -ml-10 md:ml-0 border rounded-md focus:outline-none focus:ring focus:ring-[#4a00ff]"
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 text-white btn btn-outline btn-primary rounded-md  focus:outline-none focus:ring md:absolute md:right-1 md:bottom-[17px] mb-4 md:mb-0 border-x-slate-400 md:ml-0 ml-2 btn-md"
                >
                    Search
                </button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map(product => (
                    <AllFoodsCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default AllFoods;
