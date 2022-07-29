import React from "react";

const PrintData = (props) => {
  return (
    <div className="pt-36">
      {props.sendforprint.map((curElement) => {
        const { id, fullname, email, phone, passwd } = curElement;
        return (
          <div
            key={id}
            className="flex gap-1 flex-col mb-8 p-10 bg-pink-300 text-gray-700 font-semibold text-lg"
          >
            <p>Name: {fullname}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Password: {passwd}</p>

            {/* <p>{curElement.fullname}</p>
        <p>{curElement.email}</p>
        <p>{curElement.phone}</p>
        <p>{curElement.passwd}</p> */}
          </div>
        );
      })}
      <h1>hello</h1>
    </div>
  );
};

export default PrintData;
