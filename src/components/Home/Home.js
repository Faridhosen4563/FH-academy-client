import React from "react";
import banner1 from "../../images/banner-1.jpg";
import banner2 from "../../images/banner-2.jpg";
import banner3 from "../../images/banner-3.jpg";
import banner4 from "../../images/banner-4.jpg";
import about from "../../images/about.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <div className="carousel w-11/12 mx-auto my-4">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={banner1} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={banner2} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={banner3} className="w-full h-7/12" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={banner4} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-9/12 mx-auto my-6 p-10 bg-base-300">
        <div className="md:w-full">
          <img src={about} alt="" />
        </div>
        <div className="mt-8 md:ml-12">
          <div className="flex flex-col md:flex-row">
            <p className="text-2xl font-medium md:mx-6 hover:text-green-400 hover:cursor-pointer">
              About us
            </p>
            <p className="text-2xl font-medium md:mx-6 hover:text-green-400 hover:cursor-pointer">
              Mission
            </p>
            <p className="text-2xl font-medium md:mx-6 hover:text-green-400 hover:cursor-pointer">
              Vision
            </p>
          </div>
          <div className="md:w-9/12 md:pl-8 mt-8">
            <p>
              Right now, there's an abundance of in-demand programming jobs, and
              a growing number of free courses to help you land one of them—even
              without a traditional computer science degree.
            </p>
            <button className="btn btn-outline my-6">Read More</button>
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto my-8">
        <h2 className="text-center text-2xl font-bold my-6">Pricing Plan</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div className="border-2 border-black p-10 text-center rounded-xl">
            <h2 className="text-2xl font-medium mb-2">Basic Plan</h2>
            <p className="text-green-600 mb-6">
              <span className="text-4xl font-medium">$100</span>
              <small>/weekly</small>
            </p>
            <p>One Online Course</p>
            <p>One E-Book</p>
            <p>1 Hour of Mentorship</p>
            <p>Guided Progress</p>
            <button className="btn btn-outline w-full my-4">Buy Now</button>
          </div>
          <div className="border-2 border-black p-10 text-center rounded-xl">
            <h2 className="text-2xl font-medium mb-2">Standard Plan</h2>
            <p className="text-green-600 mb-6">
              <span className="text-4xl font-medium">$200</span>
              <small>/weekly</small>
            </p>
            <p>Two Online Course</p>
            <p>Two E-Book</p>
            <p>3 Hour of Mentorship</p>
            <p>Guided Progress</p>
            <button className="btn btn-outline w-full my-4">Buy Now</button>
          </div>
          <div className="border-2 border-black p-10 text-center rounded-xl">
            <h2 className="text-2xl font-medium mb-2">Professional Plan</h2>
            <p className="text-green-600 mb-6">
              <span className="text-4xl font-medium">$400</span>
              <small>/weekly</small>
            </p>
            <p>Six Online Course</p>
            <p>Six E-Book</p>
            <p>12 Hour of Mentorship</p>
            <p>Guided Progress</p>
            <button className="btn btn-outline w-full my-4">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
