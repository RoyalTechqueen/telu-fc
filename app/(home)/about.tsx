import Image from "next/image";

export default function About() {
  return (
    <section className="scroll-mt-24 py-16" id="about">
      <div className="mx-auto max-w-screen-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h2 className="text-primary text-4xl font-bold  tracking-wider">
            About Telu FC
          </h2>
        </div>
        <div>
          <div className="">
            <div className="mt-16 flex flex-col items-center gap-8 lg:flex-row">
              <div className="lg:w-[50%]">
                <div className="max-w-xl px-6 text-center lg:text-left">
                  <h3 className="text-2xl tracking-tightsm:text-4xl">
                    Who are we?
                  </h3>
                  <p className="mt-8 text-lg">
                    TELU FC is a leading football academy in Nigeria, training
                    young talents from ages 7 to 23. We provide comprehensive
                    football education focusing on skill development, tactical
                    understanding, and character building. Competing in local,
                    regional, and state tournaments, our players consistently
                    excel, earning us a reputation for excellence. At TELU FC,
                    we create opportunities for young players to grow both on
                    and off the pitch, helping them reach their full potential
                    in the world of football.
                  </p>
                </div>
              </div>
              <div className="lg:w-[50%] max-w-md lg:max-w-full">
                <Image
                  src="/img1.jpg"
                  alt="Football"
                  width={600}
                  height={400}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className=" mt-24 md:mt-16 flex flex-col items-center gap-8 lg:flex-row-reverse">
              <div className="lg:w-[50%]">
                <div className="max-w-xl px-6 text-center lg:text-left">
                  <h3 className="text-2xl tracking-tight sm:text-4xl">
                    Our vision
                  </h3>
                  <p className="mt-8 text-lg">
                    To be the premier football academy in Nigeria, renowned for
                    developing world-class athletes who excel both on and off
                    the pitch. At TELU FC, we strive to foster a nurturing
                    environment where young talents from diverse backgrounds are
                    empowered to reach their full potential, not only as
                    exceptional footballers but as disciplined and responsible
                    individuals. Our vision is to produce leaders in the sport
                    who will represent our academy on the global stage, while
                    instilling values of teamwork, integrity, and perseverance
                    in every player.
                  </p>
                </div>
              </div>
              <div className="lg:w-[50%] max-w-md lg:max-w-full">
                <Image
                  src="/img1.jpg"
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
      </div>
    </section>
  );
}
