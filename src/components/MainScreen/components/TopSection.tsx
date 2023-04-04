export const TopSection: React.FC = () => {
  return (
    <main className="pt-16 sm:pt-32 bg-gray-100 mx-auto" id="home">
      <div className="flex flex-col xl:flex-row justify-between">
        {/* <!-- Left Hero; Text and Buttons --> */}
        <div className="flex flex-col flex-1 px-6 sm:px-12 lg:pl-6 lg:pr-16 text-left mx-auto">
          <h1 className="font-extrabold text-4xl py-10 text-black sm:pb-10 sm:text-4xl md:text-5xl lg:text-6xl text-left">
            Welcome to LegalRead
          </h1>
          <h1 className="font-bold text-4xl text-primary pb-5 sm:text-4xl md:text-5xl lg:text-6xl text-left">
            Unleashing AI-Powered Efficiency for Legal Pros
          </h1>

          <p className="pb-10 para text-left">
            The Ultimate SaaS solution designed for law students, lawyers, and
            attorneys. Our cutting-edge platform leverages the power of ChatGPT
            to analyze and extract critical information from your legal
            documents in a matter of seconds.
          </p>
          <p className="hidden sm:block pb-10 font-normal para sm:text-left">
            Say goodbye to tedious manual review and focus on what really
            matters – pleasing your clients. With LegalRead, you can upload a
            wide range of legal documents, including court cases, medical
            records, police reports, and letters. Our intelligent system will
            quickly identify the key data points and present them in a concise
            and actionable format. Built with security and privacy in mind, you
            can trust LegalRead with your sensitive information.
          </p>
          <div className="pb-14 flex justify-center flex-col space-y-3">
            <a
              href="#trynow"
              className="flex justify-center items-center hero_button text-center border border-gray-400 rounded-md text-2xl text-gray-400 hover:bg-primary hover:text-white"
            >
              <button>Try Now</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLScMI3ARBIBpV0xLQxZ05ZMngwgX7NiFdgJkDYui1_pEz5dLLw/viewform?usp=sf_link"
              className="flex justify-center items-center hero_button text-center bg-primary rounded-md text-2xl text-white hover:bg-purple-400"
            >
              <button>Join Waitlist</button>
            </a>
          </div>
        </div>

        {/* <!-- Right Side --> */}
        <div className="mx-auto pb-6 md:w-4/5 lg:w-1/2 xl:pb-10 pr-3">
          <img
            src="/images/main_desktop.png"
            className="mx-auto w-4/5 sm:mx-0 sm:w-full"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};
