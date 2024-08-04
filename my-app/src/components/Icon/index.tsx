import Image from "next/image";
import { techType } from "@/components/data/Type";

interface IconDetailProps {
  item: techType;
}

export default function Icon({ item } : IconDetailProps ) {
  return (
    <>
      <Image
        src={item.image}
        alt={item.title}
        width={250}
        height={250}
      />
      <div>
        <p>{item.title}</p>
        <p>{item.detail}</p>
      </div>
    </>
  );
};
