import Image from "next/image";

export default function Teams() {
  return (
    <section className="text-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-yellow-500 text-3xl font-bold uppercase mb-4">
          Meet our team
        </h2>
        <div className="relative text-yellow-500 font-bold text-6xl opacity-10">
          <h1>OUR MANAGERS</h1>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="relative group w-80">
            <div className="overflow-hidden rounded-lg shadow-lg transform group-hover:rotate-1 transition-transform duration-300">
              <Image
                src="/man.jpg"
                alt="logo"
                className="rounded-xl"
                width={800}
                height={1200}
              />
              <div className="bg-darkGray py-4">
                <h3 className="text-yellow-500 text-lg font-bold uppercase">
                  Michelle Chu
                </h3>
                <p className="text-gray-800 text-sm">Chief Executive Officer</p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-lg border-4 border-yellow-500 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
          </div>

          <div className="relative group w-80">
            <div className="overflow-hidden rounded-lg shadow-lg transform group-hover:rotate-1 transition-transform duration-300">
              <Image
                src="/man2.jpg"
                alt="logo"
                className="rounded-xl"
                width={800}
                height={1200}
              />
              <div className="bg-darkGray py-4">
                <h3 className="text-yellow-500 text-lg font-bold uppercase">
                  Tony Eades
                </h3>
                <p className="text-gray-800 text-sm">Junior team Coach</p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-lg border-4 border-yellow-500 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
          </div>

          <div className="relative group w-80">
            <div className="overflow-hidden rounded-lg shadow-lg transform group-hover:rotate-1 transition-transform duration-300">
              <Image
                src="/man.jpg"
                alt="logo"
                className="rounded-xl"
                width={800}
                height={1200}
              />
              <div className="bg-darkGray py-4">
                <h3 className="text-yellow-500 text-lg font-bold uppercase">
                  Jason Feller
                </h3>
                <p className="text-gray-800 text-sm">Senior team Coach</p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-lg border-4 border-yellow-500 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
