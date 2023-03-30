export const Footer: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between px-6">
        <div className="flex flex-row space-x-8 pt-2">
          <a href="#" className="text-gray-600 hover:text-primary">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-primary">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-primary">
            Contact
          </a>
          <a href="#" className="text-gray-600 hover:text-primary">
            FAQ
          </a>
        </div>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <a
            href="https://twitter.com/LegalReadAI"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/twitterIcon.svg" alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/eric-harrison-jr-oly-4ab289202/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/linkedinIcon.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-600">
          &copy; 2023 LegalRead. All rights reserved.
        </p>
      </div>
    </div>
  );
};
