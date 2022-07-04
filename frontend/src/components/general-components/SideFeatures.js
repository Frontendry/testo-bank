import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "./components-styles.css";

import iconAccounts from "../../assets/images/icon-accounts.png";

const SideFeatures = () => {
  return (
    <div className="w-full text-white mt-8">
      <Swiper
        className="top-rect-pagination"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <article>
            <h2 className="text-2xl font-semibold mb-5">
              Create multiple sub account
            </h2>
            <p>
              Organise your business finances easily with multiple accounts. No
              limits!
            </p>

            <figure className="mt-3">
              <img src={iconAccounts} alt="Create multiple sub account" />
            </figure>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article>
            <h2 className="text-2xl font-semibold mb-5">Pay and get paid</h2>
            <p>
              Organise your business finances easily with multiple accounts. No
              limits!
            </p>

            <figure className="mt-3">
              <img src={iconAccounts} alt="Create multiple sub account" />
            </figure>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article>
            <h2 className="text-2xl font-semibold mb-5">Instant Invoicing</h2>
            <p>
              Organise your business finances easily with multiple accounts. No
              limits!
            </p>

            <figure className="mt-3">
              <img src={iconAccounts} alt="Create multiple sub account" />
            </figure>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SideFeatures;
