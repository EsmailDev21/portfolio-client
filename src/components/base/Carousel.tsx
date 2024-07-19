import { Carousel } from "@material-tailwind/react";
import { useState } from "react";

type Props = {
  images: string[];
  preview?: string;
};
export function CarouselComp({ images, preview }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen === true ? (
    <Carousel
      transition={{ duration: 2 }}
      className="rounded-xl"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={() => setIsOpen(false)}
    >
      {images.map((i, index) => (
        <img
          key={index}
          src={i}
          alt="image 1"
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  ) : (
    <img
      style={{ cursor: "pointer" }}
      onClick={() => setIsOpen(true)}
      src={preview}
      alt={preview}
      className="rounded-lg mb-4"
    />
  );
}
