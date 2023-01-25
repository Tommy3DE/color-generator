import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

const Generator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#87a6d8').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors)
      console.log(colors)
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#5f6c9e"
            className={`${error?'error':null}`}
          ></input>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index)=>{
            return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
      </section>
    </>
  );
};

export default Generator;
