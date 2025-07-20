import CardMedia from './CardMedia.jsx';
import SearchBox from './SearchBox.jsx';
import { useState } from 'react';

export default function WeatherApp(){

    let [weatherInfo, setWeatherInfo] = useState({
        temp:31.91,
        feels_like:31.87,
        min_temp:27.79,
        max_temp:27.79,
        pressure:998,
        humidity:82,
        description:"broken clouds",
        city:"Karachi"
    })

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return (
        <>
    <SearchBox newInfo = {updateWeatherInfo}/>
    <CardMedia cardInfo = {weatherInfo}/>
    </>
    )
    
}