import { useState } from "react";

function Dropdown({ setArrival, setDeparture }) {

  const [arr, setArr] = useState("")
  const [dep, setDep] = useState("")

  const clickHandler = () => {
    setArrival(arr);
    setDeparture(dep);
  }

  return (
    <>
      <div>
        <select name="Departure" id="depart" onChange={(e) => setDep(e.target.value)}>
          Departure
          <option value="">Deaprture</option>
          <option value="PRG">Prague</option>
          <option value="BER">Berlin</option>
          <option value="WAW">Warsaw</option>
          <option value="PED">Pardubice</option>
        </select>
      </div>

      <div>
        <select name="Arrivals" id="arrival" onChange={(e) => setArr(e.target.value)}>
          Departure
          <option value="">Destination</option>
          <option value="VLC">Valencia</option>
          <option value="BCN">Barcelona</option>
          <option value="MAD">Madrid</option>
          <option value="MXP">Milano</option>
          <option value="ATH">Athens</option>
        </select>
      </div>

      <button onClick={clickHandler}>Search</button>
    </>
  );
}

export default Dropdown;
