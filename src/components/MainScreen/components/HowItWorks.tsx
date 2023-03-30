export const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row justify-between pt-20 px-4 md:px-20 md:space-x-8 sm:pb-20 md:pb-0 lg:space-x-40 lg:px-10 lg:space-y-0 mx-auto">
        <div className="lg:basis-1/2 pb-5">
          <h1 className="font-medium text-left sm:text-center md:text-left text-4xl pb-5 text-gray-500 sm:pb-10 sm:text-5xl md:text-5xl lg:text-6xl">
            How it Works
          </h1>

          <div className="pt-10 flex flex-col space-y-4">
            <div className="flex flex-row items-center space-x-3">
              <i className="fa-solid fa-1 border rounded-full border-primary px-5 py-4"></i>
              <p className="text-lg sm:text-xl">Choose a Document Model</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <i className="fa-solid fa-2 border rounded-full border-primary px-5 py-4"></i>
              <p className="text-lg sm:text-xl">Upload your File</p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <i className="fa-solid fa-3 border rounded-full border-primary px-5 py-4"></i>
              <p className="text-lg sm:text-xl">
                Type in Keywords you want to highlight
              </p>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <i className="fa-solid fa-4 border rounded-full border-primary px-5 py-4"></i>
              <p className="text-lg sm:text-xl">
                Generate and let AI do it's thing
              </p>
            </div>
          </div>
        </div>
        <div className="h-40 pt-8 lg:pt-0">
          <img src="/images/paperguy_img_desktop.svg" alt="" />
        </div>
      </div>
    </section>
  );
};
