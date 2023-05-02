import moment from "moment";
import "moment/dist/locale/pt-br";
import PrevSlider from "../PrevSlider";

moment.locale("pt-br");

export default function PrevSemana({data}) {

  return (
    <div className="w-full p-6 flex flex-col">
      <h1 className="text-xl font-semibold mb-3 text-center md:text-start">Próximos 5 dias</h1>
      <div className="hidden md:flex md:flex-row md:flex-1 md:justify-evenly lg:justify-between gap-x-4 flex-wrap gap-4">
        {data.map((item, index) => {
                    return(
                        <div key={index} className="flex flex-col items-center justify-center gap-y-2 bg-white p-4 rounded-2xl shadow-lg w-40
                        transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200
                        ">
                            <p className="capitalize font-semibold text-lg">{moment(item.date).format('ddd')}.</p>
                            <img className="h-16 w-16" 
                            src={`/icons/${item.icon}.png`}
                            alt={`${item.icon}`}
                            />
                            <div className="flex gap-1">
                                <p className="font-medium">{Math.trunc(item.maxTemp)}°</p>
                                <p className="text-gray-400 font-medium">/ {Math.trunc(item.minTemp)}°</p>
                            </div>
                        </div>
                    )
        })}
      </div>
      <div className="block md:hidden">
        <PrevSlider data={data}/>
      </div>
    </div>
  );
}
