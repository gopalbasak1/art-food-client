import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Slider = ({ image}) => {

    const [typeEffect] = useTypewriter({
        words: ['Flavors', 'Delights'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
      })

    return (
        <div
      className='w-full bg-center bg-cover h-[38rem] rounded-2xl'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex flex-col justify-end items-start w-full h-full bg-gray-900/70 rounded-2xl'>
        <div className='text-center p-10 w-full mx-auto mb-10 rounded-2xl'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl pb-10  flex flex-col items-center'>
          Discover International <span className="font-extrabold text-red-500 ml-2">{typeEffect}</span>
          </h1>
          <p className="text-lg text-slate-200 w-[600px] pb-5  mx-auto">Explore a world of culinary delights at our international restaurant. Indulge in the finest dishes from around the globe</p>
          <br />
          <Link
            to='/add-job'
            className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto className="btn border-2 btn-outline hover:bg-gradient-to-r from-green-400 to-blue-500'
          >
            Explore All Foods
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Slider;