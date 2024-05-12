


const ProductSlider = ({ image}) => {


    return (
        <div
      className='w-full bg-center bg-cover h-[38rem] rounded-2xl'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex flex-col justify-center items-start w-full h-full bg-gray-900/70 rounded-2xl'>
        <div className='text-center p-10 w-full mx-auto rounded-2xl'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl  flex  items-center justify-center'>
          All Foods
          </h1>
        </div>
      </div>
    </div>
    );
};

export default ProductSlider;