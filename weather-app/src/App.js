import React,{useState} from 'react'
import axios from 'axios';

/*const API_KEY = process.env.REACT_APP_API_KEY*/

function App() {
  const [data,setData] = useState({})
  const[location,setLocation]= useState('')
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=adfb7d15e2003ac78440fc18fecfa334`
  
   const searchLocation =(event)=>{
    if (event.key === 'Enter') {
      axios.get(url).then((response)=>{
        setData(response.data);
        console.log(response.data);
      })
      setLocation('')
    }
  
   }
   return (
    <div className="app">
      <div className="search">
        <input type="text"
        value={location} 
        onKeyPress={searchLocation}
        onChange={event => setLocation(event.target.value)}
        placeholder='Enter location'/>
      </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main? <h1>{data.main.temp}&#176;C</h1> : null}
  
            </div>
            <div className="description">
            {data.weather? <p>{data.sys.country}</p> :null}
            
            </div>
          </div>

     {data.name !== undefined && 

<div className="bottom">
<div className="feels">
  {data.main ? <p>{data.main.feels_like}&#176;C</p>:null} 
  <p>Feels like</p>
</div>
<div className="humidity">
 {data.main? <p className='bold'>{data.main.humidity}%</p>:null}
  <p>Humidity</p>
</div>
<div className="wind">
  {data.wind ? <p className='bold'>{data.wind.speed}miles/hour</p>: null}
  
  <p>wind speed</p>
</div>

</div>
     
     }

        </div>
   
    </div>
  );
}

export default App;
