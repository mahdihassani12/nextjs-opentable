import Navbar from "@/components/Navbar";
import Header from "./Header";
import Sidebar from "./Sidebar";
import CardBox from "./CardBox";

function Search() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />

        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <Sidebar />

          <div className="w-5/6">
            <CardBox />
          </div>
        </div>
      </main>
    </main>
  );
}

export default Search;
