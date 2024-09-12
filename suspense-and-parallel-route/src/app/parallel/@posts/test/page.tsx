const TestPage = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5 ">
      <div className="bg-blue-500 h-[400px] w-full flex justify-center items-center">
        <h1 className="text-2xl text-black font-semibold">
          Nested inside named slot
        </h1>
      </div>
    </div>
  );
};

export default TestPage;
