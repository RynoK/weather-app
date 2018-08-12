import React from "react";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import Header from "./Components/Header";



const API_KEY="9f3460742745674e6bea9e291afb607c";

class App extends React.Component{

state={
  city: undefined,
  country: undefined,
  temperature: undefined,
  error:undefined
}
  getWeather = async (e) =>{
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await API_call.json();
    const error = data.cod;
    console.log(data);
if(city && country && error!=="404"){
    this.setState({
      city:data.name,
      country:data.sys.country,
      temperature:data.main.temp,
      humidity:data.main.humidity,
      conditions:data.weather[0].main,
        error:""
    });
}
else{
  this.setState({
    city:undefined,
    country:undefined,
    temperature:undefined,
    humidity:undefined,
    conditions:undefined,
    error:'please fill up with valid values...'
});
}
}
  render(){
    return(

      <div className="wrapper">

        <div className="main-area">
        <Header />
        <Form getWeather = {this.getWeather}/>
        <div className='wb'><Weather
      city =  {this.state.city}
        temperature = {this.state.temperature}
        country =  {this.state.country}
        humidity ={this.state.humidity}
        conditions ={this.state.conditions}
          error =  {this.state.error}


        />
  </div>
    </div>
      </div>


    );
  }
}


export default App;
