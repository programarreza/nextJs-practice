"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-center text-3xl text-red-500">
        Something went wrong !!
      </h1>
      <h1 className="text-center text-xl text-red-500">{error.message}</h1>
      <button className="btn btn-primary" onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default ErrorPage;
