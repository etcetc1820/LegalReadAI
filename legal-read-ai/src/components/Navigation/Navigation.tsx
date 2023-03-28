import React from 'react';
import twitterIcon from '../../assets/twitterIcon.svg';
import linkedInIcon from '../../assets/linkedinIcon.svg';
/* 
document
        .getElementById("menu-toggle")
        .addEventListener("click", function () {
          document.getElementById("menu-items").classList.toggle("hidden");
        });
*/
export const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-100 py-8 px-6 lg:flex justify-between scroll-navbar">
      <div className="flex items-center justify-between">
        <a className="text-primary text-3xl font-normal" href="/">
          LegalRead <i className="pr-4 fa-solid fa-book-open-reader"></i>
        </a>
        <button id="menu-toggle" className="lg:hidden text-xl">
          <i className="fas fa-bars text-primary"></i>
        </button>
      </div>
      <div className="flex flex-col justify-center">
        <div
          id="menu-items"
          className="hidden flex space-y-6 nav flex-col mt-2 lg:mt-0 lg:flex lg:flex-row lg:space-y-0 lg:space-x-4 pt-6"
        >
          <a href="/">
            <button className="border border-gray-500 px-4 py-2 rounded-md text-grborder-gray-500">
              Home
            </button>
          </a>
          <a href="#trynow">
            <button className="border border-gray-500 px-4 py-2 rounded-md text-grborder-gray-500">
              Try Now
            </button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScMI3ARBIBpV0xLQxZ05ZMngwgX7NiFdgJkDYui1_pEz5dLLw/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="border border-gray-500 px-4 py-2 rounded-md text-grborder-gray-500">
              Join Waitlist
            </button>
          </a>

          <div className="flex items-center mx-auto space-x-4 pt-4 sm:pt-0">
            <a
              href="https://twitter.com/LegalReadAI"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterIcon} alt="twitter icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/eric-harrison-jr-oly-4ab289202/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedInIcon} alt="linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
