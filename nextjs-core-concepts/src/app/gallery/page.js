import Image from "next/image";
// import nextImage from "../../assets/nextjs image.png";
import nextImage from "@/assets/nextjs image.png";

const GalleryPage = () => {
  return (
    <div>
      <h2 className="text-center text-2xl">Image Optimization</h2>

      <div>
        <h2 className="text-center text-xl ">Regular image </h2>
        <img
          src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
          className="mx-auto"
          width={500}
          height={500}
          alt="next image"
        />
      </div>

      <div className="pt-24">
        <h2 className="text-center text-xl ">Aptimaized Host image </h2>
        <Image
          src={"https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"}
          alt="next image "
          width={500}
          height={500}
          className="mx-auto"
        />
      </div>
      <div className="pt-24">
        <h2 className="text-center text-xl ">Aptimaized Local image </h2>
        <Image
          src={nextImage}
          alt="next image "
          width={500}
          height={500}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default GalleryPage;
