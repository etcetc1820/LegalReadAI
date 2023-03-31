export type AiMessage = {
  role: 'user' | 'system' | 'assistant';
  content: string;
};

export type AiMessages = AiMessage[];
