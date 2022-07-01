import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import FlightInfo from "./FlightInfo";
import Dropdown from "./Dropdown";
import Results from "./Results";

function App() {
  const [flights, setFlights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [direct, setDirect] = useState(false);
  const [limit, setLimit] = useState(5);

  const Testurl =
    "https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&partner=data4youcbp202106";

  const fetchData = async () => {
    const url = `https://api.skypicker.com/flights?fly_from=${departure}&fly_to=${arrival}&partner=data4youcbp202106&limit=${limit}`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setLoading(false);
    setFlights(data.data.slice(limit - 5));
  };

  useEffect(() => {
    fetchData();
  }, [arrival, departure, limit]);

  return (
    <div>
      <h1>Our Wonderful Flight App</h1>
      <div className="searchBar">
        <Dropdown
          setArrival={setArrival}
          setDeparture={setDeparture}
          direct={setDirect}
        />
      </div>
      <div>
        <Results limit={limit} setLimit={setLimit} />
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
