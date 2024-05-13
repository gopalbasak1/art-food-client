import bestImg from '../../assets/bestfood2.png';
import arrImg from '../../assets/right arr.png'
import art from '../../assets/art.png'
import { Link } from 'react-router-dom';

const BestFood = () => {
    return (
       <div>
         <div className='my-10 container mx-auto md:flex flex-1 justify-between items-center gap-10'>
            <div className='w-1/2 mx-auto' >
                <div>
                <img className='md:w-[500px] md:h-[400px]' src={bestImg} alt="" />
                </div>

            </div>

            <div className='md:w-1/2 mx-auto'>


                <div className='mt-6 px-5'>
                    <h3 className='text-5xl font-semibold leading-[65px]'>Best food ideas &
                    traditions in the world</h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    
                    <div>
                    <p className='text-[16px] font-medium text-[#666666] mt-10 leading-[30px]'> Codulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature.</p>
                    <div className='mt-10'>
                       <Link to='/all-foods'>
                       <button className='btn btn-error hover:bg-black border-none text-white'>
                            Explore Menu
                        </button>
                       </Link>
                    </div>
                    </div>
                        <div className='shadow-md bg-black border py-10 my-10 text-white px-5'>
                            <div className='space-y-2'>
                            <h3 className='text-xl'>Lunch</h3>
                            <p>Saturday and Sunday</p>
                            <p>Reservations from 12pm to 1.30pm</p>
                            </div>

                            <div className='pt-10 space-y-2'>
                            <h3 className='text-xl'>Dinner</h3>
                            <p>Thursday to Sunday</p>
                            <p>Reservations from 6pm to 8.45pm</p>
                            </div>
                        </div>
                    </div>

                    

                </div>

            </div>
        </div>

       </div>
    );
};

export default BestFood;