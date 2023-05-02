import api from "../../services/api";
import { useEffect, useState } from "react";
import Dados from "../Dados";
import PrevSemana from "../PrevSemana";
import Lateral from "../Lateral";
import { AiOutlineSearch } from "react-icons/ai";
import clearData from "../../utils/cleardata";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Conteudo() {
  const apiKey = "f5db4738525d7e0add1de8f14dc6f2ac";
  const [weatherData, setWeatherData] = useState({});
  const [weekData, setWeekData] = useState({});
  const [local, setLocal] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const lat = position.coords.latitude;
  //       const lng = position.coords.longitude;
  //       getWeatherData({lat: lat, lng: lng})
  //       getWeekData({lat: lat, lng: lng})
  
  //     }, (error) => {
  //       console.error(error);
  //     });
  //   }
  // },[])

  async function getWeatherData() {
    // if (lat, lng) {
    //   lat = lat.toString()
    //   lng = lng.toString()
    //   try {
    //     const response = await api.get(
    //       `weather?lat=${lat}&lon=${lng}&units=metric&lang=pt_br&appid=${apiKey}`
    //     );
    //     setWeatherData(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   return
    // }
    if (local === "") return
    try {
      const response = await api.get(
        `weather?q=${local}&units=metric&lang=pt_br&appid=${apiKey}`
      );
      localStorage.setItem("weather", JSON.stringify(response.data))
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getWeekData() {
    // if (lat, lng){
    //   lat = lat.toString()
    //   lng = lng.toString()
    //   try {
    //     const response = await api.get(
    //       `forecast?lat=${lat}&lon=${lng}&units=metric&cnt=40&appid=${apiKey}`
    //     );
    //     setWeekData(clearData(response.data));
    //     setLoading(false);
    //   } catch (error) {
    //     console.log(error)
    //   }
    //   return
    // }
    if(local === "") return
    try {
      const response = await api.get(
        `forecast?q=${local}&units=metric&cnt=40&appid=${apiKey}`
      );
      const cleanData = clearData(response.data)
      localStorage.setItem("week", JSON.stringify(cleanData))
      setWeekData(cleanData);
      setLoading(false);
    } catch (error) {
      toast.error(
        "Não foi possível achar nenhuma cidade com esse nome, tente novamente!",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        }
      );
    }
  }

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    getWeatherData();
    getWeekData();
  }

  useEffect(() => {
    let weather = JSON.parse(localStorage.getItem('weather'))
    let week = JSON.parse(localStorage.getItem('week'))
    if (!weather || !week) return

    setWeatherData(weather)
    setWeekData(week)
    setLoading(false)
  },[])

  return (
    <div className="flex flex-col md:flex-row min-w-screen min-h-screen  bg-[#4DA9EC]">
      <ToastContainer />
      <div className="h-full md:min-h-screen md:w-1/2 lg:w-1/3 bg-[#4DA9EC] p-6 lg:overflow-hidden">
        <div className="flex items-center relative">
          <input
            className="bg-white w-full p-2 rounded-md focus:outline-line "
            type="text"
            value={local}
            placeholder="Pesquisar endereço"
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => setLocal(e.target.value)}
          />
          <AiOutlineSearch
            size={25}
            className="text-gray-400 absolute right-2"
          />
        </div>
        {!loading && <Lateral weatherData={weatherData} />}
      </div>
      <div className="flex flex-col w-full md:min-h-fit relative right-4 left-0 space-y-6 px-8 py-4  justify-between md:space-y-0 bg-[#A4DEFF] rounded-t-[2.5rem] md:rounded-s-[2.5rem] md:rounded-tr-none">
        {!loading && (
          <>
            <PrevSemana data={weekData} />
            <Dados data={weatherData} />
          </>
        )}
        {loading && (
          <div className="h-screen flex items-center justify-center">
            <div className="flex m-auto bg-white md:w-1/2 h-1/2 items-center justify-center rounded-3xl shadow-2xl p-8">
              <h1 className="text-3xl text-center font-semibold text-gray-400">
                Pesquise uma cidade para obter as informações sobre o clima!
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
