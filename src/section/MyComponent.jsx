import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import PeopleAI from "../assets/peopleai.png";
import Sunbird from "../assets/sunbird.png";

export const MyComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 800.0,
          minWidth: 900.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x6b86aa,
          backgroundColor: 0xffffff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <section class="bg-gray-50" ref={vantaRef}>
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="flex-col justify-center items-center mx-auto max-w-xl text-center">
          <div className="flex gap-8 justify-center px-auto">
            <img className="h-16" src={Sunbird} />
            <img className="h-16" src={PeopleAI} />
          </div>
          <h1 class="text-3xl mt-8 font-extrabold sm:text-5xl">
            People AI 
            <strong class="font-extrabold text-blue-800 sm:block ml-4 sm:ml-0">
              Building for Billions
            </strong>
          </h1>

          <p class="mt-4 sm:text-xl/relaxed">
            Helping to unlock the potential of AI for billions of people around the world
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded bg-blue-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Register
            </a>

            <a
              class="block bg-white w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
