import React, { useState } from "react";

const Demotest = () => {
  const [first, setfirst] = useState("");
  
  const handleChange = (e) => {
    setfirst(e.target.value);
  };
  return (
    <div>
      <label>name</label>
      <input type="text" onChange={handleChange} />
      <br />
      {first}
    </div>
  );
};

export default Demotest;
