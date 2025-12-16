import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

let cityContext = createContext(null)

export function WeatherWidget(){
  
  let cityName = useContext(cityContext);

  const[weatherObj,setWeatherObj] = useState( { main: {temp:0}, main:{feels_like:''}, weather:[{description:""}], wind:{speed:0} } );

  useEffect( ()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=81cf2185c7300b7f9fcf5cd69ed53942&units=metric`)
    
    .then(response=>{
      setWeatherObj(response.data)
    })
  },[cityName] )

  return(
    <div>
      <h3>{weatherObj.name}</h3>
      <dl>
        <dt>Temp</dt>
        <dd>{weatherObj.main.temp} &deg; C</dd>
        <dt className="bi bi-cloud"> Description</dt>
        <dd>{weatherObj.weather[0].description}</dd>
        <dt className="bi bi-water"> WindSpeed</dt>
        <dd>{weatherObj.wind.speed.toLocaleString( 'en-in', {style:"unit", unit:"kilometer-per-hour"} )}</dd>
        <dt>Feels like</dt>
        <dd>{weatherObj.main.feels_like}</dd>
      </dl>
    </div>
  )

}


export function WeatherAPI(){

  const[searchText, setSearchText] = useState();
  const[contextValue,setContextValue] = useState('Delhi');

  function handleTextChange(e){
    setSearchText(e.target.value);
  }
  function handleSearchClick(){
    setContextValue(searchText);
  }

  return(
    <div className="container-fluid d-flex justify-content-center align-items-center bg-dark"     style={{height:'100vh'}}>
      <div className="p-4 border border-1 w-50 bg-white">
        <div className="input-group">
          <input type="text" onChange={handleTextChange} placeholder="Enter City Name" className="form-control" />
          <button onClick={handleSearchClick} className="btn btn-danger bi bi-search"></button>
        </div>
        <div className="mt-4">
          <cityContext.Provider value={contextValue}>
            <WeatherWidget/>
          </cityContext.Provider>
        </div>
      </div>
    </div>
  )
}