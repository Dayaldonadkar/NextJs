import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className="flex justify-center py-5">
      <div className=" w-[85%] lg:w-4/5 xl:w-4/6 lg:flex items-center">
        <div className="space-y-6">
          <h2 className="text-btn text-xl">About Agency</h2>
          <h1 className="text-3xl">
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className="text-sm">
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precission We’re world’s
            Our Special Team best consulting & finance solution provider. Wide
            range of web and software development services.
          </p>
          <div className="flex">
            <div className="space-y-1">
              <h1 className="text-btn">10 K+</h1>
              <p className="text-sm">Year of experience</p>
            </div>
            <div className="space-y-1">
              <h1 className="text-btn">234 K+</h1>
              <p className="text-sm">People reached</p>
            </div>
            <div className="space-y-1">
              <h1 className="text-btn">5 K+</h1>
              <p className="text-sm">Services and Plugin</p>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <Image
            src="/about.png"
            alt="About Image"
            width={500}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
