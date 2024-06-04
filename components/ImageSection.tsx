import Image from "next/image";
import React from "react";
import moutainBiking from "../assets/general/moutain-biking.jpg";
import moutainRunning from "../assets/general/moutain-running.jpg";
import weightLifting from "../assets/general/pull.jpg";
import trackRunning from "../assets/general/track-running.jpg";

const ImageSection = () => {
  return (
    <div className="relative flex flex-row gap-8 m-8 align-middle justify-center items-center ">
      <Image 
        src={weightLifting}
        alt=""
        height={400}
        className="rounded-xl skew-y-12"
      ></Image>
      <Image
        src={trackRunning}
        alt=""
        height={400}
        className="rounded-xl skew-y-12"
      ></Image>
      <Image
        src={moutainRunning}
        alt=""
        height={400}
        className="rounded-xl skew-y-12"
      ></Image>
      <Image
        src={moutainBiking}
        alt=""
        height={400}
        className="rounded-xl skew-y-12"
      ></Image>
      <h2 className="absolute text-9xl md:text-4xl font-bold">
        {" "}
        <span className="text-8xl self-center z-30 bg-primary text-transparent bg-clip-text ">
          No matter what you do.{" "}
        </span>
      </h2>
    </div>
  );
};

export default ImageSection;
