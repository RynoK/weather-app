import React from "react";


class Form extends React.Component{
  render(){
    return(

      <form onSubmit={this.props.getWeather}>

      <input  type= "text" name="city" placeholder="your city"></input>
      <input  type= "text" name="country" placeholder="your country"></input>
      <button>GET WEATHER</button>
      </form>


    );
  }
}

export default Form;
