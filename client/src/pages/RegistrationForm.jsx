import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import bgVid from "../assets/bgVid.mp4";

const RegistrationForm = () => {
  const inputArr = [
    {
      label: "Name of the College",
      type: "text",
      placeholder: "Enter your College Name",
    },
    {
      label: "Name of the Student",
      type: "text",
      placeholder: "Enter your Name",
    },
    {
      label: "Contact number",
      type: "text",
      placeholder: "Enter your Contact Number",
    },
    {
      label: "Screenshot of Amount Paid",
      type: "file",
      placeholder: "Add Screenshot",
    },
  ];

  const checklistArr = [
    "Muses ( Solo singing with instrument )",
    "Alankar ( Group singing-fusion )",
    "Hip Hop Tamizha ( Rap Song )",
    "Aurora Groove ( DJ Hunt )",
    "Retro Returns ( Old Cinema Songs )",
    "Raaleela ( Adapt solo dance )",
    "Decibels ( Beat Boxing )",
    "Tenali ( Stand up Comedy )",
    "Aaha Mella Nada ( Ramp Walk )",
    "Acharyakuri ( Shipwreck )",
    "Logothon ( Logo Designing )",
  ];

  return (
    <>
      <div className="h-screen flex justify-center items-center relative">
        <video
          src={bgVid}
          loop
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="border-2 p-5 rounded-lg backdrop-blur-sm w-full max-w-lg h-3/4 overflow-auto shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-3xl text-indigo-700">
              Registration Form
            </h1>
            <Link to="/">
              <button>
                <IoClose size={35} color="red" />
              </button>
            </Link>
          </div>
          <form>
            <div className="py-5">
              {inputArr.map((eachInput) => {
                return (
                  <div className="flex flex-col py-2" key={eachInput.label}>
                    <label className="font-medium text-xl text-white">
                      {eachInput.label} :
                    </label>
                    <input
                      type={eachInput.type}
                      placeholder={eachInput.placeholder}
                      className="bg-gray-100 border-none rounded-md p-3 mt-2 placeholder:tracking-wide placeholder-gray-500"
                    />
                  </div>
                );
              })}
              <div className="py-5">
                <h2 className="font-medium text-xl text-indigo-700 pb-3">
                  Events:
                </h2>
                {checklistArr.map((item, index) => {
                  return (
                    <div className="flex items-center py-1" key={index}>
                      <input
                        type="checkbox"
                        id={`check-${index}`}
                        className="w-5 h-5 mr-3 text-indigo-700"
                      />
                      <label
                        htmlFor={`check-${index}`}
                        className="text-lg text-white"
                      >
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
              <button className="w-full p-3 bg-yellow-500 hover:bg-yellow-600 text-white uppercase rounded-md font-semibold tracking-wide">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
