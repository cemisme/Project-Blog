import React from "react";
const Toggle = (props) => {
  const { checked, onClick } = props;

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        className="hidden-input"
        onClick={onClick}
      />
      <div
        className={`inline-block w-[70px] h-[42px] relative cursor-pointer rounded-full p-1 transition-all ${
          checked ? "bg-green-500" : "bg-gray-300"
        }`}
        
      >
        <span
          className={`transition-all w-[34px] h-[34px] bg-white rounded-full inline-block ${
            checked ? "translate-x-[28px]" : ""
          }`}
        ></span>
      </div>
    </label>
  );
};



export default Toggle;
