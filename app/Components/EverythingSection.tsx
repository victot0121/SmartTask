import Image from 'next/image';
import cardImage from "../assets/Group 139.svg"
import Airtel from "../assets/Group 138.svg"
import personal from "../assets/Group 140.svg"

const EverythingSection = () => {
  return (
    <section className="flex flex-col items-center gap-8 px-6 py-12">
      <div className="w-full max-w-6xl text-center">
        <h3 className="text-2xl font-semibold mb-8">Everything You Need to Pay Smarter</h3>
        {/* Top two cards */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          {/* All-in-one Bill Payments */}
          <div className="bg-blue-100 rounded-xl p-6 shadow-md w-full lg:w-1/2 text-left">
            <h4 className="text-xl font-semibold mb-2">All-in-one Bill Payments</h4>
            <p className="text-gray-700 mb-4">
              Pay for Electricity, TV, internet, education, and <br /> betting - all in seconds.
            </p>
            <Image
              src={personal}
              alt="Bill Payments Icon"
              width={100}
              height={100}
              className="w-45 h-45 flex align-center justify-center mx-auto mb-4"
            />
          </div>

          {/* Airtime & Data Top-Up */}
          <div className="bg-green-100 rounded-xl p-6 shadow-md w-full lg:w-1/2 text-left">
            <h4 className="text-xl font-semibold mb-2">Airtime & Data Top-Up</h4>
            <p className="text-gray-700 mb-4">
              Buy airtime and mobile data for yourself or others <br /> - instantly and globally.
            </p>
            <Image
              src={Airtel}
              alt="Airtime and Data Icon"
              width={100}
              height={100}
              className="w-45 h-45 flex align-center justify-center mx-auto mb-4"
            />
          </div>
        </div>

        {/* Virtual Dollar Card */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-md w-full text-left flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-2">Virtual Dollar Card</h4>
            <p className="text-gray-700">
              Shop globally with your own secure virtual dollar <br /> card - perfect for subscriptions and online <br /> payments.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <Image
              src={cardImage}
              alt="Virtual Dollar Card"
              width={200}
              height={120}
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverythingSection;
