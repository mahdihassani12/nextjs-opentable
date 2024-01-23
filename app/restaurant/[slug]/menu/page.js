import Header from "../Header";
import RestaurantNav from "../RestaurantNav";
import Menu from "./Menu";

function page() {
  return (
    <>
      <Header />

      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNav />
          <Menu />
        </div>
      </div>
    </>
  );
}

export default page;
