import Image from "next/image";

export default function Intro() {
  return (
    <header className="w-full h-fit px-8 py-9 2sm:p-12 sm:px-20 md:py-32 xl:px-40 flex flex-col lg:flex-row space-y-7 lg:space-x-10 lg:space-y-0 items-center">
      <div className="w-52 sm:w-60 md:w-80 xl:w-96 h-auto rounded-full overflow-hidden flex flex-col">
        <Image
          src="/profilePic.svg"
          alt="Profile"
          width={380}
          height={380}
          // style={{
          //   width: "380px",
          //   height: "380px",
          //   alignSelf: "center",
          // }}
          className="overflow-hidden"
        />
      </div>
      <div className="w-full h-fit flex flex-col space-y-4 text-navy">
        <p className="text-base 2sm:text-lg sm:text-xl md:text-2xl xl:text-3xl font-lexend-400 text-center lg:text-left">
          How Can I Help You?
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-lexend-800 text-center lg:text-left">
          Arisa Raezzura Zahra
        </h1>
        <p className="text-base 2sm:text-lg sm:text-xl md:text-2xl xl:text-3xl font-lexend-500 text-center lg:text-left">
          Student • Aspiring Front-End Engineer • Freelancer
        </p>
      </div>
    </header>
  );
}
