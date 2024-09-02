const AllBikesPage = async () => {
  const res = await fetch("http://localhost:5000/bikes", { cache: "no-store" });
  const bikes = await res.json();

  return (
    <div className="min-h-screen px-24">
      <h2 className="text-3xl font-semibold py-8 text-center ">All Bikes</h2>

      <div className="grid grid-cols-3 gap-6">
        {bikes?.map((bike) => (
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
    </div>
  );
};

export default AllBikesPage;
