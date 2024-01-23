import Header from "./Header";
import Form from "./Form";

function reserveDetails() {
  return (
    <>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <Header />
          <Form />
        </div>
      </div>
    </>
  );
}

export default reserveDetails;
