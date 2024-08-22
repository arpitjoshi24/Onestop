import React, { useState } from "react";
import axios from "axios";
import logo from "./assets/logo-01.png";

export default function Book() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    package: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, address, package: pkg, query } = formData;

    // Basic validation
    if (!name || !email || !number || !address || !pkg || !query) {
      alert("Please fill in all fields");
      return;
    }

    axios
      .post("http://localhost:3001/appointment", formData)
      .then((result) => {
        console.log(result);
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          number: "",
          address: "",
          package: "",
          query: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-pink-50">
      <div className="flex justify-center py-6">
        <img src={logo} alt="Logo" width={300} height={300} />
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <h4 className="text-center font-bold text-4xl">Book an Appointment</h4>
          <form
            onSubmit={handleSubmit}
            className="border-4 bg-black border-white mx-auto p-4 py-4 space-y-3 my-4"
          >
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              className="border-2 border-pink-200 p-1 w-full text-sm focus:outline-none focus:border-indigo-500 transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-105"
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              className="border-2 border-pink-200 p-1 w-full text-sm focus:outline-none focus:border-indigo-500 transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-105"
              onChange={handleChange}
            />

            <input
              type="tel"
              placeholder="Enter Number"
              name="number"
              value={formData.number}
              className="border-2 border-pink-200 p-1 w-full text-sm focus:outline-none focus:border-indigo-500 transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-105"
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Enter address"
              name="address"
              value={formData.address}
              className="border-2 border-pink-200 p-1 w-full text-sm focus:outline-none focus:border-indigo-500 transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-105"
              onChange={handleChange}
            />

            <select
              name="package"
              value={formData.package}
              className="border-2 border-pink-200 p-1 w-full text-sm focus:outline-none focus:border-indigo-500 transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-105"
              onChange={handleChange}
            >
              <option value="" disabled>Select Package</option>
              <option value="Package">Package</option>
              <option value="Services">Services</option>
              <option value="Training">Training</option>
            </select>

            <textarea
              placeholder="Enter your query here"
              name="query"
              value={formData.query}
              className="border-2 border-pink-200 p-1 w-full text-sm focus:outline-none focus:border-indigo-500 transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-105"
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="border-2 border-pink-500 bg-pink-500 text-white p-2 w-full mt-4 hover:bg-pink-600"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
