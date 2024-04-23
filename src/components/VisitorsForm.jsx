import React, { useState } from "react";

const VisitationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    visitorType: "",
    whoToSee: { name: "", phoneNumber: "" },
    purpose: "",
    privateNote: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleWhoToSeeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      whoToSee: {
        ...prevData.whoToSee,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};

    if (!formData.fullName.trim()) {
      formErrors.fullName = "Name is required";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }

    if (!formData.phoneNumber.trim()) {
      formErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.visitorType.trim()) {
      formErrors.visitorType = "Select an option";
    }

    if (!formData.whoToSee.name.trim()) {
      formErrors.whoToSeeName = "Name of who to see is required";
    }

    if (!formData.whoToSee.phoneNumber.trim()) {
      formErrors.whoToSeePhoneNumber = "Phone number of who to see is required";
    }

    if (!formData.purpose.trim()) {
      formErrors.purpose = "Select an option";
    }

    if (Object.keys(formErrors).length === 0) {
      const existingData =
        JSON.parse(localStorage.getItem("visitorData")) || [];

      // Append new entry to the existing data
      const newData = [existingData, formData];
      // Save data to local storage
      localStorage.setItem("visitorData", JSON.stringify(newData));
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        visitorType: "",
        whoToSee: { name: "", phoneNumber: "" },
        purpose: "",
        privateNote: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className="textContainer">
        <h2 className="visitationForm">Visitation Form</h2>
        <p className="visitationFormText">
          {" "}
          Fill the details below to log your appointment
        </p>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb">
            <input
              className=""
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Visitor's Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="errors">{errors.fullName}</p>}
          </div>

          <div className="mb">
            <input
              className=""
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="errors">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="mb">
            <input
              className=""
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="errors">{errors.email}</p>}
          </div>
          <div className="mb">
            <select
              className=""
              type="text"
              id="visitorType"
              name="visitorType"
              value={formData.visitorType}
              onChange={handleChange}
            >
              <option disabled value="">
                Visitor Type
              </option>
              <option value="friend">Family</option>
              <option value="Friend">Friend</option>
              <option value="Vendor">Vendor</option>
            </select>

            {errors.visitorType && (
              <p className="errors">{errors.visitorType}</p>
            )}
          </div>
          <div className="mb">
            <input
              className=""
              type="text"
              id="whoToSee"
              name="name"
              placeholder="Who to see(Name)"
              value={formData.whoToSee.name}
              onChange={handleWhoToSeeChange}
            />
            {errors.whoToSeeName && (
              <p className="errors">{errors.whoToSeeName}</p>
            )}
          </div>
          <div className="mb">
            <input
              className=""
              type="tel"
              id="whoToSeeNo"
              name="phoneNumber"
              placeholder="Who to see(Phone Number)"
              value={formData.whoToSee.phoneNumber}
              onChange={handleWhoToSeeChange}
            />
            {errors.whoToSeePhoneNumber && (
              <p className="errors">{errors.whoToSeePhoneNumber}</p>
            )}
          </div>
          <div className="mb">
            <select
              className=""
              type="text"
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
            >
              <option disabled value="">
                Purpose for visit
              </option>
              <option value="Official">Official</option>
              <option value="Personal">Personal</option>
            </select>
            {errors.purpose && <p className="errors">{errors.purpose}</p>}
          </div>
          <div className="mb">
            <textarea
              className=""
              id="privateNote"
              name="privateNote"
              placeholder="Private Note"
              value={formData.privateNote}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="">
            Submit Request
          </button>
        </form>
      </div>
    </>
  );
};

export default VisitationForm;
