import Image from "next/image";
import Link from "next/link";

const PopularProduct = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();

  return (
    <div className="px-24">
      <h2 className="text-3xl font-semibold text-center py-12">Most Popular</h2>

      <div className="grid grid-cols-4 gap-4">
        {products?.slice(0, 4).map((product) => (
          <div
            key={product.title}
            className="card card-compact bg-base-100 h-96 shadow-xl"
          >
            <figure>
              <Image
                src={product?.image}
                alt={product?.title}
                width={300}
                height={300}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product?.title}</h2>
              <h2 className="card-title">{product?.price} BDT</h2>
              <p>{product?.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center py-8">
        <Link href={"/products"}>
          <button className="btn btn-primary rounded-md">See more</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularProduct;
