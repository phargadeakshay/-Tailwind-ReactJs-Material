import React, { useState } from "react";

const MyAccordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mx-28">
      <div className="  grid m-5 bg-cyan-300 text-2xl  font-medium ">
        <div className="flex bg-cyan-400 items-center ">
          <p className="hover:cursor-pointer" onClick={() => setShow(!show)}>
            {" "}
            {show ? "➖" : "➕"}
          </p>
          <h1
            className="p-3 hover:cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {question}
          </h1>
        </div>
        {show && <p>{answer}</p>}
      </div>
    </div>
  );
};

export default MyAccordian;
