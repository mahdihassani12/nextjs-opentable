import Header from "./Header";
import Sidebar from "./Sidebar";
import CardBox from "./CardBox";

function Search() {
  return (
    <>
      <Header />

      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <Sidebar />

        <div className="w-5/6">
          <CardBox />
        </div>
      </div>
    </>
  );
}

export default Search;
