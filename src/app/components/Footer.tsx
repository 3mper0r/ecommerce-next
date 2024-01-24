import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-around bg-footer-bg">
      <section>
        <h1 className="text-footer-font-title font-medium ">HELP & INFORMATION</h1>
        <div className="text-footer-font-body">
          <ul className="mt-3 text-xs">
            <li className="my-2 hover:text-blue-500 cursor-pointer">Help</li>
            <li className="my-2 hover:text-blue-500 cursor-pointer">Help</li>
            <li className="my-2 hover:text-blue-500 cursor-pointer">Help</li>
            <li className="my-2 hover:text-blue-500 cursor-pointer">Help</li>
          </ul>
        </div>
      </section>
      <section>
        <h1 className="text-footer-font-title font-medium">ABOUT BEASTWEAR</h1>
        <div className="text-footer-font-body">
          <ul className="mt-3 text-xs">
            <li className="my-2 hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="my-2 hover:text-blue-500 cursor-pointer">Clients</li>
          </ul>
        </div>
      </section>
      <section>
        <h1 className="text-footer-font-title font-medium">MORE FROM BEASTWEAR</h1>
        <div className="text-footer-font-body">
          <ul className="mt-3 text-xs">
            <li className="my-2 hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="my-2 hover:text-blue-500 cursor-pointer">Clients</li>
          </ul>
        </div>
      </section>
      <section>
        <h1 className="text-footer-font-title font-medium">SHOPPING FROM</h1>
        <div className="flex">
            <span className="flex items-center mt-3 text-xs text-footer-font-body">
                You&apos;re in &#160;<Image src="/ks-avatar.png" className="rounded-full cursor-pointer outline hover:outline-blue-500/50" width='30' height='30' alt="country flag" />                </span>
            <button className="mt-3 text-sm text-footer-font-title font-medium hover:text-blue-500/50">&#160;| CHANGE</button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
