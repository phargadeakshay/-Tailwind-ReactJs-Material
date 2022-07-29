import React, { useState } from "react";
import { questions } from "./api";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <div>
      <section>
        <h1 className="text-3xl font-bold">React Interview Questions</h1>
        {data.map((curElem) => {
          const { id } = curElem;
          return <MyAccordian key={id} {...curElem} />;
        })}
      </section>
    </div>
  );
};

export default Accordian;
