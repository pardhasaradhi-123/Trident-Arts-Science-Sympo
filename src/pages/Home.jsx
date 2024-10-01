import React from "react";
import { Link } from "react-router-dom";
import bgVid from "../assets/bgVid.mp4";

const Home = () => {
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
        <Link to="https://forms.gle/cT57HSyc9Su2jz2Q6">
          <button
            className="bg-[#FF9900] hover:bg-[#FF7800] text-white font-bold py-2 px-4 rounded uppercase absolute z-10"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            registration form
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
