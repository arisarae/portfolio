import Image from "next/image";
import { contacts } from "../data/Detail";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="w-full h-fit flex flex-row space-x-2.5 justify-end p-2.5 bg-light-blue sticky top-0">
      <div className="w-fit h-fit flex flex-row space-x-4 bg-navy py-3 px-6 rounded-full">
        <Image
          src="/download.svg"
          alt="download"
          width={25}
          height={25}
          style={{
            width: "20px",
            height: "20px",
          }}
        />
        <p className="text-sm font-lexend-600 text-baby-blue">Download CV</p>
      </div>
      <Image
        src={contacts[3].image}
        alt={contacts[3].title}
        onClick={() => router.push(contacts[3].link)}
        width={60}
        height={60}
        style={{
          width: "44px",
          height: "44px",
        }}
      />
      <Image
        src={contacts[2].image}
        alt={contacts[2].title}
        onClick={() => router.push(contacts[2].link)}
        width={60}
        height={60}
        style={{
          width: "44px",
          height: "44px",
        }}
      />
      <Image
        src={contacts[1].image}
        alt={contacts[1].title}
        onClick={() => router.push(contacts[1].link)}
        width={60}
        height={60}
        style={{
          width: "44px",
          height: "44px",
        }}
      />
    </nav>
  );
}
