import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const UpdateProduct = () => {

    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure()
    const product = useLoaderData();

    const {
        _id,
        foodName,
        foodImage,
        quantity,
        description,
        foodOriginCountry,
        price,
        foodCategory,
      } = product || {};

      const {user} = useAuth();

    const handleUpdate = async e =>{
        e.preventDefault();
        const form = e.target
        const foodName = form.foodName.value
        const foodImage = form.foodImage.value
        const quantity = parseFloat(form.quantity.value)
        const foodCategory = form.foodCategory.value
        const foodOriginCountry = form.foodOriginCountry.value
        const price = parseFloat(form.price.value)
        const ingredients = form.ingredients.value.split('\n'); // Extract ingredients from textarea
      const makingProcedure = form.makingProcedure.value;
    
        const productData = {
          foodName,
          foodImage,
          foodCategory,
          foodOriginCountry,
          price,
          quantity,
          description : {
            ingredients,
            makingProcedure
          },
          buyer: {
            email: user?.email,
            name: user?.displayName,
            photo: user?.photoURL,
          },
        }

        try {
          
            const { data } = await axiosSecure.put(
              `/product/${_id}`,
              productData, {withCredentials: true}
            )
            console.log(data)
            toast.success('Food Data Updated Successfully!')
            navigate('/my-add-products')
          } catch (err) {
            console.log(err)
            toast.error(err.message)
          }
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>

        <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize '>Post a Food Item</h2>
  
          <form onSubmit={handleUpdate}>
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' htmlFor='foodName'>
                  Food Name
                </label>
                <input id='foodName'
                defaultValue={foodName}
                placeholder='food item name' name='foodName' type='text' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='foodImage'>
                  Food Image URL
                </label>
                <input id='foodImage'
                defaultValue={foodImage}
                 placeholder='photo url' type='text' name='foodImage' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
              </div>
  

              <div>
              <label className='text-gray-700 ' htmlFor='foodCategory'>
                Food Category
              </label>
              <select
                name='foodCategory' 
                id='foodCategory'
                defaultValue={foodCategory}
                className='border p-2 rounded-md'
              >
                <option value='Pasta'>Pasta</option>
                <option value='Sushi'>Sushi</option>
                <option value='Dessert'>Dessert</option>
                <option value='Salad'>Salad</option>
                <option value='Chicken'>Chicken</option>
                <option value='Pizza'>Pizza</option>
                <option value='Soup'>Soup</option>
                <option value='Bread'>Bread</option>
                <option value='Curry'>Curry</option>
                <option value='Meat'>Meat</option>
                <option value='Noodle'>Noodle</option>
                <option value='Beverage'>Beverage</option>
                <option value='Burger'>Burger</option>
                <option value='Fish'>Fish</option>
                <option value='Biryani'>Biryani</option>
                <option value='Others'>Others</option>
              </select>
            
            </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='price'>
                  Price
                </label>
                <input id='price'
                defaultValue={price}
                placeholder='price' type='number' name='price' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='foodOriginCountry'>
                  Food Origin
                </label>
                <input id='foodOriginCountry'
                defaultValue={foodOriginCountry}
                placeholder='Origin Country Name'
                type='text' name='foodOriginCountry' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='quantity'>
                  Quantity
                </label>
                <input id='quantity'
                defaultValue={quantity} 
                placeholder='quantity'
                type='number' name='quantity' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
              </div>

              
  
  
            </div>
            <div className='flex flex-col gap-2 mt-4'>
              <label className='text-gray-700 ' htmlFor='description'>
                Description
              </label>
              <textarea
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                name='ingredients'
                defaultValue={description.ingredients.join('\n')}
                id='ingredients'
                placeholder='Enter Ingredients (One per line)'
              ></textarea>
              <textarea
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                name='makingProcedure'
                defaultValue={description.makingProcedure}
                id='makingProcedure'
                placeholder='Enter Making Procedure'
              ></textarea>
            </div>
            <div className='flex justify-end mt-6'>
              <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    );
};

export default UpdateProduct;