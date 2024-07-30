import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="https://i.ibb.co/fnc0TG1/unsplash-Qd-AAasr-Zhdk.png"
        alt="Interior Design"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        // height={100}
        // width={100}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl sm:text-2xl font-semibold text-white mb-2">#1</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            WORLD CLASS DESIGN
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            FOR YOUR INTERIOR SET-UP
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem facilis 
            nisi ipsa molestias. Amet ipsum dolor sit consectetur adipisicing elit quibusdam.
          </p>
          <Link href="/portfolio" passHref>
            <button className="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300">
              OUR PORTFOLIO
            </button>
          </Link>
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-24 h-1 bg-white" />
    </div>
  );
};

export default Banner;