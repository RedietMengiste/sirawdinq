import React from 'react'
import OwlCarousel from "react-owl-carousel";

function Slide() {
    const options = {
        items: 1,
        nav: true,
        navText: [
          "<div className='nav-btn prev-slide'></div>",
          "<div className='nav-btn next-slide'></div>",
        ],
        rewind: true,
        autoplay: true,
        slideBy: 1,
        dots: true,
        dotsEach: true,
        dotData: true,
      };
  return (
    <>
    <OwlCarousel
    className="owl-theme"
    nav
    autoplay
    items={1}
    loop
    margin={1}
    options={options}
  >
    <div class="item">
      <div class="slider-area ">
        <div class="swiper-container ">
          <div class="swiper-wrapper">
            <div class="swiper-slide ">
              <div class="slide-inner slide-inner1">
                <div class="container ">
                  <div class="row">
                    <div class="col-xl-5 col-lg-6 col-md-8 item">
                      <div class="slider-content">
                        <h2 data-swiper-parallax="-500">
                          Comfortable Sofa with Great Comfort
                        </h2>
                        <p data-swiper-parallax="-400">
                          There are many variations of passages of Lorem
                          Ipsum available, but the majority have suffered
                          alteration in some form, by injected humour
                        </p>
                        
                          Shop Now
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="item">
      <div class="slider-area ">
        <div class="swiper-container ">
          <div class="swiper-wrapper">
            <div class="swiper-slide ">
              <div class="slide-inner slide-inner2">
                <div class="container ">
                  <div class="row">
                    <div class="col-xl-5 col-lg-6 col-md-8 item">
                      <div class="slider-content">
                        <h2 data-swiper-parallax="-500">
                          Comfortable Sofa with Great Comfort
                        </h2>
                        <p data-swiper-parallax="-400">
                          There are many variations of passages of Lorem
                          Ipsum available, but the majority have suffered
                          alteration in some form, by injected humour
                        </p>
                        
                          Shop Now
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="slider-area ">
        <div class="swiper-container ">
          <div class="swiper-wrapper">
            <div class="swiper-slide ">
              <div class="slide-inner slide-inner3">
                <div class="container ">
                  <div class="row">
                    <div class="col-xl-5 col-lg-6 col-md-8 item">
                      <div class="slider-content">
                        <h2 data-swiper-parallax="-500">
                          Comfortable Sofa with Great Comfort
                        </h2>
                        <p data-swiper-parallax="-400">
                          There are many variations of passages of Lorem
                          Ipsum available, but the majority have suffered
                          alteration in some form, by injected humour
                        </p>
                        
                          Shop Now
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </OwlCarousel>
  </>
  )
}

export default Slide