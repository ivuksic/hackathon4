import { useState, useEffect } from "react";

function Results({ limit, setLimit }) {
  return (
    <div>
      <button onClick={() => setLimit(limit === 5 ? limit : limit - 5)}>
        Previous
      </button>
      <button onClick={() => setLimit(limit + 5)}>Next</button>
    </div>
  );
}

export default Results;
