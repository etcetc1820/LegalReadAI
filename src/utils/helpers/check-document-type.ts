import { DocumentTypes } from '../../types/document-types';

const documentTypes: DocumentTypes[] = [
  'article',
  'case',
  'citation',
  'contract',
];

export const checkDocumentType = (documentType: DocumentTypes) =>
  documentTypes.includes(documentType);
