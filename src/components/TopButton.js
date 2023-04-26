import React from "react";

export default function TopButton({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "Cape town",
    },
    {
      id: 2,
      title: "Kinshasa",
    },
    {
      id: 3,
      title: "Durban",
    },
    {
      id: 4,
      title: "Lusaka",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button className="text-lg font-medium text-white" key={city.id} onClick={() => setQuery({q: city.title})}>
          {city.title}
        </button>
      ))}
    </div>
  );
}
