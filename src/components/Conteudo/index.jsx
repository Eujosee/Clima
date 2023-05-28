import api from "../../services/api";
import { useEffect, useState } from "react";
import Dados from "../Dados";
import PrevSemana from "../PrevSemana";
import Lateral from "../Lateral";
import { AiOutlineSearch, AiOutlineLoading3Quarters } from "react-icons/ai";
import clearData from "../../utils/cleardata";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Conteudo() {
  const apiKey = "f5db4738525d7e0add1de8f14dc6f2ac";
  const [weatherData, setWeatherData] = useState({});
  const [weekData, setWeekData] = useState({});
  const [local, setLocal] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("")

  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setMessage("Carregando ...")
        getWeatherData(lat, lng)
        getWeekData(lat, lng)
      }, (error) => {
        let localstored = JSON.parse(localStorage.getItem('local'))
        if (!localstored){
          setMessage("Pesquise por uma cidade!")
        }
      });
    }
  },[])


  async function getWeatherData(lat, lng) {
    if (lat, lng) {
      lat = lat.toString()
      lng = lng.toString()
      try {
        const response = await api.get(
          `weather?lat=${lat}&lon=${lng}&units=metric&lang=pt_br&appid=${apiKey}`
        );
        localStorage.setItem("weather", JSON.stringify(response.data))
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
      return
    }

    if (local === "" && lat === "") return

    try {
      const response = await api.get(
        `weather?q=${lat ? lat : local}&units=metric&lang=pt_br&appid=${apiKey}`
      );
      localStorage.setItem("weather", JSON.stringify(response.data))
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getWeekData(lat, lng) {
    if (lat, lng){
      lat = lat.toString()
      lng = lng.toString()
      try {
        const response = await api.get(
          `forecast?lat=${lat}&lon=${lng}&units=metric&cnt=40&appid=${apiKey}`
        );
        const cleanData = clearData(response.data)
      localStorage.setItem("week", JSON.stringify(cleanData))
      setWeekData(cleanData);
      setLoading(false);
      } catch (error) {
        console.log(error)
      }
      return
    }

    if(local === "" && lat === "") return

    try {
      const response = await api.get(
        `forecast?q=${lat ? lat : local}&units=metric&cnt=40&appid=${apiKey}`
      );
      const cleanData = clearData(response.data)
      localStorage.setItem("week", JSON.stringify(cleanData))
      if(local !== ""){
        localStorage.setItem("local", JSON.stringify(local))
      }
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
    let localstored = JSON.parse(localStorage.getItem('local'))
    if (!localstored || localstored === "") return
    setMessage("Carregando ...")
    getWeatherData(localstored)
    getWeekData(localstored)
  },[])

  return (
    <div className="flex flex-col lg:flex-row min-w-screen min-h-screen  bg-[#4DA9EC]">
      <ToastContainer />
      <div className="h-full lg:min-h-screen lg:w-1/3 bg-[#4DA9EC] p-6 lg:overflow-hidden">
        <div className="flex items-center relative">
          <input
            className="bg-white w-full p-2 rounded-lg focus:outline-none"
            type="text"
            value={local}
            placeholder="Pesquisar cidade"
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
      <div className="flex flex-col w-full lg:min-h-fit relative right-4 left-0 space-y-6 px-8 py-4  justify-between lg:space-y-0 bg-[#A4DEFF] rounded-t-[2.5rem] lg:rounded-s-[2.5rem] lg:rounded-tr-none">
        {!loading && (
          <>
            <PrevSemana data={weekData} />
            <Dados data={weatherData} />
          </>
        )}
        {loading && (
          <div className="h-full flex items-center justify-center">
            {message == "Carregando ..." && (
              <AiOutlineLoading3Quarters
              size={30}
              className="animate-spin text-gray-900 dark:text-gray-50 mr-4"
              />
            )}
           <span className="text-3xl text-gray-900 font-bold">{message}</span>
          </div>
        )}
      </div>
    </div>
  );
}
