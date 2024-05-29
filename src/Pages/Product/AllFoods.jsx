/* eslint-disable no-unused-vars */
import  { useContext, useEffect, useState } from "react";
import axios from "axios";
import AllFoodsCard from "./AllFoodsCard";

import ProductBanner from "./ProductBanner";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../Provider/AuthProvider";


const AllFoods = () => {
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const {loading} = useContext(AuthContext);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-products?page=${currentPage}&size=${itemsPerPage}`);
                setProducts(data);
                
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, [currentPage, itemsPerPage]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products-count`);
                setCount(data.count)
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);

    console.log(count);

    const handlePaginationButton=(value)=>{
        console.log(value);
        setCurrentPage(value)

    }

    const handleSearch = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/search?foodName=${searchTerm}`);
            setProducts(data);
            setSearchTerm('')
        } catch (error) {
            console.error("Error searching products:", error);
        }
        
    };

    if(loading){
        return <Spinner/>
    }

    const numberOfPages = Math.ceil(count/itemsPerPage)

    const pages =[...Array(numberOfPages).keys()].map(element => element + 1)

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
            <div className='flex justify-center mt-12'>

        {/* Previous Button */}
        <button
        disabled={currentPage === 1}
         onClick={() => handlePaginationButton(currentPage - 1)}
          className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'
        >
          <div className='flex items-center -mx-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>

            <span className='mx-1'>previous</span>
          </div>
        </button>
        {/* Numbers */}
        {pages.map(btnNum => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? 'bg-blue-500 text-white' : ''
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* Next Button */}
        <button
        disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
        >
          <div className='flex items-center -mx-1'>
            <span className='mx-1'>Next</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>
        </button>
      </div>
        </div>
    );
};

export default AllFoods;
