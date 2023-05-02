import moment from "moment";
import "moment/dist/locale/pt-br";
import PrevSlider from "../PrevSlider";

moment.locale("pt-br");

export default function PrevSemana({data}) {

  return (
    <div className="w-full p-6 flex flex-col">
      <h1 className="text-xl 2xl:text-4xl font-semibold mb-3 text-center md:text-start">Próximos 5 dias</h1>
      <div className="hidden md:flex md:flex-row md:flex-1 md:justify-evenly lg:justify-between gap-x-4 flex-wrap gap-4">
        {data.map((item, index) => {
                    return(
                        <div key={index} className="flex flex-col items-center justify-center 2xl:justify-evenly gap-y-2 bg-white p-4 rounded-2xl shadow-lg w-40 2xl:w-[10vw]  2xl:h-[25vh]
                        ">
                            <p className="capitalize font-semibold text-lg 2xl:text-2xl">{moment(item.date).format('ddd')}.</p>
                            <img className="h-14 w-14 2xl:h-28 2xl:w-28" 
                            src={`/icons/${item.icon}.png`}
                            alt={`${item.icon}`}
                            />
                            <div className="flex gap-1">
                                <p className="font-medium 2xl:text-2xl">{Math.trunc(item.maxTemp)}°</p>
                                <p className="text-gray-400 font-medium 2xl:text-2xl">/ {Math.trunc(item.minTemp)}°</p>
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
