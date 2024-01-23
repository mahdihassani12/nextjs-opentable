import RestaurantNav from "../RestaurantNav";
import Menu from "./Menu";

function page() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNav />
        <Menu />
      </div>
    </>
  );
}

export default page;
