import React from "react";
import { useState } from "react";
export default function App() {
  const [number, setnumber] = useState();
  const [error, seterror] = useState();
  const handlechange = (event) => {
    const value = event.target.value;
    if (value && parseInt(value) && value[0] >= 5 && value.length === 10) {
      setnumber(value);
      seterror(null);
    } else {
      setnumber(null);
      seterror(
        "First number should be greater than 9 and total length is equal to or greater than 10"
      );
    }
  };
  return (
    <main>
      <div className="main">
        <input
          type={"number"}
          placeholder={"Number"}
          value={number}
          onChange={handlechange}
        />
        <div style={{ color: "red" }}>{error}</div>
        {!error && number ? (
          <button type="button" className="btn btn-primary" style={{backgroundColor:"green",color:"whitesmoke"}}>
            Check Me
          </button>
        ) : (
          <button type="button" className="btn btn-secondary" style={{backgroundColor:"grey",color:"whitesmoke"}} disabled={!number}>
            Check Me
          </button>
        )}
      </div>
    </main>
  );
}
