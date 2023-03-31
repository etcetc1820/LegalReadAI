import type { NextApiRequest, NextApiResponse } from 'next';
import { fileUpload } from '../../utils/configs/file-upload';
import pdf from 'pdf-parse';
import { File } from '../../types/file';
import { aiApi } from '../../api/ai/ai.api';
import { checkDocumentType } from '../../utils/helpers/check-document-type';
import { DocumentTypes } from '../../types/document-types';

export const config = {
  api: {
    bodyParser: false,
  },
};

const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    await runMiddleware(req, res, fileUpload.single('document'));
    const documentType: DocumentTypes = req.body.type;

    if (!('file' in req)) {
      return res
        .status(409)
        .json({ error: 'Something went wrong, please provide correct file' });
    }

    if (!checkDocumentType(documentType)) {
      return res
        .status(409)
        .json({ error: 'Provide an accessible type of the document' });
    }

    const file = req.file as File;
    const pdfData = await pdf(file.buffer);
    const results = await aiApi.message([
      {
        role: 'user',
        content: `I'll sent you a ${documentType}, after I ask you some questions.       
        ${pdfData.text}
        My questions are:
        Could you provide Summary on the case?
        Could you provide Facts from those case?
        Could you provide Issue on the case?
        Could you provide How the facts apply to the law on the case?
        Could you provide How the facts apply to the law on the case?
        Could you provide How the facts apply to the law on the case?
        `,
      },
    ]);

    res.status(200).json({ result: results.data.choices[0].message });
  } catch (error: any) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }

    if (error.code) {
      return res.status(422).json({ error: { message: error.message } });
    }

    res.status(500).json({
      error: {
        message: 'An error occurred during your request.',
      },
    });
  }
}
