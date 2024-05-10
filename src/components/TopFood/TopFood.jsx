import TopFoodCard from "./TopFoodCard";

const TopFood = ({ products }) => {
    return (
        <div className="container px-6 py-10 mx-auto">
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Our Top Foods </h1>
                <p className="max-w-lg mx-auto mt-4 text-gray-500">
                    Discover our top 6 dishes based on customer favorites and purchase counts.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map(product => (
                    <TopFoodCard key={product._id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default TopFood;
