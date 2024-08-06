import Image from "next/image";
import { techType } from "@/components/data/Type";

interface IconDetailProps {
  item: techType;
}

export default function Icon({ item }: IconDetailProps) {
  return (
    <div className="w-1/2 h-fit px-3.5 py-4 flex flex-col space-y-5">
      <Image
        src={item.image}
        alt={item.title}
        width={250}
        height={250}
        style={{
          width: "125px",
          height: "125px",
          alignSelf: "left",
        }}
      />
      <div className="w-full">
        <p className="w-full text-left text-base font-lexend-500 text-navy">
          {item.title}
        </p>
        <p className="w-full text-left text-sm font-lexend-400 text-dark-blue">
          {item.detail}
        </p>
      </div>
    </div>
  );
}
