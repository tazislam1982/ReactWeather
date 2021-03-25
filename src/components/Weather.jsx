var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getDefaultProps: function(){
        return {
            city: '', 
            tempature:''
        };
    },
    getInitialState: function(){
        return {
            isLoading: false
        };
    },
    handleSearchWeather: function(city){

      //get weather
      var that = this;
      that.setState({
        isLoading: true
      });
      openWeatherMap.getTemp(city).then(function(temp){
        that.setState({
            city: city,
            tempature: temp,
            isLoading: false
          });
      },function(error){
        that.setState({
            isLoading: false
          });
        alert(error);
      });
     
    },
     renderWeatherMessage: function(){
        var {isLoading,city,tempature} = this.state;
        if(isLoading){
            return <h3>Feacting Weathers...</h3>
        }else if(city && tempature){
            return <WeatherMessage city={city} tempature={tempature} />;
        }
    },
    render: function(){      
        return (
            <div>
                <h3>Weather child page</h3>
                <WeatherForm  onSearchWeather={this.handleSearchWeather} />
                { this.renderWeatherMessage()}
            </div>
            
        );
    }
});

module.exports = Weather;