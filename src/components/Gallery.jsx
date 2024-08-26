import { useRef } from "react";
import GalleryItem from "./GalleryItem";
import {
  useGsapGalleryImgLavitate,
  useGsapGalleryImgUnveil,
} from "../Hook/gsap";

const data = [
  {
    id: 1,
    src: "../../images/gallery-1.webp",
    title: "Assorted Photos",
  },
  {
    id: 2,
    src: "../../images/gallery-2.jpeg",
    title: "Steering Wheel",
  },
  {
    id: 3,
    src: "../../images/gallery-3.jpeg",
    title: "Typewriter Keys",
  },
  {
    id: 4,
    src: "../../images/gallery-4.jpeg",
    title: "Vintage Camera",
  },
  {
    id: 5,
    src: "../../images/gallery-5.jpeg",
    title: "Vintage Car",
  },
  {
    id: 6,
    src: "../../images/gallery-6.webp",
    title: "Rotary Telephone",
  },
  {
    id: 7,
    src: "../../images/gallery-7.webp",
    title: "Retro cassette",
  },
  {
    id: 8,
    src: "../../images/gallery-8.webp",
    title: "Strip Flim",
  },
  {
    id: 9,
    src: "../../images/gallery-9.jpeg",
    title: "Vinyl Player",
  },
  {
    id: 10,
    src: "../../images/gallery-10.webp",
    title: "CRT TV",
  },
];

const Gallery = () => {
  const galleryRef = useRef(null);
  const itemRefs = useRef([]);
  console.log(itemRefs);

  useGsapGalleryImgUnveil(itemRefs, galleryRef);
  useGsapGalleryImgLavitate(itemRefs, galleryRef);

  return (
    <section ref={galleryRef} className="container mx-auto min-h-[60vh] ">
      <div className="grid-container">
        {data.map((item, i) => (
          <GalleryItem
            ref={(el) => (itemRefs.current[i] = el)}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
