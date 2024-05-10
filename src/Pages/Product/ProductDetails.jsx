import { Link, useLoaderData } from 'react-router-dom';
import logo from '../../assets/logo.jpeg'
import { FaRegHandPointRight } from 'react-icons/fa';
import { SiHomebridge } from 'react-icons/si';
import { IoPersonOutline } from 'react-icons/io5';


const ProductDetails = () => {

    const product = useLoaderData();

    const {_id,foodName, foodImage, foodCategory,quantity, price, foodOriginCountry, description, buyer} = product || {};

    const {ingredients, makingProcedure} = description || {}; 

    return (

    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:py-16 h-full lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">{foodName}</h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">Price: ${price}</p>
                <p className="mt-4 text-gray-600 dark:text-gray-300 flex items-center gap-2"><SiHomebridge/> Food Origin Country: {foodOriginCountry}</p>
                <p className="mt-4 text-gray-600 dark:text-gray-300 flex items-center gap-2"><IoPersonOutline /> Made By: {buyer.name}</p>

                <div className='my-8'>
                    <h3 className="text-xl font-bold underline mb-5">Ingredients: </h3>
                    <div>
                        <ul className='grid grid-cols-2'>
                            {
                                ingredients && ingredients.map((ingredient, index) => (
                                    <li className='flex items-center gap-2' key={index}>
                                        <span><FaRegHandPointRight /></span>
                                    <p>{ingredient}</p>
                                    </li>
                                ))
                            }
                        </ul>

                        <h2 className="text-xl font-semibold mt-4 mb-2">Making Procedure:</h2>
                         <p>{makingProcedure}</p>
                    </div>
                </div>
                <div>
                    <Link to={`/purchase/${_id}`}>
                    <button className=''><a href="#_" className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Purchase Now</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a></button>
                    </Link>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-full lg:w-1/2">
            <img className='object-cover w-full h-full max-w-2xl rounded-md' src={logo} alt="" />
        </div>
    </div>

    );
};

export default ProductDetails;