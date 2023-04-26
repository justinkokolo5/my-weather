import { formatToLocalTime } from "@/api/api";
import React from "react";

export default function TimeAndLocation({weather :{dt, timezone, name, country }}) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-xl text-white font-extralight">
          {formatToLocalTime(dt,timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-6">
        <p className="text-3xl font-medium text-white">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}
