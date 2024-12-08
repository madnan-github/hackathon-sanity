import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn, FaClock } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-[1929px] mx-auto bg-gray-900 text-white py-12 px-6">
      <div className="w-[1170px] mx-auto mt-28 h-[56px] flex justify-between">
        <h2 className="text-2xl font-bold text-[#ff9F0D] leading-10 mb-4">
          St<span className="text-white">ill You Need Our Support?</span>
        </h2>

          <div className="relative w-[459px] ">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full h-[56px] px-5 rounded-sm bg-[#ff9F0D] placeholder-white"
            />
            <button className="absolute top-0 right-0 rounded-sm w-[163px] h-[56px] text-[#ff9F0D] bg-white">
              Subscribe Now
            </button>
          </div>
          </div>
        <p className="text-base font-normal leading-6 w-[1170px] mx-auto mb-16 h-[56px]">
          Don&apos;t wait make a smart & logical quote here. Its pretty easy.
        </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            enim mauris.
          </p>
          <div className="flex items-center">
            <FaClock className="mr-2" />
            <div>
              <p>Opening Hours</p>
              <p>Mon - Sat (8:00 - 6:00)</p>
              <p>Sunday - Closed</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Help?</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/terms">Term & conditions</Link>
            </li>
            <li>
              <Link href="/reporting">Reporting</Link>
            </li>
            <li>
              <Link href="/documentation">Documentation</Link>
            </li>
            <li>
              <Link href="/support">Support Policy</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Recent Post</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/blog/post1" className="flex items-center">
                <Image
                  src="/footer.png"
                  alt="footer-logo"
                  width={50}
                  height={50}
                  className="w-16 h-16 mr-4 rounded"
                />
                <div>
                  <p className="font-bold">Lorem ipsum dolor sit amet</p>
                  <p className="text-gray-400">15 April, 2022</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blog/post2" className="flex items-center">
                {/* <img
                  src="/placeholder.svg"
                  alt="Post 2"
                  className="w-16 h-16 mr-4 rounded"
                /> */}
                <div>
                  <p className="font-bold">Consectetur adipiscing elit</p>
                  <p className="text-gray-400">15 April, 2022</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="max-w-[1929px] mt-12 pt-8 border-t bg-[#4F4F4F] border-gray-800 flex flex-col md:flex-row justify-between items-center"> */}
        <p> Copyright &copy; 2022 by Ayeman. All Rights Reserved.</p>
      <div className="max-w-[1929px] h-[99px] px-72 bg-[#4F4F4F] text-white flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" >
            <div className="w-9 h-9  bg-white text-gray-400 hover:text-white"><FaFacebook /></div>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <FaYoutube />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </footer>
  );
}
