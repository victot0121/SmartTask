import Image from 'next/image';
import playstore from "../assets/playstoreimage.svg"
import appstore from "../assets/Storeimage.svg"

const CtaDownload = () => {
  return (
     <section className="bg-white py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#411a09] mb-6 md:mb-8 leading-tight">
          Ready to simplify your bills?
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-[#411a09] opacity-90 mb-10 md:mb-12 leading-relaxed">
          Download Billia and experience the smarter way to pay.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">

         
            <Image
              src={appstore} 
              alt="Google Play Store"
              width={150}
              height={150}
              className="mr-2"
            />
           
         
            <Image
              src={playstore} 
              alt="Apple App Store"
              width={150}
              height={150}
              className="mr-2"
            />
          
        </div>
      </div>
    </section>
  )
}

export default CtaDownload
