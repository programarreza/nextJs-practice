const DynamicProduct = ({ params, searchParams }) => {
  console.log(searchParams);

  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      <h2 className="text-2xl ">
        This is dynamic product: {params?.productId}
      </h2>
    </div>
  );
};

export default DynamicProduct;
