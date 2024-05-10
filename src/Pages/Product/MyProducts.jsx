import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { AuthContext } from '../../Provider/AuthProvider'

const MyProducts = () => {
  const { user } = useContext(AuthContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    getData()
  }, [user])

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/products/${user?.email}`
    )
    setProducts(data)
  }

  const handleDelete = async id => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/products/${id}`
      )
      console.log(data)
      toast.success('Delete Successful')

      //refresh ui
      getData()
    } catch (err) {
      console.log(err.message)
      toast.error(err.message)
    }
  }
  return (
    <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>My Posted Jobs</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {products.length} Job
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Image</span>
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Price</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Category</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Quantity
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                  {products.map(product => (
                    <tr key={product._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        <img className='size-20 border-4 rounded-lg border-red-400' src={product.foodImage} alt="" />
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {product.foodName}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        $ {product.price}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          <p
                            className="px-3 py-1 text-xs  rounded-full"
                          >
                            {product.foodCategory}
                          </p>
                        </div>
                      </td>
                      <td
                        
                        className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                      >
                       {product.quantity}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>

                        <div className='flex items-center gap-x-6'>
                          <Link
                            to={`/update/${product._id}`}
                            className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                              />
                            </svg>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProducts