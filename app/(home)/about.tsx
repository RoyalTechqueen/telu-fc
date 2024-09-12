import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function About() {
  return (
    <section className="relative scroll-mt-24 py-16" id="about">
      <div className="mx-auto max-w-screen-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="relative">
          <Link
            href="/about"
            className="absolute flex items-center gap-1 right-0 mt-8 mr-4"
          >
            <button className="text-black rounded-lg p-0   text-md">
              Read More
            </button>
            <FaAngleDoubleRight />
          </Link>
          <div className="space-y-8">
            <h2 className="text-primary text-4xl font-bold tracking-wider">
              About Telu FC
            </h2>
          </div>
        </div>
        <div>
          <div className="mt-16 flex flex-col items-center gap-8 lg:flex-row">
            <div className="lg:w-[50%]">
              <div className="max-w-xl px-6 text-center lg:text-left">
                <h3 className="text-2xl tracking-tight sm:text-4xl">
                  Who are we?
                </h3>
                <p className="mt-8 text-lg">
                  <strong>Telu</strong> Football Club, based in Iwo Osun,
                  Nigeria, is a top-rated professional football club founded in
                  2019. It has quickly gained a reputation as one of the best
                  football academies in the country, participating in various
                  tournaments. The academy was established by professional
                  football experts to nurture and showcase fresh football
                  talent. Alamu FC  is not just about football; it also
                  emphasizes education and religious values, ensuring players
                  can advance their football careers without compromising
                  academics or faith. Catering to players aged 12 to 18, the
                  academy offers a comprehensive program that combines rigorous
                  training with academic courses. <strong>Telu FC</strong>{" "}
                  prepares players for the modern football world while making
                  their experience enjoyable and transformative.
                </p>
              </div>
            </div>
            <div className="lg:w-[50%] max-w-md lg:max-w-full">
              <Image
                src="/main.jpg"
                alt="Football"
                width={600}
                height={400}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="mt-24 md:mt-16 flex flex-col items-center gap-8 lg:flex-row-reverse">
            <div className="lg:w-[50%]">
              <div className="max-w-xl px-6 text-center lg:text-left">
                <h3 className="text-2xl tracking-tight sm:text-4xl">
                  Our Mission
                </h3>
                <h6 className="mt-8 text-lg">
                  Telu Football Club is dedicated to developing future
                  football stars with top-notch training kits and a focus on
                  both educational and religious excellence. Their mission is to
                  improve the lives of young talents, providing them with
                  opportunities and support where there seems to be little hope.
                  The academy offers elite competition experiences, allowing
                  players to showcase their skills against top Nigerian players
                  in front of scouts. The academy&apos;s activities are divided
                  into two main areas:
                  <ol className="list-disc list-inside ml-4 mt-2">
                    <li>
                      <strong>Football:</strong> The core focus is on football,
                      ensuring high standards in training and competition.
                    </li>
                    <li>
                      <strong>Extra-mural Activities:</strong> Players are
                      required to participate in educational tutorials to
                      maintain academic and moral standards.
                    </li>
                  </ol>
                  Additionally, an Arabic class is provided for Muslim players
                  to enhance their religious practices and language skills.
                </h6>
              </div>
            </div>
            <div className="lg:w-[50%] max-w-md lg:max-w-full">
              <Image
                src="/telu13.jpg"
                alt="Football"
                width={600}
                height={400}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
