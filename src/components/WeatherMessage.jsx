var React = require('react');
var WeatherMessage = React.createClass({
    render: function(){
        var {city,tempature} = this.props;
        return (
            <p>It is {city} in {tempature}</p>
            
        );
    }
});

module.exports = WeatherMessage;