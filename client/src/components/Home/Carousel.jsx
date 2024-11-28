import React from "react";

function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide h-[400px]"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active h-[400px]">
          <img
            src="https://www.hqts.com/wp-content/uploads/2023/07/Blog-Image-1-1.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item h-[400px]">
          <img
            src="https://i.ytimg.com/vi/UBgDqvqwx_Y/maxresdefault.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item h-[400px]">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/10/60/47/1000_F_210604798_L1oeENismr3DpyhYGd9mMT8WhNcuqoi1.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
