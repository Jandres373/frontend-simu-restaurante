import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:flex-row gap-12 pt-5 md:pr-24">
        <div>
          <img
            className="w-32 h-32 md:w-40 md:h-40 lg:w-80 lg:h-80 rounded-full"
            src="/imagen/Restaurant.webp"
            alt="Descripción de la imagen"
          />
        </div>

        <div className="w-full md:w-auto md:max-w-md lg:max-w-lg pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      </div>

      <div className="flex justify-center items-center gap-16 pt-5 mt-8 mr-6 pr-24">
        <div className="flex flex-col items-center">
          <img
            className="w-44 h-44 md:w-48 md:h-40 rounded-xl"
            src="/imagen/Chef.webp"
            alt="Chef"
          ></img>
          <h2 className="mt-4">Chef</h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 md:w-48 md:h-40 rounded-xl"
            src="/imagen/pastelero.webp"
            alt="Pastelero"
          ></img>
          <h2 className="mt-4">Pastelero</h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 md:w-48 md:h-40 rounded-xl"
            src="/imagen/cocinero.webp"
            alt="Cocinero"
          ></img>
          <h2 className="mt-4">Cocinero</h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 md:w-48 md:h-40 rounded-xl"
            src="/imagen/bartender.webp"
            alt="Bartender"
          ></img>
          <h2 className="mt-4">Bartender</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
