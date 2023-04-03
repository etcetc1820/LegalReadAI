import { jsPDF } from 'jspdf';

type GeneratedFileProps = {
  generatedFile: {
    content: string;
    name: string;
    type: string;
  };
};

export const GeneratedFile: React.FC<GeneratedFileProps> = ({
  generatedFile,
}) => {
  const handleDownload = (): void => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;

    const wrappedText = doc.splitTextToSize(
      `${generatedFile.type}: ${generatedFile.name}\n\n\n${generatedFile.content}`,
      210,
    );
    doc.setFontSize(14);
    let iterations = 1;
    const marginY = 15;
    const defaultYJump = 6; // default space btw lines

    wrappedText.forEach((line: string) => {
      let posY = marginY + defaultYJump * iterations++;
      if (posY > pageHeight - marginY) {
        doc.addPage();
        iterations = 1;
        posY = marginY + defaultYJump * iterations++;
      }
      doc.text(line, 15, posY);
    });

    doc.save(`${generatedFile.name} summary.pdf`);
  };
  return (
    <div className="generated-doc container summary-box bg-white rounded-lg border border-gray-300 shadow-md px-2 basis-1/2 mt-10">
      <div className="bg-white summary-box p-2 rounded-lg shadow-md">
        <h2 className="text-xl text-center text-gray-500 font-bold mb-4">
          Your Summary
        </h2>
        <div className="h-max overflow-y-scroll mb-4 border border-gray-300 p-2 rounded-lg leading-10">
          <p
            id="summary-output"
            className="text-gray-500 font-semibold text-xl"
          >
            <pre style={{ whiteSpace: 'pre-line' }}>
              {generatedFile.content}
            </pre>
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
