import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Card from "@/components/Card";

function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />

        <main>
          <Header />

          <div className="py-3 px-36 mt-10 flex flex-wrap justify-start">
            <Card />
          </div>
          
        </main>
      </main>
    </main>
  );
}

export default Home;
