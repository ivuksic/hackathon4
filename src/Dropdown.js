import { useState } from "react";

function Dropdown({ setArrival, setDeparture, setDirect }) {
  const [arr, setArr] = useState("");
  const [dep, setDep] = useState("");
  const [dir, setDir] = useState(false);

  const clickHandler = () => {
    setArrival(arr);
    setDeparture(dep);
    setDirect(dir);
    console.log(dir);
  };

  return (
    <>
      <div className="searchbox">
        <div className="search">Depart from:</div>
        <div className="departure">
          <select
            name="Departure"
            id="depart"
            onChange={(e) => setDep(e.target.value)}
            placeholder="Departure"
          >
            <option value="" disabled selected>Departure</option>
            <option value="PRG">Prague</option>
            <option value="BER">Berlin</option>
            <option value="WAW">Warsaw</option>
            <option value="PED">Pardubice</option>
            <option value="BRQ">Brno</option>
            <option value="VIE">Vienna</option>
            <option value="OSR">Ostrava</option>
          </select>
        </div>

        <div className="search">Arrive at:</div>
        <div className="arrival">
          <select
            name="Arrivals"
            id="arrival"
            onChange={(e) => setArr(e.target.value)}
          >
            <option value="" disabled selected>Destination</option>
            <option value="VLC">Valencia</option>
            <option value="BCN">Barcelona</option>
            <option value="MAD">Madrid</option>
            <option value="MXP">Milano</option>
            <option value="ATH">Athens</option>
            <option value="ZAG">Zagreb</option>
            <option value="SPU">Split</option>
            <option value="KTM">Kathmandu</option>
          </select>
        </div>
        <div className="search">Direct:</div>
        <div className="directBtn">
          <input type="checkbox" name="direct" onChange={() => setDir(!dir)} />
        </div>
        <button onClick={clickHandler}>Search</button>
      </div>
    </>
  );
}

export default Dropdown;
