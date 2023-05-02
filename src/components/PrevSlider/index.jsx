import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import moment from "moment";
import "moment/dist/locale/pt-br";
moment.locale("pt-br");

export default function PrevSlider({data}){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    return(
        <Slider {...settings} >
                {data.map((item, index) => {
                            return(
                                <div key={index} className="flex flex-col items-center justify-center text-center bg-white p-4 rounded-2xl shadow-lg mx-2
                                ">
                                    <p className="capitalize font-semibold text-lg">{moment(item.date).format('ddd')}.</p>
                                    <div className="w-full flex items-center justify-center">
                                        <img className="flex h-16 w-16" 
                                        src={`/icons/${item.icon}.png`}
                                        alt={`${item.icon}`}
                                        />  
                                    </div>
                                    <div className="flex items-center justify-center gap-1 text-center">
                                        <p className="font-medium">{Math.trunc(item.maxTemp)}°</p>
                                        <p className="text-gray-400 font-medium">/ {Math.trunc(item.minTemp)}°</p>
                                    </div>
                                </div>
                            )
                })}         
        </Slider>
    )
}