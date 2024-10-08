import Link from "next/link";

export const metadata = {
  title: "Home page",
  description: "This is home page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/bikes", {
    next: {
      revalidate: 30,
    },
  });
  const bikes = await res.json();

  throw new Error("Error from home page!!");

  return (
    <div className="min-h-screen px-24 ">
      <h2 className="text-3xl font-semibold py-8 text-center">
        Welcome To Next.js Home Page{" "}
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {bikes?.slice(0, 3).map((bike) => (
          <div
            key={bike?._id}
            className="card card-compact bg-base-100  shadow-xl"
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{bike?.title}</h2>
              <p>{bike?.description}</p>
              <p className="text-xl font-semibold ">Price: {bike?.price} BDT</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-8 text-center">
        <Link href="/all-bikes">
          {" "}
          <button className="btn btn-primary">See all bike</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
