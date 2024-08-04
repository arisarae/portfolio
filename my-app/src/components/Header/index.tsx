import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image src="/github.svg" alt="Profile" width={60} height={60} />
      <div>
        <p>How Can I Help You?</p>
        <h1>Arisa Raezzura Zahra</h1>
        <p>Student • Aspiring Front-End Engineer • Freelancer</p>
      </div>
    </header>
  );
}
