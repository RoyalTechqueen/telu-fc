import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <section className="min-h-screen bg-yellow-100 py-20 px-8">
      <div className="flex items-center fixed top-4 left-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            className="rounded-xl"
            width={70}
            height={70}
          />
        </Link>
      </div>
      <div className="p-4">
        <h2 className="text-primary text-3xl font-bold uppercase text-center mt-2 mb-4 mt-12 lg:mt-2">
          Gallery
        </h2>
        <p className="text-gray-700 mb-12 text-center">
          Explore our moments from training sessions and past matches.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/telu9.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/telu2.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/telu3.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/19.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg ">
            <Image
              src="/20.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/3.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/5.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/7.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/10.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/11.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/12.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/13.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/14.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/16.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/22.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/18.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/21.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/9.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/6.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/15.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
