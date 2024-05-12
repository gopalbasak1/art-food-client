import { useContext, useState, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [review, setReview] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const modalRef = useRef(null); // Ref for the modal element

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
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, reviewData);
            console.log(data);
            toast.success('Your review has been added successfully!');
            navigate('/gallery');
        } catch (err) {
            console.log(err);
            toast.error('Failed to add your review. Please try again later.');
        } finally {
            setIsLoading(false);
            modalRef.current.close(); // Close the modal
        }
    };

    const handleAddButtonClick = () => {
        if (!user) {
            // Redirect to login page if user is not logged in
            navigate('/login');
        } else {
            modalRef.current.showModal();
        }
    };

    return (
        <div className="container mx-auto">
            <h3 className="text-center my-10">Gallery</h3>
            <div className="text-center">
                {user ? (
                    <button className="btn" onClick={handleAddButtonClick}>Add</button>
                ) : (
                    <button className="btn" onClick={() => navigate('/login')}>Login to Add</button>
                )}
                <dialog id="my_modal_1" className="modal" ref={modalRef}>
                    <div className="modal-box">
                        <div className="modal-action">
                            <form onSubmit={handleSubmit}>
                                <h3 className="font-bold text-lg">User: {user?.displayName}</h3>
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
                                <button type="submit" className="btn" disabled={isLoading}>
                                    {isLoading ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

                <div>
                    <GalleryCard/>
                </div>

        </div>
    );
};

export default Gallery;
