/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner/Spinner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const Purchase = () => {
  const purchase = useLoaderData();
  const { user, loading } = useAuth();
  const { _id, foodImage, foodName, price, quantity, buyer } = purchase || {};
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure()

  // Use useState to store the current buying date
  const [buyingDate, setBuyingDate] = useState(Date.now());
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if purchase quantity is 0
    if (purchaseQuantity === 0) {
      return toast.error("You can't buy food not available.");
    }
  
    // Check if user is the owner of the item
    if (user?.email === buyer?.email) {
      return toast.error("Food owner is not allowed to buy!");
    }
  
    const form = e.target;
    const priceValue = parseFloat(price); // Access the price directly from the purchase data
    const email = user?.email;
  
    // Check if purchase quantity exceeds available quantity or 20
    if (purchaseQuantity > quantity) {
      return toast.error("You can't buy more than the available quantity.");
    }
  
    if (purchaseQuantity > 20) {
      return toast.error("You can't buy 20 more quantity.");
    }
  
    const purchaseData = {
      productId: _id,
      price: priceValue,
      foodName,
      purchaseQuantity,
      email,
      buyer,
      buyingDate,
      foodImage
    };
  
    try {
      // Send a POST request to the server to create a new purchase
      const { data } = await axiosSecure.post(
        `/purchase`,
        purchaseData,
      );
      console.log(data);
      toast.success("Purchase Successful!");
      // Optionally, you can redirect the user after successful purchase
      navigate('/my-order');
    } catch (error) {
      toast.success(error.response.data);
    }
  };

  if(loading){
    return <Spinner/>
  }
  

  return (
    <div className="container mx-auto my-10">

      <div className="flex flex-col md:flex-row justify-around gap-5 items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto">
        <section className="p-6 w-full bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
          <h2 className="text-lg font-semibold text-gray-700 capitalize">
            Place A Purchase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img name='foodImage' className="h-full w-[500px] rounded-xl" src={foodImage} alt="" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700" htmlFor="price">
                    Food Name
                  </label>
                  <input
                    id="foodName"
                    type="text"
                    defaultValue={foodName}
                    name="foodName"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-gray-700" htmlFor="price">
                    Price
                  </label>
                  <input
                    id="price"
                    type="number"
                    placeholder="Price"
                    name="price"
                    defaultValue={price || ""}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-gray-700" htmlFor="foodQuantity">
                    Available Quantity
                  </label>
                  <input
                    id="foodQuantity"
                    type="number"
                    placeholder="foodQuantity"
                    name="foodQuantity"
                    defaultValue={quantity}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-gray-700" htmlFor="quantity">
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    name="purchaseQuantity"
                    type="number"
                    value={purchaseQuantity}
                    onChange={(e) => setPurchaseQuantity(parseInt(e.target.value))}
                    min={1}
                    max={Math.min(quantity, 20)} // Limit purchase quantity to available quantity or 20
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                </div>
                {/* Include a hidden input field for buyingDate */}
                <input type="hidden" name="buyingDate" value={buyingDate} />
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  onClick={handleSubmit}// Disable the button if quantity is 0 or exceeds available quantity or 20
                  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Purchase
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Purchase;
