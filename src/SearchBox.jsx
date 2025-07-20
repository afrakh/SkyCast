import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from "react"

export default function SearchBox({newInfo}) {
    let [search, setSearch] = useState("");
    const [error, setError] = useState(false);

    const fetchWeatherByCity = async () => {
    const apiKey = "87e679045ff45e1c3877e22bd722d49b"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;


    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 

    if (data.cod === "404"){
        setError(true);
    }


    let responseObject = {
        temp:data.main.temp,
        feels_like:data.main.feels_like,
        min_temp:data.main.temp_min,
        max_temp:data.main.temp_max,
        pressure:data.main.pressure,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        city:search
    }

    console.log(responseObject);
    newInfo(responseObject);
    };
    

    let searchHandler = (event) => {
        setSearch(event.target.value);
    }

    let submitHandler = (event) => {
        event.preventDefault();
        fetchWeatherByCity();
        setSearch("");
        
    }

   

    return (
        <div>
            <h3>Search the Weather Condition</h3>

            <form onSubmit={submitHandler}>
            <TextField id="outlined-basic" label="City" variant="outlined" value = {search} onChange = {searchHandler}/>
            <br></br> <br></br>
            <Button type = "submit" variant="contained">Search</Button>
            </form>

            {error && <p style={{ color: "red", marginBottom: "10px" }}>No such place exists!</p>}
        </div>
    )
}