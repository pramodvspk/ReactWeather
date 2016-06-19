var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h4 className="text-center">The temperature at {location} is {temp}</h4>
  );
};

module.exports = WeatherMessage;
