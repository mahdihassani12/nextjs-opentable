import Navbar from "@/components/Navbar";
import Header from "./Header";
import RestaurantNav from "./RestaurantNav";
import Title from "./Title";
import Rating from "./Rating";
import Description from "./Description";
import Images from "./Images";
import Reviews from "./Reviews";
import Sidebar from "./Sidebar";

function page() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />

        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNav />
            <Title />
            <Rating />
            <Description />

            {/* IMAGES */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                5 photos
              </h1>
              <div className="flex flex-wrap">
                <Images />
                <Images />
                <Images />
              </div>
            </div>
            {/* IMAGES */}

            {/* REVIEWS */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                <Reviews />
              </div>
            </div>
            {/* REVIEWS */}
          </div>
          <Sidebar />
        </div>
      </main>
    </main>
  );
}

export default page;
