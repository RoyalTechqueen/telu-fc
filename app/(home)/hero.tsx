import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="bg-gradient-to-b from-green-600 via-yellow-600 to-yellow-800 text-white min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12"
      id="home"
    >
      <div className=" mt-24 md:mt-52 lg:mt-16 flex flex-col w-full lg:w-1/2 justify-center items-center lg:items-start space-y-4 text-center lg:text-left">
        <h1 className="mt-12 lg:mt-4 text-4xl font-semibold sm:text-6xl md:text-7xl">
          Welcome to <br />
          <span className="text-yellow-500 font-extrabold text-5xl sm:text-7xl lg:text-8xl">
            Telu FC
          </span>
        </h1>
        <h3 className="text-xl sm:text-2xl md:text-3xl">
          Where we transform Young Talent into Champions
        </h3>
        <p className="text-base sm:text-lg md:text-xl tracking-tight">
          At TELU FC, we nurture and develop young footballers in Nigeria,
          guiding them from the grassroots to greatness. Join us and be a part
          of a winning tradition.
        </p>
        <Link
          href="/application"
          className="bg-green-600 text-white font-bold py-3 px-7 rounded-md hover:bg-green-800 transition duration-300"
        >
          Join Us NOW!
        </Link>
      </div>

      <div className="hidden lg:block lg:w-1/3">
        <Image
          src="/telu3.jpg"
          alt="Football"
          width={700}
          height={700}
          className="object-cover opacity-80 rounded-lg"
        />
      </div>
    </div>
  );
}
