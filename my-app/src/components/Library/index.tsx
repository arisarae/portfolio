import Image from "next/image";
import { useRouter } from "next/router";

interface LibDetailProps {
  image: string;
  title: string;
  detail: string[];
  link: string;
}

export default function Library({
  image,
  title,
  detail,
  link,
}: LibDetailProps) {
  const router = useRouter();

  return (
    <div className="w-80 h-fit flex flex-col">
      <Image
        src={image}
        alt={title}
        width={500}
        height={375}
        style={{
          width: "370px",
          height: "auto",
        }}
      />
      <div>
        <p onClick={() => router.push(link)}>{title}</p>
        <p>{detail.join(", ")}</p>
      </div>
    </div>
  );
}
