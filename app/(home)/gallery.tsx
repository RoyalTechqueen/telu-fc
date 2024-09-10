import Image from "next/image";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/match.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/match.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/match.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/match.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/match.jpg"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={1200}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/match.jpg"
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
