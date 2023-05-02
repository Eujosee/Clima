import moment from "moment";
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import './index.css'

export default function Lateral ({weatherData}) {
    return(
        <>
            <div className="flex flex-col items-center justify-center mt-5 space-y-10 md:space-y-20">
              <div className="flex flex-col lg:flex-row justify-between w-full font-medium text-white capitalize">
                <div className="flex flex-row items-center justify-center gap-1">
                <FaMapMarkerAlt/>
                <p className='text-center'>{weatherData.name}, {weatherData.sys.country}</p>
                </div>
                <h1 className='text-center'>{moment().format('dddd')}</h1>
              </div>
              <div className="flex flex-col items-center justify-center text-white capitalize">
                <h2 className="text-6xl sombraText font-bold text-white">
                    {Math.trunc(weatherData.main.temp)}°
                </h2>
                <p className="font-semibold text-center">{weatherData.weather[0].description}</p>
                <p className="font-semibold text-center">Sensação térmica - {Math.trunc(weatherData.main.feels_like)}°</p>
                <div className="w-full flex md:hidden justify-between">
                  <div className="flex flex-row items-center">
                    <AiOutlineArrowUp size={20}/>
                    <p>Máx. {Math.trunc(weatherData.main.temp_max)}°</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <AiOutlineArrowDown size={20}/>
                    <p>Min. {Math.trunc(weatherData.main.temp_min)}°</p>
                  </div>
                </div>
              </div>
                <img
                className="relative sombraImg right-28  md:-bottom-48 lg:-top-16 max-h-80 max-w-80"
                src={`/icons/${weatherData.weather[0].icon}.png`}
                alt={`${weatherData.weather[0].description}`}
                />
            </div>
        </>
    )
}