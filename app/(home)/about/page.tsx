"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="bg-yellow-100 text-gray-900 py-12 px-4 md:px-8">
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
      <div className="container mx-auto p-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4 mt-8">
            About Us
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Telu FC is a top-rated professional football club, based in Iwo
            Osun, Nigeria, known for its excellence in nurturing young football
            talents. Established in 2019, the club has quickly risen to become
            one of the leading football training centers in the country.
          </p>
        </div>

        {/* Academy Overview */}
        <div className=" shadow-lg rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src="/main.jpg"
              alt="Telu FC Academy"
              className="rounded-lg mb-4 md:mb-0 md:mr-6"
              width={600}
              height={400}
            />
            <div>
              <h2 className="text-3xl font-semibold text-yellow-500 mb-4">
                Telu Football Club
              </h2>
              <p className="text-gray-700 mb-4">
                Since its inception in 2019, Telu FC Academy has been dedicated
                to not only developing exceptional footballers but also
                providing a supportive environment that balances academic and
                religious pursuits. The academy serves as a launchpad for young
                talents aspiring to make their mark on the global football
                stage.
              </p>
              <p className="text-gray-700">
                Our mission extends beyond football development; we aim to
                foster a well-rounded experience that includes educational
                enrichment and religious growth, helping our players to become
                leaders both on and off the field.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-yellow-100 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-4">
            Unlike many academies around who were founded for the fun of it.
            Telu Football Club is founded to project the next football stars to
            the world with available standard training kits and loaded
            educational and religious excellence. Our mission is simple and
            feasible, it is a mission to better the lives of the young talents,
            to set the pace for them and help them in find their feet where
            there seems to be little or no hope. AFC allows you to complete in
            elite competitims availing you to a special type of experience. The
            dream of every young footballers is to showcase his talent to the
            world, and the tournament that the academy involves in gives the
            deserved opportunity to play against the best players in Nigeria,
            and a large audience, with even the presence of external scouts that
            graces the competition. to compete at elite levels.
          </p>
        </div>

        {/* Activities */}
        <div className=" shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">
            Our Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-2">Football</h3>
              <p className="text-gray-700 mb-4">
                Our primary focus is on football training, providing players
                with top-notch coaching and facilities. We believe in a holistic
                approach, combining rigorous training sessions with competitive
                opportunities in youth tournaments to ensure players reach their
                full potential.
              </p>
            </div>
            <div className="shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-2">
                Extra-Mural Activities
              </h3>
              <p className="text-gray-700 mb-4">
                Beyond football, we emphasize the importance of education and
                moral values. Our academy provides educational tutorials and
                Arabic classes for Muslim players to enrich their academic and
                religious lives. These activities aim to prepare our players for
                a global environment, ensuring they are well-rounded
                individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
