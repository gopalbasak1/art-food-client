import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Spinner from '../../components/Spinner/Spinner';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';





const AddProduct = () => {

  const {user, loading} = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure()

  const handleSubmit = async (e) => {
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
    };

    try {
      const { data } = await axiosSecure.post(`/product`, productData);
      console.log(data);
      toast.success('Product Added Successfully!');
      navigate('/my-add-products'); // Redirect to home page after successful addition
    } catch (err) {
      console.log(err);
      toast.error('Failed to Add Product');
    }
  };

  if(loading){
    return <Spinner/>
  }

  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>

      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>Post a Food Item</h2>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='foodName'>
                Food Name
              </label>
              <input id='foodName' placeholder='food item name' name='foodName' type='text' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='foodImage'>
                Food Image URL
              </label>
              <input id='foodImage' placeholder='photo url' type='text' name='foodImage' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='foodCategory'>
                Food Category
              </label>
              <input id='foodCategory' placeholder='food category' type='text' name='foodCategory' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='price'>
                Price
              </label>
              <input id='price' placeholder='price' type='number' name='price' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='foodOriginCountry'>
                Food Origin
              </label>
              <input id='foodOriginCountry' 
              placeholder='Origin Country Name'
              type='text' name='foodOriginCountry' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='quantity'>
                Quantity
              </label>
              <input id='quantity' 
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
              id='ingredients'
              placeholder='Enter Ingredients (One per line)'
            ></textarea>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='makingProcedure'
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

export default AddProduct;
