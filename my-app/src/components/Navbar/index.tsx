import Image from "next/image";
import { contacts } from "../data/Detail";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <div>
        <Image src="/download.svg" alt="download" width={25} height={25} />
        <p>Download CV</p>
      </div>
      <div>
        <Image
          src={contacts[3].image}
          alt={contacts[3].title}
          onClick={() => router.push(contacts[3].link)}
          width={60}
          height={60}
        />
        <Image
          src={contacts[2].image}
          alt={contacts[2].title}
          onClick={() => router.push(contacts[2].link)}
          width={60}
          height={60}
        />
        <Image
          src={contacts[1].image}
          alt={contacts[1].title}
          onClick={() => router.push(contacts[1].link)}
          width={60}
          height={60}
        />
      </div>
    </>
  );
}
