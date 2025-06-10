import Image from 'next/image';
import aboutheroImage from "../assets/aboutpageherosection.svg"

const AboutSectionHero = () => {
    return (
        <section className="bg-[#fef8ee] flex items-center justify-center py-12 px-4 md:px-6 lg:px-12 xl:px-24">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24 w-full max-w-7xl">
                <div className="flex-shrink-0"> {/* Ensures image doesn't shrink too much */}
                    <Image
                        src={aboutheroImage}
                        alt="About Hero"
                        width={600}
                        height={400}
                        className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[30rem] object-cover rounded-full aspect-square"
                        style={{ borderRadius: '50% 50% 0 0', overflow: 'hidden' }}
                    />
                </div>

                <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left text-[#411a09] flex-grow"> {/* Equivalent to .hero-description, flex-grow allows it to take remaining space */}

                    <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold leading-tight">
                        Remagining How Nigerians Pay, One Bill at a Time
                    </h2>

                    <p className="text-base md:text-sm lg:text-1xl leading-relaxed">
                        At Billia, we're building more than just a payment app — we're
                        creating a smarter, simpler way for everyday Nigerians to stay
                        connected, pay their bills, and take control of their financial lives.
                    </p>
                </div>
            </div>
        </section>
    );


}

export default AboutSectionHero