import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import FlightInfo from "./FlightInfo";
import Dropdown from "./Dropdown";

function App() {
  const [flights, setFlights] = useState(null);
  const [loading, setLoading] = useState(true);
  const url =
    "https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&partner=data4youcbp202106&limit=5";

  const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setLoading(false);
    setFlights(data.data);
    console.log(data.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Our Wonderful Flight App</h1>
      <div className="searchBar">
        <Dropdown />
      </div>

      <div className="resultsContainer">
        {loading && <h2>Loading...</h2>}
        {flights &&
          flights.map((flight, i) => <FlightInfo key={i} data={flight} />)}
      </div>
    </div>
  );
}

export default App;
