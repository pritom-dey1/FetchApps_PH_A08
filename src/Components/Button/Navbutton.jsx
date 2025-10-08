import React from "react";

const Navbutton = ({ btntext }) => {
  return (
    <button className="btn-bg items-center flex gap-1 rounded-[5px] py-1.5 px-3.5 text-white">
      <i  class="ri-github-fill text-[22px]"></i>
      {btntext}
    </button>
  );
};

export default Navbutton;
