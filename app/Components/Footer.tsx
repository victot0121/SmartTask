import Link from 'next/link';
import Image from 'next/image';
import Logo2 from "@/app/assets/logotwo.svg";
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#f28211] to-[#c93106] text-white">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-8 max-w-md">
          <Image
            src={Logo2}
            alt="Billia Logo"
            width={150}
            height={50}
            className="object-contain"
          />
          <p className="text-lg leading-relaxed">
            Our all-in-one app for bills, airtime, data, and smart payments — powered by Billia AI.
          </p>
          <div className="flex gap-6 text-2xl items-center">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaXTwitter className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        <div className="flex gap-16 flex-wrap">
          <ul className="space-y-3 min-w-[140px]">
            <h5 className="font-semibold text-xl mb-4">Company</h5>
            <li><Link href="/about" className="hover:underline">About us</Link></li>
            <li>Features</li>
            <li>Testimonials</li>
            <li>Services</li>
            <li>FAQ</li>
          </ul>

          <ul className="space-y-3 min-w-[140px]">
            <h5 className="font-semibold text-xl mb-4">Legal</h5>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>

          <ul className="space-y-3 min-w-[140px]">
            <h5 className="font-semibold text-xl mb-4">Contact Us</h5>
            <li>Billiainfo@gmail.com</li>
            <li>08023437727</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white text-center py-6 text-lg select-none">
        &copy; 2025 Billia Technologies. All rights reserved.
      </div>
    </footer>
  );
}
