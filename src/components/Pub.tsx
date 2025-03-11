import React from "react";

export default function Pub() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.
        </p>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" >
          Fermer
        </button>
      </div>
    </div>
  );
}
