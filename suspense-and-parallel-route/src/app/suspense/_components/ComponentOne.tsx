import { delay } from "@/utils/delay";

const ComponentOne = async () => {
  await delay(2000);

  return (
    <div className="border-2 border-gray-500 rounded-md size-[500px] p-2">
      <h1 className="text-xl"> This is Component One - DYNAMIC COMPONENT</h1>
    </div>
  );
};

export default ComponentOne;
