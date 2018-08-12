import React from "react";



class Weather extends React.Component{
  render(){
    return(
      <React.Fragment >
    {this.props.city  && this.props.city && <p>Location: {this.props.city} , {this.props.country}.</p>}
   {this.props.temperature &&<p>Temperature: {this.props.temperature}.</p>}
     {this.props.humidity &&<p>Humidity: {this.props.humidity}%.</p>}
  {this.props.conditions &&<p>Conditions: {this.props.conditions}.</p>}

    {this.props.error && <p>{this.props.error}.</p>}

    </React.Fragment>
    )
  }
}

export default Weather;
