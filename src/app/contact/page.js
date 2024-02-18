// "use client";
import Image from "next/image";

// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className="flex justify-center py-5">
      <div className=" w-[85%] lg:w-4/5 xl:w-4/6 sm:flex justify-between items-center">
        <div className="sm:w-[50%]">
          <Image
            src="/contact.png"
            alt=""
            width={500}
            height={100}
            className=""
          />
        </div>
        <div className="py-10 sm:w-[40%] lg:w-[40%] xl:w-[45%]">
          <form action="" className="flex flex-col space-y-5">
            <input
              className="py-1 pl-2 text-black rounded-md"
              type="text"
              placeholder="Name and Surname"
            />
            <input
              className="py-1 pl-2 text-black rounded-md"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="py-1 pl-2 text-black rounded-md"
              type="text"
              placeholder="Phone Number (Optional)"
            />
            <textarea
              name=""
              id=""
              rows="10"
              placeholder="Message"
              className="h-32 lg:h-36 xl:h-48 py-1 pl-2 text-black rounded-md"
            ></textarea>
            <div className="flex justify-center">
              <button className="bg-btn px-6 py-1 rounded-md">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
