import HeroSection from "../components/heroSection/heroSection";
import React from "react";
import Campaigns from "../components/Campaigns";
import Prospects from "../components/prospect";
import About from "../components/About";
import Howto from "../components/howto";

function Home() {
  return (
    <div>
      <HeroSection />
      <About/>
      <Prospects/>
      <div className="flex justify-center text-sm sm:text-base md:text-3xl lg:text-4xl pb-10 pt-10">
        <button
          style={{
            backgroundColor: "#2284B4",
            padding: "1rem 5rem",
            borderRadius: "50px",
            color: "#fff",
          }}
        >
          {" "}
          Start A Fundraiser{" "}
        </button>
      </div>
      <div className="flex justify-center text-sm sm:text-base md:text-xl lg:text-2xl pb-10 pt-10">
        <h2 style={{ margin: "0.8rem" }}>
          Have any question for us? Chat with us
        </h2>
        <button
          style={{
            backgroundColor: "#43C553",
            padding: "1rem 2rem",
            borderRadius: "50px",
            color: "#fff",
          }}
        >
          {" "}
          +91 - 8800430099
        </button>
      </div>
      <Howto/>

      <div className="flex gap-6 mt-8 justify-center">
            <div className="flex flex-col">
              <Campaigns />
            </div>
          </div>
    </div>
  );
}

export default Home;
