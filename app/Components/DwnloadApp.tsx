import Image from 'next/image';
import mobile from "../assets/image 9.svg"
import playstore from "../assets/playstoreimage.svg"
import storeplay from "../assets/Storeimage.svg"

const DwnloadApp = () => {
  return (
    <section className='px-4 md:px-24 py-12 md:py-24 overflow-x-hidden'>
      <div className='flex flex-col md:flex-row gap-8 bg-[#fef8ee] rounded-[3rem] p-6 md:p-8 md:pl-24 lg:pl-[15rem] md:pt-12 items-center md:items-start text-center md:text-left'> {/* Adjusted padding, added lg:pl */}
        <div className='flex flex-col text-[#411a09] mt-8 md:mt-16 gap-8 items-center md:items-start flex-shrink-0'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
            Download Billia <br className='hidden md:block' /> Today
          </h2>
          <p className='text-base md:text-lg leading-relaxed'> 
            Fast payments, smart reminders, and secure wallet <br className='hidden md:block' /> tools - all
            inside Billia
          </p>
          <div className='flex flex-col sm:flex-row gap-4 md:gap-4 justify-center md:justify-start items-center'>
           
                <Image
                  src={playstore}
                  alt='Google Play Store'
                  width={24}
                  height={24}
                  className='h-30 w-30 object-contain'
                />
             
              <Image
                  src={storeplay}
                  alt='Apple App Store'
                  width={24}
                  height={24}
                  className='h-30 w-30 object-contain'
                />
          </div>
        </div>
       
        <div className='w-full md:flex-1 md:min-w-0 flex justify-center md:justify-end '>
          <Image
            src={mobile}
            alt='Billia app preview'  
            width={560} 
            height={500} 
            className='w-full h-auto max-w-full object-contain md:max-w-[53.7rem]'
          />
        </div>
      </div>
    </section>


  )
}

export default DwnloadApp
