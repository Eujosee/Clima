export default function clearData( data ){
    if (data.length <= 0) return;

    const forecastData = data.list.reduce((acc, item) => {
      const date = item.dt_txt.split(" ")[0];
      const dayData = acc.find((day) => day.date === date);
      const time = item.dt_txt.split(" ")[1];
      if (!dayData) {
        acc.push({
          date,
          minTemp: item.main.temp_min,
          maxTemp: item.main.temp_max,
          icon: time === "12:00:00" ? item.weather[0].icon : null
        });
      } else{
        dayData.minTemp = Math.min(dayData.minTemp, item.main.temp_min);
        dayData.maxTemp = Math.max(dayData.maxTemp, item.main.temp_max);
        if (!dayData.icon) {
            dayData.icon = time === "12:00:00" ? item.weather[0].icon : null;
        }
      }
      return acc;
    }, []);
    
    return forecastData.filter(item => item.icon !== null)
}