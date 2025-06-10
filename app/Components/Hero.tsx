import Image from 'next/image';
import download from "../assets/herosectionimage.svg"
import frame from "../assets/Frame 48096201.svg"
import playstore from "../assets/playstoreimage.svg"
import storeplay from "../assets/Storeimage.svg"

export default function Hero() {
    return (
        <div className="bg-[#fef8ee]">
            <div className="flex flex-col md:flex-row items-center px-6 md:px-12 py-8 gap-8">
                {/* Left: Text Content */}
                <div className="flex flex-col gap-10 flex-1">
                    <p className="text-[#f28211] text-[1.35rem]">One App. Every payment. Zero Stress</p>
                    <h1 className="text-[#411a09] text-[2rem] md:text-[3.5rem] font-bold leading-tight">
                        Simplify Every Payment  with One Powerful App
                    </h1>
                    <p className="text-[1.1rem] md:text-[1.5rem] text-[#333]">
                        Billia lets you pay bills, top up airtime, buy data, and manage <br className="hidden md:block" />
                        your wallet &ndash; all in one place. Fast. Secure. Reliable
                    </p>

                    {/* Download Buttons */}
                    <div className="flex gap-6 flex-wrap">
                        <button className="flex items-center gap-3 w-60 h-20 relative text-left px-4 py-3 rounded-xl text-base cursor-pointer">
                            <Image
                                src={playstore}
                                alt="Google Play Store"
                                fill="contain"
                            />
                        </button>

                        <button className="flex items-center gap-3 w-60 h-20 relative text-left px-4 py-3 rounded-xl text-base cursor-pointer">
                            <Image
                                src={storeplay}
                                alt="Apple App Store"
                                 fill="contain"
                            />
                        </button>
                    </div>

                    {/* Community */}
                    <div className="flex items-center gap-4 border rounded-full px-4 py-2 text-sm w-full max-w-[20rem]">
                        <Image
                            src={frame}
                            alt="Community users"
                            width={80}
                            height={40}
                            className="w-20 h-10"
                        />
                        <p className="text-[10px]">Join 20,000+ Nigerians making payments smarter every day.</p>
                    </div>


                </div>

                {/* Right: Hero Image */}
                <div className="flex-1">
                    <Image
                        src={download}
                        alt="Hero image"
                        width={640}
                        height={870}
                        className="w-full h-auto max-w-[640px]"
                    />
                </div>
            </div>
        </div>
    );
}
