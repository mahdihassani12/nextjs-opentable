import Navbar from "@/components/Navbar";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Search() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />

        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <Sidebar />

          <div className="w-5/6">
            {/* RESAURANT CAR */}
            <div className="border-b flex pb-5">
              <img
                src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                alt=""
                className="w-44 rounded"
              />
              <div className="pl-5">
                <h2 className="text-3xl">Aiāna Restaurant Collective</h2>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                  <div className="font-light flex text-reg">
                    <p className="mr-4">$$$</p>
                    <p className="mr-4">Mexican</p>
                    <p className="mr-4">Ottawa</p>
                  </div>
                </div>
                <div className="text-red-600">
                  <a href="">View more information</a>
                </div>
              </div>
            </div>
            {/* RESAURANT CAR */}
          </div>
        </div>
      </main>
    </main>
  );
}

export default Search;
