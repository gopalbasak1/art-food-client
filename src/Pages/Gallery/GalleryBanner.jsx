import { GoArrowRight } from 'react-icons/go';
import banner from '../../assets/Gbanner3.jpg'

const GalleryBanner = () => {
    return (
        <div>
              <div className="hero h-[500px] " style={{backgroundImage: `url(${banner})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl md:flex items-center">
                    {/* <h1 className="mb-5 text-3xl font-bold flex items-center">Home | </h1> */}
                    <h1 className="mb-5 text-3xl font-bold flex items-center"> Gallery</h1>
                    
                    
                    </div>
                </div>
                </div>
        </div>
    );
};

export default GalleryBanner;