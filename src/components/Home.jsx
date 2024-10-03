import React from "react";
import Header from "./Header";
import Buttons from "./Button"; 

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-start p-4">
        <Buttons /> 

        {/* Componente de Tarjetas dentro de Home */}
        <div className="flex flex-wrap mt-6 gap-4">
          {/* Tarjeta TO DO */}
          <div className="border p-4 rounded bg-gray-100 shadow">
            <h2 className="font-bold text-lg">TO DO</h2>
          </div>

          {/* Tarjeta IN PROGRESS */}
          <div className="border p-4 rounded bg-gray-100 shadow">
            <h2 className="font-bold text-lg">IN PROGRESS</h2>
          </div>

          {/* Tarjeta DONE */}
          <div className="border p-4 rounded bg-gray-100 shadow">
            <h2 className="font-bold text-lg">DONE</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
