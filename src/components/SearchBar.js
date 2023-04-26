import React, { useState } from "react";

export default function SearchBar({setQuery, units, setUnits}) {

  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(city !== '') setQuery({q: city})
  };

  return (
    <div onSubmit={handleSubmit} className="">
      <form>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search for Location"
        />
      </form>
    </div>
  );
}
