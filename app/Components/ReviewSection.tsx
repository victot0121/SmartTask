import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import group from "../assets/Group.svg"
import star from "../assets/star.svg"
import pre from "../assets/pre.svg"

export default function ReviewSection() {
  return (
    <section className='flex flex-col items-center px-6 md:px-24 py-12 text-white bg-gradient-to-b from-[#f28211] to-[#c93106]'>
      <p className='border border-white rounded-full px-4 py-2 text-xl md:text-3xl'>Testimonials</p>
      <h4 className='text-3xl md:text-5xl pt-8 pb-24 text-center'>What Our Customers Say</h4>
      <div className='flex flex-row justify-center items-center gap-8 md:gap-8 py-8 md:py-8'>
        <button className="flex items-center justify-center w-5 h-14 md:w-10 md:h-10 bg-white rounded-full cursor-pointer mx-4 md:mx-10" aria-label="Previous testimonial">
          <FaArrowLeft className='text-lg md:text-xl text-[#2d2d2d] opacity-60' />
        </button>

        <div className='flex flex-col bg-white w-full max-w-lg md:w-[22rem] gap-4 p-4 md:gap-8 md:p-6 rounded-2xl text-[#2d2d2d]'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Image
                src={pre}
                alt="Arlene McCoy"
                width={40} 
                height={40} 
                className='w-10 h-10' 
              />
              <div className='flex flex-col text-sm md:text-base'>
                <h5 className='text-[#2d2d2d] text-base md:text-lg'>Arlene McCoy</h5> 
                <p className='opacity-60 text-xs md:text-sm'>One year of using Billia</p> 
              </div>
            </div>
            <span className='w-6 h-6 text-[#f28211]'> 
              <Image
                src={group}
                alt="Quote icon"
                width={20} 
                height={20} 
                className='w-full h-full object-contain'
              />
            </span>
          </div>
          <p className='w-full text-sm md:text-base opacity-60 leading-tight'> 
            Before Billia, I always missed my PHCN payment dates. Now I get reminders, and I can repeat past payments without filling forms. It&apos;s efficient, secure, and perfect for people like me who forget easily.
          </p>
          <div className='flex items-center justify-between mt-auto'> 
            <p className='opacity-100 text-sm md:text-base'>4 June 2025</p>
            <span className='flex items-center gap-1 opacity-100 text-sm md:text-base'>
              <Image
                src={star}
                alt="Star rating"
                width={14} 
                height={14} 
              /> 4.7/5.0
            </span>
          </div>
        </div>

        <div className='flex flex-col bg-white w-full max-w-lg md:w-[22rem] gap-4 p-4 md:gap-8 md:p-6 rounded-2xl text-[#2d2d2d]'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Image
                src={pre}
                alt="Savannah Nguyen"
                width={40}
                height={40}
                className='w-10 h-10'
              />
              <div className='flex flex-col text-sm md:text-base'>
                <h5 className='text-[#2d2d2d] text-base md:text-lg'>Savannah Nguyen</h5>
                <p className='opacity-60 text-xs md:text-sm'>Six Months of using Billia</p>
              </div>
            </div>
            <span className='w-6 h-6 text-[#f28211]'>
              <Image
                src={group}
                alt="Quote icon"
                width={20}
                height={20}
                className='w-full h-full object-contain'
              />
            </span>
          </div>
          <p className='w-full text-sm md:text-base opacity-60 leading-tight'>
            I was surprised how fast wallet funding worked. I transferred from bank to the Billia virtual account, and the money reflected instantly. I&apos;ve used it to pay my cable and internet bills ever since.
          </p>
          <div className='flex items-center justify-between mt-auto'>
            <p className='opacity-100 text-sm md:text-base'>24 April 2025</p>
            <span className='flex items-center gap-1 opacity-100 text-sm md:text-base'>
              <Image
                src={star}
                alt="Star rating"
                width={14}
                height={14}
              /> 4.5/5.0
            </span>
          </div>
        </div>

        <button className="flex items-center justify-center w-5 h-14 md:w-10 md:h-10 bg-white rounded-full cursor-pointer mx-4 md:mx-10" aria-label="Next testimonial">
          <FaArrowRight className='text-lg md:text-xl text-[#2d2d2d] opacity-60' />
        </button>
      </div>
    </section>
  );
}