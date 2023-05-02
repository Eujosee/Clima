import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import moment from "moment";
import "moment/dist/locale/pt-br";
moment.locale("pt-br");

export default function PrevSlider({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <Slider {...settings}>
      <div className="flex flex-col lg:col-span-2 justify-center items-center bg-white p-4 rounded-2xl shadow-lg text-center mx-2">
        <p className="text-xl font-medium text-center">Úmidade do ar</p>
        <div className="w-full flex items-center justify-center">
          <img
            className="h-16 w-16"
            src="/icons/humidity.png"
            alt="Uma gota de água com simbolo de porcentagem"
          />
        </div>
        <p className="text-gray-400 text-lg font-medium">
          {data.main.humidity}%
        </p>
      </div>
      <div className="flex flex-col lg:col-span-2 justify-center items-center bg-white p-4 rounded-2xl shadow-lg text-center mx-2">
        <p className="text-xl font-medium text-center">Velocidade do vento</p>
        <div className="w-full flex items-center justify-center">
          <img className="h-16 w-16" src="/icons/vento.png" alt="Ventos" />
        </div>
        <p className="text-gray-400 font-medium text-lg">
          {data.wind.speed}km/h
        </p>
      </div>

      <div className="flex flex-col lg:col-span-2 justify-center items-center bg-white p-4 rounded-2xl shadow-lg text-center mx-2">
        <p className="text-xl font-medium">Pressão</p>
        <div className="w-full flex items-center justify-center">
          <img
            className="h-16 w-16"
            src="/icons/windy.png"
            alt="Nuvem com ventos"
          />
        </div>
        <p className="text-gray-400 font-medium text-lg">
          {data.main.pressure} hPa
        </p>
      </div>
      <div className="flex flex-col lg:col-span-2 justify-center items-center bg-white p-4 rounded-2xl shadow-lg text-center mx-2">
        <p className="text-xl font-medium">Nuvens</p>
        <div className="w-full flex items-center justify-center">
          <img className="h-16 w-16" src="/icons/nublado.png" alt="Nuvens" />
        </div>
        <p className="text-gray-400 font-medium text-lg">{data.clouds.all}%</p>
      </div>

      <div className="flex flex-col justify-center items-center bg-white p-4 rounded-2xl shadow-lg text-center mx-2">
        <div className="w-full flex items-center justify-center">
          <img
            className="h-16 w-16"
            src="/icons/sunrise.png"
            alt="Sol nascendo"
          />
        </div>
        <p className="text-gray-400 font-medium text-lg">
          {moment.unix(data.sys.sunrise).format("HH:mm")}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center bg-white p-4 rounded-2xl shadow-lg text-center mx-2">
        <div className="w-full flex items-center justify-center">
          <img
            className="h-16 w-16"
            src="/icons/sunset.png"
            alt="Sol se pondo"
          />
        </div>
        <p className="text-gray-400 font-medium text-lg">
          {moment.unix(data.sys.sunset).format("HH:mm")}
        </p>
      </div>
    </Slider>
  );
}
