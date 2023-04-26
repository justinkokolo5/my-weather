import Image from "next/image";
//import UilReact from '@iconscout/react-unicons/icons/uil-react'
import SearchBar from "@/components/SearchBar";
import TopButton from "@/components/TopButton";
import TimeAndLocation from "@/components/TimeAndLocation";
import TemparatureAndDetails from "@/components/TemparatureAndDetails";
import Forecast from "@/components/Forecast";
import getFormattedWeatherData from "../api/api";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  const [query, setQuery] = useState({ q: "paris" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      toast.info('Feching data for'+query.q)
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchData();
  }, [query, units]);

  return (
    <div className="max-w-screen-md px-32 py-5 mx-auto mt-4 shadow-xl bg-gradient-to-br from-cyan-700 to-blue-50 h-fit shadow-gray-400">
      <TopButton setQuery={setQuery} />
      <SearchBar setQuery={setQuery} units setUnits/>
      {weather && (
        <>
          <TimeAndLocation  weather={weather}/>
          <TemparatureAndDetails  weather={weather}/>
          <Forecast title="hourly forecast" items={weather.hourly}/>
          <Forecast title="Daiyly forecast" items={weather.daily}/>
        </>
      )}
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true}/>
    </div>
  );
}
