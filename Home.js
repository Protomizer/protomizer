import React from "react";
import logo from "../assets/logoMain.png";
import HeroIcon from "../assets/HeroIcon.png";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";


import updateIcon from "../assets/updateIcon.png";
import testType1 from "../assets/testtype1.png";
import testType2 from "../assets/testtype2.png";
import testType3 from "../assets/testtype3.png";

import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

import { features } from "../utils/data";

import Logo from "../assets/logo.png";

import { Card, Number, Feature, ListItem, HeroList } from "../components";
import EmailSubmit from "../components/EmailSubmit";

const Home = () => {
  return (
    <>
      <section className="hero w-screen min-h-[60vh] md:min-h-[120vh] relative  pb-20">
        <div className="px-[5%] pt-[100px] w-full grid md:grid-cols-2 relative">
          <div className="flex flex-col max-w-full">
            <h4 className="text-[#563785] text-sm md:text-base uppercase font-bold">
              Figma Plugin / Results
            </h4>
           
            <h1 className="my-4 text-5xl md:text-8xl text-[#4700E3]">Proto<span className="text-[#0041D9] font-light">mizer</span></h1>
            <h3 className="text-[#563785] text-xl md:text-4xl my-4">
              Understand Your Product’s UX & Boost Business ROI
            </h3>

            {/* <div className="block my-10 md:hidden">
              <HeroList />
            </div> */}

            {/* <div className="flex space-x-2 my-4 md:mb-[90px]">
              <button className="bg-[#001EB2] text-white border-2 border-[#001EB2]">
                Get Early Access
              </button>
              <button className="bg-[#BFD3FF] text-blue-700 border-2 border-blue-700">
                Learn More
              </button>
            </div> */}

            <EmailSubmit/>

            <p className="text-lg text-[#563785] my-10">Sign up for our newsletter and be the first to know about product releases, promotions, and more. We plan to release a freemium & paid version</p>

            {/* <div className="hidden md:block my-10">
              <HeroList />
            </div> */}
          </div>

          <img
            src={HeroIcon}
            className="absolute bottom-[12%] md:bottom-[-75px] right-0 w-[250px] md:w-[500px] h-auto"
          />
        </div>

        <div className="test-types md:mt-[60px]">
          <div className="container">
            <h1 className="text-2xl md:text-6xl text-[#563785] font-bold max-w-[90%] mb-[50px]">
              <span className="text-[#803FFE]">Transform</span> Your Online
              Product Through Tangible User Insights
            </h1>

            <p className="text-gray-600 text-lg md:text-2xl">
              Are you looking to take your business to the next level? Look no
              further than our innovative software as a service (SAAS)
              solutions! With our cutting-edge technology and user-centered
              design, we can help transform your business and boost your return
              on investment.
            </p>
          </div>
        </div>
      </section>

      <section className="test-types pb-20 bg-[#fdfbff]">
        <div className="container">
          <div className="w-full h-[5px] bg-gradient-to-br from-[#eadefb] to-[#fdfcff] mb-8"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full mt-[30px]">
            <Card
              image={testType1}
              name="A/B Testing"
              desc="Brief description of the business service item goes here."
            />
            <Card
              image={testType2}
              name="Product Audit"
              desc="Brief description of the business service item goes here."
            />
            <Card
              image={testType3}
              name="Guided Usability Test"
              desc="Brief description of the business service item goes here."
            />
          </div>
        </div>
      </section>


      <section className="numbers-section py-20 md:py-48">
        <div className="container">
          <h1 className="text-xl md:text-5xl text-[#563785] font-bold max-w-[100%] md:max-w-[90%] mb-[50px]">
            <span className="text-[#9B63FF]">
              Providing valuable solutions{" "}
            </span>{" "}
            to your users{" "}
            <br className="md:block hidden"/>
            <span className="text-[#6610F2]">is more important than ever</span>
          </h1>

          <div className="grid md:grid-cols-3 gap-4 max-w-full">
            <Number
              number="1"
              content="First create a test & specify type, then  add prototypes or code deploys that will be tested, then you have a choice of add users or sending a invite link."
            />
            <Number
              number="2"
              content="As users are taking the test you made Protomizer will record your user’s interactions with your website / online product’s prototypes."
            />
            <Number
              number="3"
              content="Results of the testing process will be displayed as static visual and in-depth on your Protomizer dashboard, allowing for easy identification of any issues."
            />
          </div>
        </div>
      </section>

      <section className="features-section relative py-12  md:py-24">
        <div className="container">
          {/* <div className="purple-bg"></div> */}
          {/* <h1 className="text-xl md:text-5xl text-[#563785] font-bold max-w-[100%] md:max-w-[90%] mb-[50px]">
            Test Interfaces with <span className="text-[#9B63FF]">Protomizer</span>{" "}
            while working with your{" "}
            <span className="text-[#9B63FF]">favorite tools</span>
          </h1> */}

          {features.map((item, index) => {
            return <Feature {...item} reverse={index === 1}/>
          })}

        </div>
      </section>

      <section className="updates-section py-20 bg-[#FAF6FF]">
        <div className="max-w-[800px] mx-auto text-center flex flex-col justify-center items-center">
          <img
            src={updateIcon}
            className="max-w-[150px] md:max-w-[300px] h-auto"
          />
          <h2 className="text-2xl md:text-4xl my-2 md:my-4">
            Get the latest updates
          </h2>
          <p className="text-sm md:text-xl my-4 max-w-[90%]">
            Sign up for our newsletter and be the first to know about product
            announcements, promotions, and more.
          </p>

         <EmailSubmit/>
        </div>
      </section>

      <footer className="bg-[#F5F4F1] py-10">
        <div className="container">
          <img src={Logo} className="max-w-[500px] h-auto mb-8" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="mr-4">&copy; 2023 Protomizer</p>
              {/* <p className="text-blue-700 mr-4">Privacy Policy</p>
              <p className="text-blue-700">Terms of Use</p> */}
            </div>

            <div className="flex items-center text-blue-700">
              {/* <a href="#">
                <FaLinkedin />
              </a> */}

              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
