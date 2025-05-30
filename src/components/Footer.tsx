import * as React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex w-full bg-white h-10 items-center justify-center text-sm text-black mt-12">
      &copy; {year} Peter Shin
    </footer>
  )
};

export default Footer;