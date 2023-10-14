import { createWorker } from "tesseract.js";
import OpenAI from "openai";

export const analyze = async (file: any) => {
  const worker = await createWorker("eng");
  const data = await worker.recognize(file);
  const result = data.data.text;
  await worker.terminate();

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Format the following scrambled text from a health record into a JSON format: ${result}`,
      },
    ],
  });

  return response.choices[0].message.content;
};
