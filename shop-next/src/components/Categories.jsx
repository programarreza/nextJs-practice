import { FaCamera, FaTv } from "react-icons/fa";
import { TbDrone } from "react-icons/tb";
import { SiPcgamingwiki } from "react-icons/si";
import { BsFillRouterFill } from "react-icons/bs";

const Categories = () => {
  return (
    <div className="min-h-[60vh] border px-24 flex items-center flex-col justify-center">
      <div className="grid grid-cols-3 gap-24 font-semibold ">
        <div className="flex items-center gap-24 border p-3">
          <h3>Camera</h3>
          <FaCamera size={30} />
        </div>
        <div className="flex items-center gap-24 border p-3">
          <h3>Drone</h3>
          <TbDrone size={30} />
        </div>
        <div className="flex items-center gap-24 border p-3 ">
          <h3>Gaming</h3>
          <SiPcgamingwiki size={30} />
        </div>
        <div className="flex items-center gap-24 border p-3">
          <h3>LED TV</h3>
          <FaTv size={30} />
        </div>
        <div className="flex items-center gap-24 border p-3">
          <h3>Routers</h3>
          <BsFillRouterFill size={30} />
        </div>
        <div className="flex items-center gap-24 border p-3 ">
          <h3>Camera</h3>
          <FaCamera size={30} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
