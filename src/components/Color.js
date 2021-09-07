import React from "react";

const variant = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const color_list = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const Color = () => {
  return (
    <div className="p-2">
      {color_list.map((color, index) => (
        <div key={index} className="my-3">
          <h4 className="capitalize">{color}</h4>
          <div className="flex ">
            {variant.map((item, subIndex) => (
              <div
                key={subIndex}
                className={`w-auto p-4 bg-${color}-${item}`}
              >{`${color}-${item}`}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Color;
