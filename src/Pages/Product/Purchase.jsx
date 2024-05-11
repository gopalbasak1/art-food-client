import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Purchase = () => {
  const purchase = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, foodImage, foodName, price, quantity, buyer } = purchase || {};

  // Use useState to store the current buying date
  const [buyingDate, setBuyingDate] = useState(Date.now());

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user?.email === buyer?.email) return toast.error("Action not permitted!");

    const form = e.target;
    console.log(form.price.value);
    const priceValue = parseFloat(form.price.value);
    const quantityValue = parseInt(form.quantity.value);
    const email = user?.email;
    

    const purchaseData = {
      productId: _id,
      price: priceValue,
      foodName,
      quantity: quantityValue,
      email,
      buyer,
      buyingDate,
      foodImage
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/purchase`,
        purchaseData
      );
      console.log(data);
      toast.success("Purchase Successful!");
      // Optionally, you can redirect the user after successful purchase
      // navigate('/my-purchases');
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to complete purchase. Please try again later.");
    }

    // Handle form submission here, including sending the buyingDate to the backend
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
        {/* Place A Bid Form */}
        <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Place A Purchase
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img name='foodImage' className="h-full w-[500px] rounded-xl" src={foodImage} alt="" />
            </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div >
                <label className="text-gray-700 " htmlFor="price">
                  Food Name
                </label>
                <input
                  id="foodName"
                  type="text"
                  defaultValue={foodName}
                  name="foodName"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="price">
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  placeholder="Price"
                  name="price"
                  defaultValue={price || ""}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="name">
                  Buyer Name
                </label>
                <input
                  id="name"
                  type="name"
                  name="name"
                  disabled
                  defaultValue={buyer?.name}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Buyer Email
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  disabled
                  defaultValue={buyer?.email}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="availableQuantity">
                  Available Quantity
                </label>
                <input
                  id="availableQuantity"
                  name="availableQuantity"
                  disabled
                  defaultValue={quantity}
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="quantity">
                  Quantity
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              {/* Include a hidden input field for buyingDate */}
              <input type="hidden" name="buyingDate" value={buyingDate} />
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
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
