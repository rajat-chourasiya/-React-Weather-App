import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/react.svg'

function App() {
   let [city,setCity]=useState('')
   let [wDeatils,setWdetails]= useState()
   let [isLoading,setIsLoading] = useState(false)

   let getData=(event)=>{
    setIsLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
    .then((res)=>res.json())
    .then((finalRes)=>{
      
      if(finalRes.cod=="404"){
        setWdetails(undefined)
      }
      else{
        setWdetails(finalRes)
      }
      
      setIsLoading(false)
    })
    event.preventDefault()
    setCity('')
   }

  return (
    <>
   <div className="app-container">
      <div className="inner-container">
        <h1 className="title">Simple Weather App</h1>

        <form onSubmit={getData} className="form-group">
          <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className="input-field" placeholder="City Name" />
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        <div className="weather-card relative">
          <img src='./src/assets/loading-3.gif' width={400} className={` ${isLoading ? '' : 'hidden'} `}></img>
          {wDeatils!==undefined
          ?
          <>
          <h3 className="weather-location">
            {wDeatils.name}<span className="country-highlight">{wDeatils.sys.country}</span>
          </h3>
          <h2 className="weather-temp">{wDeatils.main.temp}<sup>°C</sup></h2>
          <img
            src={`http://openweathermap.org/img/w/${wDeatils.weather[0].icon}.png`}
            alt="Weather icon"
            className="weather-icon"
          />
          <p className="weather-description">{wDeatils.weather[0].description}</p>
          </>
          :
          "No Data"
          }
        </div>
      </div>
    </div>

    </>
  )
}

export default App
