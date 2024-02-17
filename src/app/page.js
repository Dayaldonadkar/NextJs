import Image from "next/image";

const Home = () => {
  return (
    <div className="flex justify-center py-5">
      <div className=" w-[85%] lg:w-4/5 xl:w-4/6 lg:flex items-center">
        <div className="space-y-5 lg:space-y-7  lg:w-11/12 xl:w-[100%] lg:pt-20 2xl:w-11/12 ">
          <h1 className="text-3xl lg:text-5xl 2xl:text-8xl leading-30 2xl:w-[50%] font-bold">
            Creative Thoughts Agency.
          </h1>
          <p className="lg:[100%] xl:w-[100%] 2xl:w-8/12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore.
          </p>
          <div className="space-x-8">
            <button className="bg-btn px-3 py-2 rounded-md">Learn More</button>
            <button className="bg-btn2 text-black px-3 py-2 rounded-md">
              Contact
            </button>
          </div>
          <div className="">
            <Image
              src="/brands.png"
              width={500}
              height={100}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="">
          <Image
            src="/hero.gif"
            alt="Hero image"
            width={500} // Define the width of the image
            height={100} // Define the height of the image
            className="w-full h-full object-contain" // Fit within container, maintain aspect ratio
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
