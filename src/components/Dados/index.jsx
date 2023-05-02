import moment from "moment";
import DadosSlider from "../DadosSlider"

export default function Dados({ data }) {
  return (
    <div className="w-full max-h-1/2 p-6 pt-0 flex flex-col">
      <h3 className="text-xl 2xl:text-4xl font-semibold mb-3 text-center md:text-start">Dados de hoje</h3>
      <div className="hidden md:flex md:flex-col md:justify-end gap-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-6 w-full gap-4">
          <div className="flex flex-col lg:col-span-2 justify-center 2xl:justify-evenly items-center bg-white p-4 rounded-2xl shadow-lg 2xl:h-[25vh]
          ">
            <p className="text-xl 2xl:text-3xl font-medium text-center">Úmidade do ar</p>
            <img
              className="h-16 w-16 2xl:h-32 2xl:w-32"
              src="/icons/humidity.png"
              alt="Uma gota de água com simbolo de porcentagem"
            />
            <p className="text-gray-400 text-lg 2xl:text-3xl font-medium">
              {data.main.humidity}%
            </p>
          </div>
          <div className="flex flex-col lg:col-span-2 justify-center items-center bg-white p-4 rounded-2xl shadow-lg
          ">
            <p className="text-xl font-medium text-center 2xl:text-3xl">
              Velocidade do vento
            </p>
            <img className="h-16 w-16 2xl:h-32 2xl:w-32" src="/icons/vento.png" alt="Ventos" />
            <p className="text-gray-400 font-medium text-lg 2xl:text-3xl">
              {data.wind.speed}km/h
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-4 rounded-2xl shadow-lg
          ">
            <p className="text-xl font-medium 2xl:text-3xl">Máx.</p>
            <img
              className="h-16 w-16 2xl:h-32 2xl:w-32"
              src="/icons/warm.png"
              alt="Termômetro no máximo"
            />
            <p className="text-gray-400 font-medium text-lg 2xl:text-3xl">
              {Math.trunc(data.main.temp_max)}°
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-4 rounded-2xl shadow-lg">
            <p className="text-xl font-medium 2xl:text-3xl">Min.</p>
            <img
              className="h-16 w-16 2xl:h-32 2xl:w-32"
              src="/icons/cold.png"
              alt="Termômetro no minímo"
            />
            <p className="text-gray-400 font-medium text-lg 2xl:text-3xl">
              {Math.trunc(data.main.temp_min)}°
            </p>
          </div>

          <div className="flex flex-col lg:col-span-2 justify-center items-center bg-white p-4 rounded-2xl shadow-lg 2xl:h-[25vh]">
            <p className="text-xl font-medium 2xl:text-3xl" >Pressão</p>
            <img
              className="h-16 w-16 2xl:h-32 2xl:w-32"
              src="/icons/windy.png"
              alt="Nuvem com ventos"
            />
            <p className="text-gray-400 font-medium text-lg 2xl:text-3xl">
              {data.main.pressure} hPa
            </p>
          </div>
          <div className="flex flex-col lg:col-span-2 justify-center items-center bg-white p-4 rounded-2xl shadow-lg 2xl:h-[25vh]">
            <p className="text-xl font-medium 2xl:text-3xl">Nuvens</p>
            <img className="h-16 w-16 2xl:h-32 2xl:w-32" src="/icons/nublado.png" alt="Nuvens" />
            <p className="text-gray-400 font-medium text-lg 2xl:text-3xl">
              {data.clouds.all}%
            </p>
          </div>

          <div className="flex flex-col justify-center items-center bg-white p-4 rounded-2xl shadow-lg 2xl:h-[25vh]">
            <img
              className="h-16 w-16 2xl:h-32 2xl:w-32"
              src="/icons/sunrise.png"
              alt="Sol nascendo"
              />
            <p className="text-gray-400 font-medium text-lg 2xl:text-3xl">
              {moment.unix(data.sys.sunrise).format("HH:mm")}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-4 rounded-2xl shadow-lg 2xl:h-[25vh]">
            <img
              className="h-16 w-16 2xl:h-32 2xl:w-32"
              src="/icons/sunset.png"
              alt="Sol se pondo"
              />
            <p className="text-gray-400 font-medium text-lg 2xl:text-3xl">
              {moment.unix(data.sys.sunset).format("HH:mm")}
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
          <DadosSlider data={data}/>
      </div>
    </div>
  );
}
