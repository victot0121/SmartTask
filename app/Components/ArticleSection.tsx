import Image from 'next/image';
import time from "../assets/Frame.svg"
import lock from "../assets/Frame (1).svg"
import brain from "../assets/Frame (2).svg"
import hand from "../assets/Frame (3).svg"
const ArticleSection = () => {
  return (
   <section className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#411a09] mb-12 md:mb-16 text-center md:text-left">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
         
          <div className="bg-[#fef8ee] p-8 md:p-10 lg:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden h-64 md:h-72 lg:h-80">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#411a09] mb-2 z-10">Simplicity</h3>

            <p className="text-base md:text-lg text-[#411a09] opacity-80 mb-4 z-10">
              Payments should be fast, clear, and easy – no stress.
            </p>

            <div className="flex justify-end">
              <Image
                src={time} 
                alt="Compass icon"
                width={88} 
                height={88}
                className="h-30 w-30 object-contain"
              />
            </div>
          </div>

         
          <div className="bg-[#e6ffe6] p-8 md:p-10 lg:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden h-64 md:h-72 lg:h-80">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#411a09] mb-2 z-10">Trust</h3>
            <p className="text-base md:text-lg text-[#411a09] opacity-80 mb-4 z-10">
              Your data and money are protected by real-time security and compliance.
            </p>
            <div className="flex justify-end">
              <Image
                src={lock}
                alt="Lock icon"
                width={88}
                height={88}
                className="h-30 w-30 object-contain"
              />
            </div>
          </div>

        
          <div className="bg-[#ffebe6] p-8 md:p-10 lg:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden h-64 md:h-72 lg:h-80">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#411a09] mb-2 z-10">Innovation</h3>
            <p className="text-base md:text-lg text-[#411a09] opacity-80 mb-4 z-10">
              We use smart tools like Billia AI to make bill payments smarter every day.
            </p>
            <div className="flex justify-end">
              <Image
                src={brain}
                alt="Brain icon"
                width={88}
                height={88}
                className="h-30 w-30 object-contain"
              />
            </div>
          </div>

        
          <div className="bg-[#e6f2ff] p-8 md:p-10 lg:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden h-64 md:h-72 lg:h-80">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#411a09] mb-2 z-10">People First</h3>
            <p className="text-base md:text-lg text-[#411a09] opacity-80 mb-4 z-10">
              Everything we build starts with our users’ needs and experience in mind.
            </p>
            <div className="flex justify-end">
              <Image
                src={hand} 
                alt="Handshake icon"
                width={88}
                height={88}
                className="h-30 w-30 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default ArticleSection
