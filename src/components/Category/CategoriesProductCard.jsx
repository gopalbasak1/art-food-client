/* eslint-disable react/prop-types */
import { Link} from "react-router-dom";

const CategoriesProductCard = ({ product }) => {
  const { _id, foodName,foodImage, foodCategory, price } = product;
console.log(product);
  return (
    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="w-1/3 bg-cover" style={{
        backgroundImage: `url(${foodImage})`,
      }}></div>

    <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">{foodName}</h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{foodCategory}</p>


        <div className="flex justify-between mt-3 item-center">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${price}</h1>
            <Link to={`/product/${_id}`}>
            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Details</button>
            </Link>
        </div>
    </div>
</div>
  );
};

export default CategoriesProductCard;
