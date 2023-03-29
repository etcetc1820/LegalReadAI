import ratingImg from '../../../assets/rating-like-1.svg';

export const Description: React.FC = () => {
  return (
    <div className="px-3">
      <section className="bg-purple-300 mx-auto my-14 sm:my-20 rounded-md">
        <div className="flex flex-col lg:flex-row pt-10 md:px-20 sm:pb-12 mx-auto">
          <div className="mx-auto">
            <div>
              <img
                src={ratingImg}
                className="h-44 sm:h-64 w-auto mx-auto"
                alt=""
              />
            </div>
            <h1 className="text-3xl sm:text-5xl py-4 text-black text-center leading-relaxed font-extrabold">
              Generate concise summarizations of your legal documents in
              seconds.
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed text-center mx-auto text-gray-600 font-medium py-5 pb-8 px-4 md:px-20">
              Users simply upload their files, and our intelligent system
              swiftly identifies key data points, presenting them in a clear,
              actionable format. LawDocsAI's robust security measures ensure the
              privacy and protection of your sensitive data, letting you focus
              on client satisfaction and streamlining your workflow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
