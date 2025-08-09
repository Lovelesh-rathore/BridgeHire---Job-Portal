import React, { useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import toast from "react-hot-toast";
import axios from "../config/api";

const Contact = () => {
  const [contactData, setContactData] = useState({
    message: "",
    name: "",
    email: "",
    subject: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Contact Data:", contactData);
    setSubmitted(true);

    try {
      const res = await axios.post("public/submittedContactForm", contactData);
      toast.success(
        res.data.message,
        `${res.data.emailSent ? "Email Sent" : "Email Sending Error"}`
      );
      setSubmitted(true);
      setContactData({
        message: "",
        name: "",
        email: "",
        subject: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div
        id="main-cont"
        className=" bg-[rgba(0,0,0,0.6)] bg-blend-multiply bg-[url(about.jpg)] bg-no-repeat bg-center bg-cover h-[60vh] flex justify-center items-center"
      >
        <h4 className=" text-white font-mulish text-5xl">Contact Us</h4>
      </div>
      <div id="main-cont-2" className=" m-[10vw]">
        <div id="location" className=" flex justify-center my-[10vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.2884171067853!2d77.45476801100843!3d23.268967607000594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6967f58e0dbf%3A0x65d0724cf8368e2d!2sRICR%20-%20Raj%20Institute%20of%20Coding%20%26%20Robotics%20%7C%20Best%20Java%20Coding%20Classes%20In%20Bhopal!5e0!3m2!1sen!2sin!4v1750766810784!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div id="contactForm" className=" flex justify-center p-10 gap-[10vh]">
          <div id="getInTouch" className=" w-7/10">
            <form className=" grid gap-5" onSubmit={handleSubmit}>
              <h2 className=" text-3xl ">Get In Touch</h2>
              <textarea
                type="text"
                placeholder="Enter Message"
                value={contactData.message}
                onChange={handleChange}
                name="message"
                className=" border border-gray-300 text-gray-700 w-full h-[20vh] p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <div className=" flex gap-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={contactData.name}
                  name="name"
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-700 w-1/2 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                />

                <input
                  type="email"
                  value={contactData.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Example@gmail.com"
                  className="border border-gray-300 text-gray-700 w-1/2 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={handleChange}
                value={contactData.subject}
                className="border border-gray-300 text-gray-700 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <div>
                <button
                  type="submit"
                  className=" px-8 py-4 text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white rounded-2xl"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div id="location" className=" grid gap-5 h-fit w-3/10 mt-[7vh]">
            <div className=" flex">
              <div className="text-3xl mr-2">
                <RiHome2Line />
              </div>
              <div>
                <h4>Buttonwood, California.</h4>
                <h4>Rosemead, CA 91770</h4>
              </div>
            </div>
            <div className=" flex">
              <div className="text-3xl mr-2">
                <MdOutlinePhoneIphone />
              </div>
              <div>
                <h4>+1 253 565 2365</h4>
                <h4>Mon to Fri 9am to 6pm</h4>
              </div>
            </div>
            <div className=" flex">
              <div className="text-3xl mr-2">
                <FiMail />
              </div>
              <div>
                <h4>support@company.com</h4>
                <h4>Send us your query anytime!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
