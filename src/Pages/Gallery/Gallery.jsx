import { useState, useRef, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import GalleryCard from "./GalleryCard";
import GalleryBanner from "./GalleryBanner";
import Spinner from "../../components/Spinner/Spinner";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";


const Gallery = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [review, setReview] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const modalRef = useRef(null); // Ref for the modal element
    const [getReview, setGetReview] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the required fields are filled
        if (!image || !review) {
            setError("Please fill in all fields.");
            return;
        }

        setIsLoading(true);

        const reviewData = {
            image,
            review,
            buyer: {
                email: user?.email,
                name: user?.displayName,
                photo: user?.photoURL,
            },
        };

        try {
            // Post review data to the server
            await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, reviewData);
            toast.success('Your review has been added successfully!');
            // Fetch updated review data
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/reviews`);
            setGetReview(data); // Update state with the new data
            // Clear form fields and close modal
            setImage("");
            setReview("");
            setError("");
            modalRef.current.close();
        } catch (err) {
            console.log(err);
            toast.error('Failed to add your review. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddButtonClick = () => {
        if (!user) {
            // Redirect to login page if user is not logged in
            navigate('/login');
        } else {
            setImage(""); // Clear image input field
            setReview(""); // Clear review input field
            setError(""); // Clear error message
            modalRef.current.showModal();
        }
    };

    const handleCancelClick = () => {
        setImage(""); // Clear image input field
        setReview(""); // Clear review input field
        setError(""); // Clear error message
        modalRef.current.close(); // Close the modal
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch review data from the server
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/reviews`);
                setGetReview(data); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData(); // Fetch data on component mount
    }, []);

    if(loading){
       return <Spinner className="w-full mx-auto text-center"/>
    }

    return (
        <div className="container mx-auto my-10">
            <Helmet>
                <title>Art Food | Gallery</title>
            </Helmet>
            <GalleryBanner/>
            <div className="text-center">
                {user ? (
                    <button className="btn-lg my-5" onClick={handleAddButtonClick}>
                        <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Add Feedback</span>
                        </a>
                    </button>
                ) : (
                    <button className="btn my-10" onClick={() => navigate('/login')}>Add Feedback</button>
                )}
               
                <dialog id="my_modal_1" className="modal" ref={modalRef}>
                    <div className="modal-box">
                        <form onSubmit={handleSubmit}>
                            <h3 className="font-bold text-lg">Name: {user?.displayName}</h3>
                            {error && <p className="text-red-500">{error}</p>}
                            <input
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="Photo URL"
                                type="text"
                                name="image"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            />
                            <textarea
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name="review"
                                id="review"
                                placeholder="Your experience..."
                            ></textarea>
                            <div className="flex justify-between">
                                <button type="submit" className="btn mt-3" disabled={isLoading}>
                                    {isLoading ? "Submitting..." : "Submit"}
                                </button>
                                <button type="button" className="btn btn-secondary mt-3" onClick={handleCancelClick}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
            <div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[100%] h-[100%] gap-5 mx-auto mt-5">
                    {getReview.map((review) => (
                        <GalleryCard key={review._id} setReview={review}></GalleryCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
