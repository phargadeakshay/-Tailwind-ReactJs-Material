import logo from "./logo.svg";
import "./App.css";
import Form2 from "./componets/Form2";
import React, { useState } from "react";
import PrintData from "./componets/PrintData";
import Accordian from "./accordianFolder/Accordian";
import DebTodoList from "./Deb_Training/DebTodoList";
import MyTodoList from "./Deb_Training/MyTodoList";
import Student from "./ClassBaseComponent/Student";
import GetCake from "./Deb_Training/GetCake";

function App() {
  const [FormdataInapp, setFormdataInapp] = useState([]);
  const storedata = (data1) => {
    setFormdataInapp(data1);
    console.log(data1, "all data", FormdataInapp);
  };
  return (
    // <div className="grid grid-cols-2">
    //   <Form2 reciveFormData={storedata} />
    //   <div className=" flex h-screen bg-red-400 justify-center overflow-scroll">
    //     <PrintData sendforprint={FormdataInapp} />
    //   </div>
    // </div>
    // <Accordian />
    <div>
      {/* <DebTodoList /> */}
      <MyTodoList />
      {/* <GetCake /> */}
      {/* <Student name="rahul" /> */}
    </div>
  );
}

export default App;
