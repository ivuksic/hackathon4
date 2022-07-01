import { useState, useEffect } from "react";

function Results({ limit, setLimit, numResults }) {
  return (
    <div>
      <button disabled={limit === 0} onClick={() => setLimit(limit === 0 ? limit : limit - 5)}>
        Previous
      </button>
      <button disabled={limit + 5 >= numResults} onClick={() => setLimit(limit + 5)}>Next</button>
    </div>
  );
}

export default Results;
