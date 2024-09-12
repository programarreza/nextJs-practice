import { Suspense } from "react";
import ComponentOne from "./_components/ComponentOne";
import ComponentTwo from "./_components/ComponentTwo";
import CardLoading from "./_components/CardLoading";
import ErrorBoundary from "@/components/ErrorBoundary";
import CardError from "./_components/CardError";

const SuspensePage = () => {
  return (
    <div className="max-w-5xl mx-auto flex gap-5">
      <ErrorBoundary fallback={<CardError />}>
        <Suspense fallback={<CardLoading />}>
          <ComponentOne />
        </Suspense>
      </ErrorBoundary>

      <Suspense fallback={<CardLoading />}>
        <ComponentTwo />
      </Suspense>
    </div>
  );
};

export default SuspensePage;
