import online from "./Animation - 1714407979469.json";
import secure from "./secure.json";
import money from "./money.json";
import delivery from "./delivery.json";
import Lottie from "lottie-react";

const Facility= () => {
  return (
    <div className="information-section container lg:max-w-screen-xl  my-10 mx-auto ">
      <div>
          <h2 className="text-4xl font-bold text-center my-20">We are Provided</h2>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
          <div className="transition-all-300 flex w-full items-center gap-4 rounded-lg p-5 border-2 xs:pl-[20%] sm:pl-5">
            <div className="rounded-full border-2">
              <i className="bi bi-truck flex p-3 text-[40px] text-primary-color">
              <Lottie className="h-[100px] w-[100px]" animationData={delivery} />
              </i>
            </div>
            <div>
              <h6 className="font-bold capitalize">Free shipping</h6>
              <p className="break-all text-sm text-gray-400">
                Orders over $100
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
          <div className="transition-all-300 flex w-full items-center gap-4 rounded-lg p-5 border-2 xs:pl-[20%] sm:pl-5">
            <div className="rounded-full border-2">
              <i className="bi bi-cash-coin flex p-3 text-[40px] text-primary-color">
              <Lottie className="h-[100px] w-[100px]" animationData={money} />
              </i>
            </div>
            <div>
              <h6 className="font-bold capitalize">Money back</h6>
              <p className="break-all text-sm text-gray-400">Any Problem</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
          <div className="transition-all-300 flex w-full items-center gap-4 rounded-lg p-5 border-2 xs:pl-[20%] sm:pl-5">
            <div className="rounded-full border-2">
              <i className="bi bi-shield-check flex p-3 text-[40px] text-primary-color">
              <Lottie className="h-[100px] w-[100px]" animationData={secure} />
              </i>
            </div>
            <div>
              <h6 className="font-bold capitalize">Secure payment</h6>
              <p className="break-all text-sm text-gray-400">Secured payment</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
          <div className="transition-all-300 flex w-full items-center gap-4 rounded-lg p-5 border-2 xs:pl-[20%] sm:pl-5">
            <div className="rounded-full border-2 ">
              <i className="bi bi-headset flex p-3 text-[40px] text-primary-color">
              <Lottie className="h-[100px] w-[100px]" animationData={online} />
              </i>
            </div>
            <div>
              <h6 className="font-bold capitalize">Online support</h6>
              <p className="break-all text-sm text-gray-400">Support 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
