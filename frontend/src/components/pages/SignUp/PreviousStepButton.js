import React from "react";
import { useSwiper } from "swiper/react";

const PreviousStepButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className="w-10 h-10 rounded-md bg-zinc-100 text-gray-350 flex items-center justify-center text-center"
      type="button"
      onClick={() => swiper.slidePrev()}
    >
      <i className="bi bi-chevron-left"></i>
    </button>
  );
};

export default PreviousStepButton;
