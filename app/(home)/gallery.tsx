import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <section className="scroll-mt-24 py-16" id="gallery">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-primary text-3xl font-bold uppercase mb-8">
          Gallery
        </h2>
        <p className="text-gray-700 mb-12">
          Explore our moments from training sessions and past matches.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/telu13.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/2.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/1.jpg"
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
              src="/7.jpg"
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
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/gallery">
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
