import React, { useState, useEffect } from "react";
import VisitationForm from "./VisitorsForm";
import { Link } from "react-router-dom";

const StaffCheck = () => {
  const [records, setRecords] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch("http://ezapi.issl.ng:3333/employeephone")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundRecord = records.find((record) => record.phoneno === phoneNumber);
    
    if (foundRecord) {
      window.location.href = `/${VisitationForm}`;
    }
    else {
      setError("Phone number not found")
    }
  }
  
  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
    setError("")
  }


  return (
    <div className="staffCheckContainer">
      <div className="steps">
        <h2>Staff Check Form</h2>
        <p>STEP 1/2</p>
      </div>
      <form onSubmit={handleSubmit} action="">
        <input
          type="tel"
          name=""
          id="phoneNoCheck"
          placeholder="Input phone number"
          value={phoneNumber}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>

        {error && <p id="errMessage">{error}</p>}
      </form>
    </div>
  );
};

export default StaffCheck;
