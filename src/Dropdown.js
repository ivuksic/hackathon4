import { useState } from "react";

function Dropdown({ setArrival, setDeparture, setDirect }) {

  const [arr, setArr] = useState("")
  const [dep, setDep] = useState("")
  const [dir, setDir] = useState(false)

  const clickHandler = () => {
    setArrival(arr);
    setDeparture(dep);
    setDirect(dir);
    console.log(dir)
  }

  return (
    <>
      <div className="searchbox">
        <div className="search">
          Depart from: 
        </div>
        <div className="departure">
          <select name="Departure" id="depart" onChange={(e) => setDep(e.target.value)}>
            <option value="">Deaprture</option>
            <option value="PRG">Prague</option>
            <option value="BER">Berlin</option>
            <option value="WAW">Warsaw</option>
            <option value="PED">Pardubice</option>
          </select>
        </div>

        <div className="search">
          Arrive at: 
        </div>
        <div className="arrival">
          <select name="Arrivals" id="arrival" onChange={(e) => setArr(e.target.value)}>
            <option value="">Destination</option>
            <option value="VLC">Valencia</option>
            <option value="BCN">Barcelona</option>
            <option value="MAD">Madrid</option>
            <option value="MXP">Milano</option>
            <option value="ATH">Athens</option>
          </select>
        </div>
        <div className="search">
          Direct: 
        </div>
        <div className="direct">
          <input type="checkbox" name="direct" onChange={() => setDir(!dir)}/>
        </div>
        <button onClick={clickHandler}>Search</button>
      </div>

      
    </>
  );
}

export default Dropdown;
