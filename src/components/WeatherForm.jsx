var React = require('react');

var WeatherForm = React.createClass({
    onButtonClick: function(e){
        e.preventDefault;
        this.props.onSearchWeather(this.refs.location.value);
    },
    render: function(){
        return (
            <form onSubmit={this.onButtonClick}>
                <input type="text" ref="location"/>
                <button type="submit">Get Weaghter</button>
            </form>
        );
    }
});

module.exports = WeatherForm;