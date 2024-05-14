import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import img1 from '../../assets/01.svg'
import img2 from '../../assets/02.svg'
import img3 from '../../assets/03.svg'
import img4 from '../../assets/04.svg'
import img5 from '../../assets/05.svg'

const Sponsor = () => {
    return (
        <div className="container mx-auto my-20 px-2">

            <div className="text-xl font-bold pb-10  w-full">
                <h2 className="pb-2">GLOBAL <span className="text-[#ffc222]">5K+</span> HAPPY SPONSORS WITH US</h2>
                <hr className="w-[393px] border-2 border-[#62918b]" />
            </div>

            <Marquee pauseOnHover={true} speed={70}>
                <div className="flex items-center">
                <Link >
                    <img className="mr-20" src={img1} alt="" />
                </Link>
                <Link>
                    <img className="mr-20" src={img2} alt="" />
                </Link>
                <Link>
                    <img className="mr-20" src={img3} alt="" />
                </Link>
                <Link>
                    <img className="mr-20" src={img4} alt="" />
                </Link>
                <Link>
                    <img src={img5} alt="" />
                </Link>
                </div>
            </Marquee>
        </div>
    );
};

export default Sponsor;