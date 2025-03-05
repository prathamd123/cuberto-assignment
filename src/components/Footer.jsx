import React from "react";
import img from "../assets/icon.png";

const Footer = () => {
  return (
    <div className="w-full h-300 text-white bg-black flex flex-col">
      <div className="mt-10 text-3xl mx-15">
        <h1>SOCIAL MEDIA AND CONTACTS</h1>
        &nbsp;
        <hr />
      </div>
      <div className="mt-10 text-3xl mx-15">
        <div className="flex justify-between">
          <h1>Instagram</h1>
          <img src={img} alt="icon" className="h-10 cover" />
        </div>
        &nbsp;
        <hr />
      </div>
      <div className="mt-10 text-3xl mx-15">
        <div className="flex justify-between">
          <h1>Linkedin</h1>
          <img src={img} alt="icon" className="h-10 cover" />
        </div>
        &nbsp;
        <hr />
      </div>
      <div className="mt-10 text-3xl mx-15">
        <div className="flex justify-between">
          <h1>Dribble</h1>
          <img src={img} alt="icon" className="h-10 cover" />
        </div>
        &nbsp;
        <hr />
      </div>
      <div className="mt-10 text-3xl mx-15">
        <div className="flex justify-between">
          <h1>Github</h1>
          <img src={img} alt="icon" className="h-10 cover" />
        </div>
        &nbsp;
        <hr />
      </div>
      <div className="mt-10 text-3xl mx-15">
        <div className="flex justify-between">
          <h1>Youtube</h1>
          <img src={img} alt="icon" className="h-10 cover" />
        </div>
        &nbsp;
        <hr />
      </div>
      <div className="mt-10 text-3xl mx-15">
        <div className="flex justify-between">
          <h1>Behance</h1>
          <img src={img} alt="icon" className="h-10 cover" />
        </div>
        &nbsp;
        <hr />
      </div>
      <div className="mt-10 text-3xl mx-15">
        <div className="flex justify-between">
          <h1>Twitter</h1>
          <img src={img} alt="icon" className="h-10 cover" />
        </div>
        &nbsp;
        <hr />
      </div>

      <div className="flex mt-10 gap-5 text-3xl mx-15">
        <div className="h-50 w-130">
        <h2>Main office901 N Pitt Street</h2>
        <h1>Alexandria VA, 22314</h1>
        <button className="bg-black outline-1 p-6 rounded-4xl mt-8">Info@cuberto.com</button>
        </div>
        <div className="h-50 w-130">
        <h2>Second officeNa Perstyne</h2>
        <h1>342/1, 11000 Prague</h1>
        <button className="bg-black outline-1 p-6 rounded-4xl mt-8">+1 301 549 9309</button>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
