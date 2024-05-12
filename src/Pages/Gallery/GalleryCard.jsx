import './GalleryCard.css'

const GalleryCard = ({setReview}) => {

        const {image, buyer, review} = setReview || {};

    return (
        <div >
           <div className="card w-96 md:w-[300px] lg:w-[320px] h-[500px] mx-auto ">
           <img src={image} alt="" />
           <div className="card-container">
            <h2 className='card-title'> {buyer?.name}</h2>
            <p className="card-sub-title">{`"${review}"`}</p>

           </div>
           </div>
        </div>
    );
};

export default GalleryCard;