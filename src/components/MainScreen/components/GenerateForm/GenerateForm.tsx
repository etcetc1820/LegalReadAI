import { useRef, useState } from 'react';
import { GeneratedFile } from './GeneratedFile';

enum DocumentType {
  CONTRACT = 'Contract',
  CASE = 'Case',
  CITATION = 'Citation',
  ARTICLE = 'Article',
}

enum ErrorMsg {
  UPLOAD_FILE = 'You should upload the file first',
  FILE_IS_TOO_BIG = 'Max file size is 5mb',
}

const fileErrors = [ErrorMsg.FILE_IS_TOO_BIG, ErrorMsg.UPLOAD_FILE];
const basicBtnClass = 'border-2 border-buttonbg px-4 py-2 rounded-md text-lg shadow-md text-gray-400 w-full sm:w-44 sm:text-2xl lg:px-8'

export const GenerateForm: React.FC = () => {
  const uploadInputRef = useRef<HTMLInputElement>(null);

  const [errorMsg, setErrorMsg] = useState('');
  const [docType, setDocType] = useState(DocumentType.CASE);
  const [keywords, setKeywords] = useState('');
  const [file, setFile] = useState<File | null>(null);

  // temporary
  const [isGenerated, setIsGenerated] = useState(false);

  const createBtnClass = (doc: DocumentType, disabled?: boolean): string => {
    if (disabled) {
      return basicBtnClass;
    }
    if (doc === docType) {
      return basicBtnClass + ' bg-primary text-white';
    }
    return basicBtnClass + ' hover:bg-primary hover:text-white';
  };

  const changeDocType = (val: DocumentType): void => {
    setDocType(val);
  };

  const handleChangeKeywords = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = e.target;
    setKeywords(value);
  };

  const handleClickUploadFile = () => {
    uploadInputRef.current?.click();
  };

  const fileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const newFile = e.target?.files?.[0];

    if (!newFile) {
      return;
    }

    if (newFile.size > 5242880) {
      setErrorMsg(ErrorMsg.FILE_IS_TOO_BIG);
      return;
    }
    if (fileErrors.includes(errorMsg as ErrorMsg)) {
      setErrorMsg('');
    }

    setFile(newFile);
  };

  const handleSubmit = (): void => {
    if (!file) {
      setErrorMsg(ErrorMsg.UPLOAD_FILE);
      return;
    }
    if (errorMsg) {
      return;
    }
    console.log({ docType, keywords, file });
    setIsGenerated(true);
  };

  return (
    <div className="md:pt-60 mx-auto pt-64 sm:pt-32" id="trynow">
      <h1 className="font-extrabold text-center text-3xl text-primary sm:pb-10 sm:text-4xl md:text-5xl lg:text-6xl">
        LegalReadAI:
      </h1>
      <p className="text-center text-lg text-gray-600">beta v 1.0</p>
      <section className="flex flex-col justify-between items-center mx-auto my-32 px-6">
        <div className="container h-96 basis-1/2 bg-white rounded-lg border border-gray-300 shadow-md">
          <div className="flex sm:items-center flex-col sm:flex-row justify-start sm:space-x-5 pt-3 overflow-x-auto px-2">
            <div className='flex space-x-5 overflow-x-auto'>
              <button
                onClick={() => changeDocType(DocumentType.CONTRACT)}
                className={createBtnClass(DocumentType.CONTRACT, true)}
                disabled
              >
                Contract
              </button>
              <button
                onClick={() => changeDocType(DocumentType.CASE)}
                className={createBtnClass(DocumentType.CASE)}
              >
                Case
              </button>
            </div>
            <div className='flex space-x-5 overflow-x-auto pt-3 sm:pt-0'>
              <button
                onClick={() => changeDocType(DocumentType.CITATION)}
                className={createBtnClass(DocumentType.CITATION, true)}
                disabled
              >
                Citation
              </button>

              <button
                onClick={() => changeDocType(DocumentType.ARTICLE)}
                className={createBtnClass(DocumentType.ARTICLE, true)}
                disabled
              >
                Article
              </button>
            </div>
          </div>
          <input
            ref={uploadInputRef}
            type="file"
            accept=".pdf"
            onChange={fileUpload}
            className="sr-only"
          />

          <div className="text-center py-12 relative">
            {file && (
              <div className="absolute left-1/2 bottom-3 transform -translate-x-1/2">
                <i className="fa-solid fa-file" />
                <span className="pl-2">{file.name}</span>
              </div>
            )}
            <button
              onClick={handleClickUploadFile}
              className="text-primary font-FiraM hover:text-secondary font-light text-sm sm:text-base"
            >
              Click Here to Upload {file && 'Another '} File
            </button>
          </div>

          <div>
            <input
              type="text"
              onChange={handleChangeKeywords}
              placeholder="Type Keywords Here If Applicable.."
              className="border border-gray-300 px-6 py-2 w-full rounded-md outline-none text-lg sm:text-xl focus:border-green-200"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="py-10 flex justify-center relative">
            {errorMsg && (
              <span className="absolute text-primary top-2 let-1/2">
                {errorMsg}
              </span>
            )}
            <button
              onClick={handleSubmit}
              className="bg-buttonbg text-white py-2 px-4 shadow-md rounded-md w-44 sm:text-2xl lg:px-8"
            >
              Generate
            </button>
          </div>
        </div>
        {isGenerated && <GeneratedFile />}
      </section>
    </div>
  );
};
