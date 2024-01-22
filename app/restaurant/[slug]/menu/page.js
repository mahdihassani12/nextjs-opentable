import Navbar from "@/components/Navbar";
import Header from "../Header";
import RestaurantNav from "../RestaurantNav";
import Menu from "./Menu";

function page() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />

        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNav />
            <Menu />
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}

export default page;
