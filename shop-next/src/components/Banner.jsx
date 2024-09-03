import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex items-center justify-center px-24 gap-12 min-h-screen">
      <div className="flex-1 space-y-8">
        <h2 className="text-5xl font-bold">The Device That Takes You Higher</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          saepe laborum deserunt consequatur, fugiat nemo, voluptatibus debitis
          est quo velit repudiandae ducimus? Tenetur voluptates similique eos!
          Inventore similique perferendis porro.
        </p>

        <button className="btn ">View all product</button>
      </div>

      <div className="flex-1 ">
        <Image
          src="https://img.freepik.com/premium-photo/technical-blueprint-showing-design-gear-system-with-overlays-electric-circuit-diagrams_34950-27596.jpg"
          width={1000}
          height={1000}
          alt="banner image"
          className=""
        />
      </div>
    </div>
  );
};

export default Banner;
