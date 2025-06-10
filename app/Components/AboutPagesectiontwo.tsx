import Image from 'next/image';
import image from "../assets/image10.svg"
import image2 from "../assets/image11.svg"


const AboutPagesectiontwo = () => {
  return (
        <section className="bg-white py-16 px-4 md:px-8 lg:px-24 xl:px-32"> {/* Main section padding and background */}
      <div className="flex flex-col gap-16 md:gap-24 lg:gap-32 max-w-7xl mx-auto"> {/* about-main-details: adjusted gap for sections, added max-w and mx-auto to center */}

       
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          
          <div className="flex flex-col gap-6 md:gap-8 text-[#411a09] text-center md:text-left md:w-1/2 lg:w-2/5 xl:w-1/2"> {/* Flexible width for text on desktop */}
          
            <h3 className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl font-bold"> {/* Adjusted font sizes for responsiveness */}
              Why we Started
            </h3>
            <p className="text-base sm:text-1xl md:text-2xl lg:text-2xl leading-relaxed"> {/* Responsive font sizes */}
              We created Billia because we saw a real problem: people
              struggling with too many apps, missed due dates, and unreliable
              payment platforms.
            </p>
            <p className="text-base sm:text-1xl md:text-2xl lg:text-2xl leading-relaxed"> {/* Responsive font sizes */}
              So we built one app that brings it all together — electricity, internet,
              school fees, airtime, and even a virtual dollar card. Add Billia AI,
              and you’ve got the smartest payment experience available today.
            </p>
          </div>

          
          <div className="w-full md:w-1/2 lg:w-3/5 xl:w-1/2 flex justify-center md:justify-end flex-shrink-0 min-w-0"> {/* Image container */}
            <Image
              src={image}
              alt="Why we started image"
              width={800} 
              className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-[40rem] rounded-2xl shadow-lg object-cover" 
            />
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16">
         
          <div className="flex flex-col gap-6 md:gap-8 text-[#411a09] text-center md:text-left md:w-1/2 lg:w-2/5 xl:w-1/2"> 
          
            <h3 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold"> 
              Our Mission & Vision
            </h3>
           
            <p className="text-base sm:text-1xl md:text-2xl lg:text-2xl leading-relaxed"> 
              <span className="font-bold text-3xl sm:text-xl md:text-2xl lg:text-2xl text-[#411a09]">Mission:</span> To make bill payments effortless, intelligent, and
              accessible for everyone across Nigeria — no matter their
              background or tech level.
            </p>
            <p className="text-base sm:text-1xl md:text-2xl lg:text-2xl leading-relaxed">
              <span className="font-bold text-2xl sm:text-1xl md:text-1xl lg:text-2xl text-[#411a09]">Vision: </span>A future where anyone can manage their financial life from
              one simple, secure platform — powered by smart automation and
              trust.
            </p>
          </div>

         
          <div className="w-full md:w-1/2 lg:w-3/5 xl:w-1/2 flex justify-center md:justify-start flex-shrink-0 min-w-0"> 
            <Image
              src={image2}
              alt="Our mission and vision image"
              width={800} 
              height={800}
              className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-[40rem] rounded-2xl shadow-lg object-cover" 
            />
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutPagesectiontwo
