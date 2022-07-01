import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import FlightInfo from "./FlightInfo";
import Dropdown from "./Dropdown";
import Results from "./Results";
import Loader from "./Loader";

function App() {
  const [flights, setFlights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [direct, setDirect] = useState(false);
  const [limit, setLimit] = useState(0);
  const [numResults, setNumResults] = useState(0);
  const [warning, setWarning] = useState(false);

  const Testurl =
    "https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&partner=data4youcbp202106";

  const fetchData = async () => {
    let url = `https://api.skypicker.com/flights?fly_from=${departure}&fly_to=${arrival}&partner=data4youcbp202106&limit=5&offset=${limit}`;
    if (direct == true) {
      url += "&max_stopovers=0";
    }
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setLoading(false);
    setFlights(data.data);
    setNumResults(data._results);
    if (data._results == 0) {
      setWarning(true);
    } else {
      setWarning(false);
    }
    console.log(data._results);
  };

  useEffect(() => {
    fetchData();
  }, [arrival, departure, limit, direct]);

  return (
    <div>
      <h1>Our Wonderful Flight App</h1>
      <div className="searchBar">
        <Dropdown
          setArrival={setArrival}
          setDeparture={setDeparture}
          setDirect={setDirect}
        />
      </div>
      <div>
        <Results limit={limit} setLimit={setLimit} numResults={numResults} />
      </div>

      <div className="resultsContainer">
        {loading && <Loader />}
        {flights && (
          <h2>
            {numResults} flights found: ({limit + 1} to{" "}
            {limit + 5 > numResults ? numResults : limit + 5})
          </h2>
        )}
        {flights &&
          flights.map((flight, i) => <FlightInfo key={i} data={flight} />)}
        {warning && (
          <h2>
            Sorry, but no flights were found. Take a bus instead, or search
            again!
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
