import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-row items-center justify-center gap-2 text-drip-black">
      <p>Created with love by</p>
      <a
        href="#"
        rel="noopener noreferrer"
        className="no-underline hover:underline text-2xl font-semibold text-drip-black font-Cursive"
      >
        @rusira
      </a>
    </footer>
  );
};

export default Footer;
