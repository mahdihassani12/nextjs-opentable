import Navbar from "@/components/Navbar";
import Header from "./Header";
import Form from "./Form";

function reserveDetails() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />

        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />
            <Form />
          </div>
        </div>
      </main>
    </main>
  );
}

export default reserveDetails;
