/* eslint-disable react/jsx-no-duplicate-props */
import React,{useState} from 'react'

const App = () => {
  
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
        }
      ).catch(error => console.log(error))
      setCity("");
  }

  return (
    <div >
      <center>
        <div className="card" class="form" >
          <div className="card-body">
            <h4 className="card-title" class="text">Weather App</h4>
            <form onSubmit={submitHandler} class="form1" >
              <input size="30" type="text" name="city" onChange={changeHandler} value={city}/> <br /><br />
              <input type="submit" value="Get Temperature"  class="button"/>
            </form><br /> <br />
            <div>
               <h1>{result}</h1> 
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App
