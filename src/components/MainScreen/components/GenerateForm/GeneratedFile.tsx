import React from 'react';

export const GeneratedFile: React.FC = () => {
  const handleDownload = (): void => {
    console.log('downloaded');
  };
  return (
    <div className="container summary-box bg-white rounded-lg border border-gray-300 shadow-md px-2 basis-1/2 mt-10">
      <div className="bg-white summary-box p-2 rounded-lg shadow-md">
        <h2 className="text-xl text-center text-gray-500 font-bold mb-4">
          Your Summary
        </h2>
        <div className="h-max overflow-y-scroll mb-4 border border-gray-300 p-2 rounded-lg leading-10">
          <p
            id="summary-output"
            className="text-gray-500 font-semibold text-xl"
          >
            Case: Johnson v. SmartTech Corp. <br />
            <br />
            Summary:
            <br />
            <br />
            In the case of Johnson v. SmartTech Corp., the plaintiff, Mr.
            Johnson, alleges that SmartTech Corp., a leading smart home
            technology company, sold him a defective home security system which
            failed to prevent a burglary, causing damages in the form of loss of
            property and emotional distress.
            <br />
            <br />
            The Facts:
            <br />
            <br />
            Mr. Johnson purchased and installed a SmartTech Home Security System
            in his residence in January 2023. The system was advertised as
            providing comprehensive security features, including motion
            detection, security cameras, and alarm systems. In March 2023, Mr.
            Johnson's home was burglarized, and valuable items were stolen. The
            SmartTech security system failed to detect the intrusion and did not
            alert Mr. Johnson or the local authorities. Mr. Johnson suffered
            emotional distress due to the burglary and the failure of the
            security system.
            <br />
            <br />
            Issue:
            <br />
            <br />
            The primary issue at hand is whether SmartTech Corp. is liable for
            the damages incurred by Mr. Johnson due to the alleged defective
            home security system.
            <br />
            <br />
            Applicable Law:
            <br />
            <br />
            Breach of Contract: The sales contract between Mr. Johnson and
            SmartTech Corp. might have implied warranties, such as the implied
            warranty of merchantability and the implied warranty of fitness for
            a particular purpose. Negligence: Mr. Johnson might argue that
            SmartTech Corp. failed to exercise reasonable care in the design,
            manufacturing, or maintenance of the security system, which resulted
            in the system's failure. Product Liability: Under strict product
            liability, SmartTech Corp. could be held liable for any defects in
            the security system that made it unreasonably dangerous or unfit for
            its intended purpose.
            <br />
            <br />
            Suggestions on how to move forward on the case:
            <br />
            <br />
            Gather evidence: Mr. Johnson should collect any available evidence,
            such as video footage, photographs, police reports, and
            documentation related to the security system, its installation, and
            its performance. Expert testimony: Engage an expert in home security
            systems to assess the performance of the SmartTech system and
            determine whether it failed to function as advertised or as
            expected. Negotiate with SmartTech Corp.: Mr. Johnson's legal
            counsel should initiate discussions with SmartTech Corp. to explore
            the possibility of an out-of-court settlement. File a lawsuit: If
            negotiations fail, Mr. Johnson should consider filing a lawsuit
            against SmartTech Corp. based on breach of contract,
          </p>
        </div>
        <div className="py-10 flex">
          <button
            onClick={handleDownload}
            className="bg-buttonbg text-white py-2 px-4 shadow-md rounded-md w-44 sm:text-2xl lg:px-8"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
