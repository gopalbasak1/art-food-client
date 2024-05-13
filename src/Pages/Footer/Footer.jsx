import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg"

const Footer = () => {
  return (
    <section className="flex flex-col border-t-2 font-poppins my-10 bg-[#c4b26252]">
      <div className="w-full ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0">
          <div className="flex flex-wrap py-10 -mx-3">
            <div className="w-full px-4 mb-11 md:w-1/2 lg:w-4/12 lg:mb-0 space-y-3">
              <a
                href="#"
                className="inline-block mb-4 text-xl font-bold text-black  "
              >
                About Company
              </a>

                <div className="flex">
                <img className="w-8 h-8 md:w-14 rounded-full mt-2" src={logo} alt="" />

                <p className="text-base font-normal leading-6  text-gray-900lg:w-64  ">
                <Link
            to="/"
            className="btn btn-ghost   md:text-3xl -ml-2"
          >
            A<span className="text-[#3e8ab6] -ml-2 -mr-2">r</span>t<span className="-ml-1 text-red-400">Food</span>
          </Link>
          <span className="-ml-3">
          has been founded on 14 May 2024. From then to
                now, Art Food has won the heart of many people and now is a
                International renowned restaurant.
          </span>
                </p>
                </div>
              
            </div>
            <div className="w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold text-black  ">
                Quick Links{" "}
              </h2>
              <ul>
                <li className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-3 h-3 mr-1 text-black bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <NavLink
                    to="/"
                    className="inline-block text-base font-normal   "
                  >
                    Home
                  </NavLink>
                </li>
                <li className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-3 h-3 mr-1 text-black bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <NavLink
                    to="/about"
                    className="inline-block text-base font-normal   "
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-3 h-3 mr-1 text-black  bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <NavLink
                    to="/all-foods"
                    className="inline-block text-base font-normal   "
                  >
                    All Foods
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 md:w-1/4 lg:w-2/12  lg:mb-0">
              <h2 className="mb-4 text-xl font-bold text-black  ">Features </h2>
              <ul>
                <li className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-3 h-3 mr-1 text-black   bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <NavLink
                    to="/my-add-products"
                    className="inline-block text-base font-normal   "
                  >
                    Add Products
                  </NavLink>
                </li>
                <li className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-3 h-3 mr-1 text-black   bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <NavLink
                    to="/my-order"
                    className="inline-block text-base font-normal   "
                  >
                    Orders
                  </NavLink>
                </li>

                <li className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-3 h-3 mr-1 text-black  bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <NavLink
                    to="/my-add-products"
                    className="inline-block text-base font-normal   "
                  >
                    My Foods
                  </NavLink>
                </li>

              </ul>
            </div>
            <div className="w-full px-4 lg:block hidden  mb-2 lg:mb-0 md:w-1/3 lg:w-4/12">
              <h2 className="mb-4 text-lg font-bold text-black  ">
                Payment With{" "}
              </h2>
              <div className="flex items-center mt-4 ">
                <img
                  src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                  alt=""
                  className="object-cover h-16 mr-2 w-26"
                />

                <img
                  src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                  alt=""
                  className="object-cover h-16 mr-2 w-26"
                />

                <img
                  src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                  alt=""
                  className="object-cover h-16 mr-2 w-26"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-center  text-white  bg-[#1d190c52]  ">
        <span>© Copyright 2024 . hand Crafts All Rights Reserved</span>
      </div>
    </section>
  );
};

export default Footer;
