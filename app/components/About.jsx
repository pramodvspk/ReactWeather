var React = require('react');

var About =  (props) => {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a single page React application built  by <a href="https://www.linkedin.com/in/pramodsripada">Pramod Sripada</a>.
          The github repository for this project can be found <a href="https://github.com/pramodvspk/ReactWeather">here</a>.
        </p>
        <p>
          Here are some of the tools I used
          <ul>
            <li>
              <a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework used
            </li>
            <li>
              <a href="https://opeaweathermap.org">Open Weather Map</a> - I used the Open Weather Map to search for the weather data using the city name
            </li>
          </ul>
        </p>
      </div>
    );
};

module.exports = About;
