import React, { useEffect, useState } from "react";
import axios from "axios";

const Form2 = (props) => {
  const [newRegistration, setnewRegistration] = useState({
    fullname: "",
    // email: "",
    phone: "",
    passwd: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setnewRegistration({ ...newRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const StoreId = { ...newRegistration, id: new Date().getTime().toString() };
    setRecords([...records, StoreId]);
    console.log(records);
    postDataToServer(records);

    setnewRegistration({ fullname: "", email: "", phone: "", passwd: "" });
  };
  // props.reciveFormData(records);
  useEffect(() => {
    props.reciveFormData(records);
  }, [records]);
  const postDataToServer = (data) => {
    axios.post("https://jsonplaceholder.typicode.com/posts", data).then(
      (response) => {
        // setUser(response.data);
        console.log(response);
        console.log("sucess");
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };
  return (
    <div className="flex justify-center items-center bg-purple-500 h-screen text-white text-lg font-semibold flex-col">
      <form action="" onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="fname">Full Name</label>
        <input
          type="text"
          onChange={handleInput}
          autoComplete="off"
          value={newRegistration.fullname}
          name="fullname"
          id="fullname"
          className="text-gray-700 px-0.5 text-lg font-semibold"
        />

        {/* <label htmlFor="email">Email</label>
        <input
          type="email"
          autoComplete="off"
          value={newRegistration.email}
          onChange={handleInput}
          name="email"
          id="email"
          className="text-gray-700 px-0.5 text-lg font-semibold"
        /> */}

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          value={newRegistration.phone}
          onChange={handleInput}
          name="phone"
          id="phone"
          className="text-gray-700 px-0.5 text-lg font-semibold"
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          value={newRegistration.passwd}
          onChange={handleInput}
          name="passwd"
          id="passwd"
          className="text-gray-700 px-0.5 text-lg font-semibold"
        />
        <button type="submit">Submit</button>
      </form>

      {/* <div>
        {records.map((curElement) => {
          const { id, fullname, email, phone, passwd } = curElement;
          return (
            <div key={id} className="flex gap-5">
              <p>Name: {fullname}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Password: {passwd}</p>

              <p>{curElement.fullname}</p>
              <p>{curElement.email}</p>
              <p>{curElement.phone}</p>
              <p>{curElement.passwd}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Form2;

{
  <div>
    {records.map((curElement) => {
      const { id, fname, lname, email, phone, passwd } = curElement;
      return (
        <div key={id}>
          <p>Name: {fname}</p>
          <p>Name: {lname}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Password: {pwd}</p>
        </div>
      );
    })}
  </div>;
}
