import React, { useEffect, useState } from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";
import "h8k-components";
import { STUDENTS } from "./studentsList";

const title = "Hacker Dormitory";

function App() {
  const [stdData, setStdData] = useState({
    studentName: "",
    joiningDate: "",
  });

  const [error, setError] = useState("");
  const [residentsList, setResidentsList] = useState([]);

  const handleChange = (evt) => {
    setError("");
    const value = evt.target.value;
    const name = evt.target.name;

    setStdData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkDate = (joiningDate, validityDate) => {
    const jDate = new Date(joiningDate);
    const vDate = new Date(validityDate);
    console.log(jDate.getTime(), vDate.getTime());
    if (jDate.getTime() === vDate.getTime()) {
      return true;
    } else {
      return false;
    }
  };

  const checkValidity = () => {
    if (
      stdData.studentName === null ||
      stdData.studentName === "" ||
      stdData.studentName === " " ||
      stdData.joiningDate === null ||
      stdData.joiningDate === "" ||
      stdData.joiningDate === " "
    ) {
      alert("Please Enter Input Fields");
      return;
    }
    let arr = [...residentsList];

    const data = STUDENTS.filter(
      (std) =>
        std.name.toLowerCase().trim() ===
        stdData.studentName.toLowerCase().trim()
    );

    if (data.length !== 0) {
      const foundStd = data[0];
      if (checkDate(stdData.joiningDate, foundStd.validityDate)) {
        arr.push(foundStd);
        setResidentsList(arr);
        setStdData({
          studentName: "",
          joiningDate: "",
        });
      } else {
        setError(`Sorry, ${foundStd.name}'s validity has Expired!`);
      }
    } else {
      setError(`Sorry, ${stdData.studentName} is not a verified student!`);
    }
  };

  useEffect(() => {}, [error, residentsList]);
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          stdData={stdData}
          handleChange={handleChange}
          checkValidity={checkValidity}
        />
        <Error errorMsg={error} />
        <ResidentsList residentsList={residentsList} />
      </div>
    </div>
  );
}

export default App;
