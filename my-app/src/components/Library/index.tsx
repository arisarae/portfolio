import Image from "next/image";

interface LibDetailProps {
  image: string,
  title: string,
  detail: string,
}

export default function Library({ image, title, detail }: LibDetailProps) {
  return (
    <>
      <Image src={image} alt={title} width={250} height={250} />
      <div>
        <p>{title}</p>
        <p>{detail}</p>
      </div>
    </>
  );
}
