import Image from "next/image";

export default function Intro() {
  return (
    <header className="w-full h-fit px-8 py-9 flex flex-col space-y-7">
      <Image
        src="/github.svg"
        alt="Profile"
        width={60}
        height={60}
        style={{
          width: "250px",
          height: "250px",
          alignSelf: "center",
        }}
      />
      <div className="w-full h-fit flex flex-col space-y-4 text-navy">
        <p className="text-base font-lexend-400 text-center">
          How Can I Help You?
        </p>
        <h1 className="text-4xl font-lexend-800 text-center">
          Arisa Raezzura Zahra
        </h1>
        <p className="text-base font-lexend-500 text-center">
          Student • Aspiring Front-End Engineer • Freelancer
        </p>
      </div>
    </header>
  );
}
