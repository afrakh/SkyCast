import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CardMedia.css'

export default function MediaCard({cardInfo}) {
  let info = {
        temp:cardInfo.temp,
        feels_like:cardInfo.feels_like,
        min_temp:cardInfo.min_temp,
        max_temp:cardInfo.max_temp,
        pressure:cardInfo.pressure,
        humidity:cardInfo.humidity,
        description:cardInfo.description,
        city:cardInfo.city
    }
 
  return (


    <div className = "card" >
      
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.description.includes("haze") ? "/haze.avif" :
            info.description.includes("rain") ? "/rain.avif" :
            info.description.includes("clear") ? "/hot.avif" :
            info.description.includes("clouds") ? "clouds.avif" :
            info.description.includes("snow") ? "/winter.avif" :
            "/default.avif"
  }
        title="weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} - {info.description} &nbsp;
          {info.description.includes("snow") ? <i className="fa-solid fa-snowflake"></i>:
          info.description.includes("clouds") ? <i className="fa-solid fa-cloud"></i> :
          info.description.includes("rain") ? <i className="fa-solid fa-umbrella"></i> :
          <i class="fa-solid fa-sun"></i>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          
          Temperature: {info.temp}°C<br /><br />
          Min Temp: {info.min_temp}°C<br /><br />
          Max Temp: {info.max_temp}°C<br /><br />
          Pressure: {info.pressure} hPa<br /><br />
          Humidity: {info.humidity}%<br /><br />
          The weather can be described as <i>{info.description} </i>and feels like <i>{info.feels_like}</i>

       
        </Typography>
      </CardContent>
      
    </Card>
    </div>

    
  );
}
