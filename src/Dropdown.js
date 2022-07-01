// import Departure from "./Departure";
import { useState } from "react";

function Dropdown({ flights }) {
  return (
    <>
      <div>
        <select name="Departure" id="depart">
          Departure
          <option value="">Deaprture</option>
          <option value="PRG">Prague</option>
          <option value="BER">Berlin</option>
          <option value="WAW">Warsaw</option>
          <option value="PED">Pardubice</option>
        </select>
      </div>

      <div>
        <select name="Arrivals" id="arrival">
          Departure
          <option value="">Destination</option>
          <option value="VLC">Valencia</option>
          <option value="BER">Barcelona</option>
          <option value="WAW">Madrid</option>
          <option value="PED">Milano</option>
          <option value="PED">Athens</option>
        </select>
      </div>
    </>
  );
}

export default Dropdown;
