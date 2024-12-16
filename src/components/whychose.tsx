import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Grid Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative w-[362px] h-[356px]">
                <Image
                  src="/whychooseus/001.png"
                  alt="Tacos"
                  className="rounded-lg object-cover"
                  layout="fill"
                />
              </div>
              <div className="relative w-[281px] h-[331px]">
                <Image
                  src="/whychooseus/002.png"
                  alt="Nuggets"
                  className="rounded-lg object-cover"
                  layout="fill"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative w-[244px] h-[306px]">
                <Image
                  src="/whychooseus/003.png"
                  alt="Burger"
                  className="rounded-lg object-cover"
                  layout="fill"
                />
              </div>
              <div className="relative w-full h-48">
                <Image
                  src="/whychooseus/004.png"
                  alt="Food"
                  className="rounded-lg object-cover"
                  layout="fill"
                />
              </div>
              <div className="relative w-full h-48">
                <Image
                  src="/whychooseus/005.png"
                  alt="Pasta"
                  className="rounded-lg object-cover"
                  layout="fill"
                />
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div>
            <h3 className="text-orange-400 text-xl font-semibold">Why Choose us</h3>
            <h2 className="text-white text-4xl font-bold leading-tight mt-4">
              Extra ordinary taste <br /> And Experienced
            </h2>
            <p className="text-gray-300 mt-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            </p>

            {/* Features Section */}
            <div className="flex justify-between items-center mt-8 bg-orange-400 py-6 px-4 rounded-lg">
              <div className="text-center">
                <div className="text-white text-3xl">🍔</div>
                <p className="text-black mt-2">Fast Food</p>
              </div>
              <div className="text-center">
                <div className="text-white text-3xl">🍪</div>
                <p className="text-black mt-2">Lunch</p>
              </div>
              <div className="text-center">
                <div className="text-white text-3xl">🍷</div>
                <p className="text-black mt-2">Dinner</p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mt-8 flex items-center">
              <div className="bg-orange-400 text-black font-bold text-4xl px-6 py-4 rounded-lg">
                30+
              </div>
              <p className="ml-4 text-white font-semibold">
                Years of <br /> <span className="text-orange-400">Experienced</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
