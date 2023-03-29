import React from 'react';

export const WishlistContact: React.FC = () => {
  return (
    <div>
      <section className="bg-primary py-10" id="waitlist">
        <div className="flex flex-col justify-center items-center pb-8">
          <h1 className="font-medium text-center text-2xl text-white pb-5 sm:pb-10 sm:text-3xl md:text-4xl lg:text-4xl">
            Join the Waitlist
          </h1>
          <p className="text-lg px-5 w-auto sm:w-auto sm:text-2xl mx-auto max-w-5xl text-center">
            Legal Read AI is currently in beta. Join the waitlist to be the
            first to know when we launch and get a free month of access. If you
            have any questions, please contact us on Twitter @LegalReadAI.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScMI3ARBIBpV0xLQxZ05ZMngwgX7NiFdgJkDYui1_pEz5dLLw/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-buttonbg text-white py-2 px-4 shadow-md rounded-md w-44 sm:text-2xl lg:px-8 hover:bg-purple-400  ">
              Join Now
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};
