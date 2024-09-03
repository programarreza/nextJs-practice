import Image from "next/image";

export const metadata = {
  title: "Products Page",
  description: "this is products page description",
};

const ProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div className="px-24">
      <h2 className="text-3xl font-semibold text-center pt-24 pb-8">
        All Products
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {products?.map((product) => (
          <div
            key={product.title}
            className="card card-compact bg-base-100 h-96 shadow-xl"
          >
            <figure >
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
    </div>
  );
};

export default ProductsPage;
