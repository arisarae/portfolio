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
    <div className="w-5/6 md:w-1/4 h-fit space-y-4 flex flex-col">
      <Image
        src={image}
        alt={title}
        width={500}
        height={375}
        style={{
          width: "auto",
          height: "auto",
        }}
      />
      <div>
        <div className="w-full h-fit flex flex-row items-center justify-between">
          <p className="w-fit text-left text-lg font-lexend-500 text-navy">
            {title}
          </p>
          <Image
            onClick={() => router.push(link)}
            src="/open.svg"
            alt="open"
            width={60}
            height={60}
            className="w-4 h-4"
          />
        </div>
        <p className="w-full text-left text-base font-lexend-400 text-dark-blue">
          {detail.join(", ")}
        </p>
      </div>
    </div>
  );
}
