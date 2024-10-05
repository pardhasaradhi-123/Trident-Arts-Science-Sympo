import React from "react";
import { Link } from "react-router-dom";
import bgVid from "../assets/bgVid.mp4";
import elDorado from "../assets/elDorado.png";
import jeppiaarUniversity from "../assets/jeppiaarUniversity.jpg";
import Educity_Logo from "../assets/Jeppiaar Educity Logo_01-1.png";

const Home = () => {
  const IMG = [
    { src: jeppiaarUniversity },
    { src: elDorado },
    { src: Educity_Logo, width: "h-60 max-lg:h-52 max-sm:h-32" },
  ];
  return (
    <>
      <div className="h-full relative">
        <video
          src={bgVid}
          loop
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        ></video>
        <div>
          <div className="flex justify-around items-center max-lg:h-48">
            {IMG.map((eachIMG, index) => {
              return (
                <img
                  src={eachIMG.src}
                  alt=""
                  key={index}
                  className={`w-80 max-lg:w-56 max-sm:w-32 ${eachIMG.width}`}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center h-screen">
            <Link to="https://forms.gle/cT57HSyc9Su2jz2Q6">
              <button className="bg-[#FF9900] hover:bg-[#FF7800] text-white font-bold py-2 px-4 rounded uppercase">
                registration form
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
