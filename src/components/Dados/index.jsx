import moment from "moment";
import DadosSlider from "../DadosSlider"

export default function Dados({ data }) {
  return (
    <div className="w-full max-h-1/2 p-6 pt-0 flex flex-col">
      <h3 className="text-xl font-semibold mb-3 text-center md:text-start">Dados de hoje</h3>
      <div className="hidden md:flex md:flex-col gap-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-6 w-full gap-4">
          <div className="flex flex-col lg:col-span-2 justify-center items-center bg-white p-4 rounded-2xl shadow-lg
          transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200
          ">
            <p className="text-xl font-medium text-center">Úmidade do ar</p>
            <img
              className="h-16 w-16"
              src="/icons/humidity.png"
              alt="Uma gota de água com simbolo de porcentagem"
            />
            <p className="text-gray-400 text-lg font-medium">
              {data.main.humidity}%
            </p>
          </div>
          <div className="flex flex-col lg:col-span-2 justify-center items-center bg-white p-4 rounded-2xl shadow-lg
          transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200
          ">
            <p className="text-xl font-medium text-center">
              Velocidade do vento
            </p>
            <img className="h-16 w-16" src="/icons/vento.png" alt="Ventos" />
            <p className="text-gray-400 font-medium text-lg">
              {data.wind.speed}km/h
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-4 rounded-2xl shadow-lg
          transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200
          ">
            <p className="text-xl font-medium">Máx.</p>
            <img
              className="h-16 w-16"
              src="/icons/warm.png"
              alt="Termômetro no máximo"
            />
            <p className="text-gray-400 font-medium text-lg">
              {Math.trunc(data.main.temp_max)}°
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-4 rounded-2xl shadow-lg
          transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
            <p className="text-xl font-medium">Min.</p>
            <img
              className="h-16 w-16"
              src="/icons/cold.png"
              alt="Termômetro no minímo"
            />
            <p className="text-gray-400 font-medium text-lg">
              {Math.trunc(data.main.temp_min)}°
            </p>
          </div>

          <div className="flex flex-col lg:col-span-2 justify-center items-center bg-white p-4 rounded-2xl shadow-lg
          transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
            <p className="text-xl font-medium">Pressão</p>
            <img
              className="h-16 w-16"
              src="/icons/windy.png"
              alt="Nuvem com ventos"
            />
            <p className="text-gray-400 font-medium text-lg">
              {data.main.pressure} hPa
            </p>
          </div>
          <div className="flex flex-col lg:col-span-2 justify-center items-center bg-white p-4 rounded-2xl shadow-lg
          transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
            <p className="text-xl font-medium">Nuvens</p>
            <img className="h-16 w-16" src="/icons/nublado.png" alt="Nuvens" />
            <p className="text-gray-400 font-medium text-lg">
              {data.clouds.all}%
            </p>
          </div>

          <div className="flex flex-col justify-center items-center bg-white p-4 rounded-2xl shadow-lg
          transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
            <img
              className="h-16 w-16"
              src="/icons/sunrise.png"
              alt="Sol nascendo"
              />
            <p className="text-gray-400 font-medium text-lg">
              {moment.unix(data.sys.sunrise).format("HH:mm")}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-4 rounded-2xl shadow-lg
          transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
            <img
              className="h-16 w-16"
              src="/icons/sunset.png"
              alt="Sol se pondo"
              />
            <p className="text-gray-400 font-medium text-lg">
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
