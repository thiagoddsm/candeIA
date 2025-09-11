// src/ai/flows/automated-small-group-guides.ts
'use server';

/**
 * @fileOverview Transforms a sermon message into an engaging small group study guide using AI. The guide includes discussion questions and related scriptures.
 *
 * - generateSmallGroupGuide - A function that generates the small group study guide.
 * - GenerateSmallGroupGuideInput - The input type for the generateSmallGroupGuide function.
 * - GenerateSmallGroupGuideOutput - The return type for the generateSmallGroupGuide function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSmallGroupGuideInputSchema = z.object({
  sermonMessage: z
    .string()
    .describe('The sermon message to transform into a small group study guide.'),
});
export type GenerateSmallGroupGuideInput = z.infer<
  typeof GenerateSmallGroupGuideInputSchema
>;

const GenerateSmallGroupGuideOutputSchema = z.object({
  studyGuide: z.string().describe('The generated small group study guide.'),
});
export type GenerateSmallGroupGuideOutput = z.infer<
  typeof GenerateSmallGroupGuideOutputSchema
>;

export async function generateSmallGroupGuide(
  input: GenerateSmallGroupGuideInput
): Promise<GenerateSmallGroupGuideOutput> {
  return generateSmallGroupGuideFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSmallGroupGuidePrompt',
  input: {schema: GenerateSmallGroupGuideInputSchema},
  output: {schema: GenerateSmallGroupGuideOutputSchema},
  prompt: `You are an expert in creating engaging small group study guides based on sermon messages.

  Given the following sermon message, create a study guide that includes discussion questions and related scriptures to facilitate deeper engagement and understanding among small group members.

  Sermon Message: {{{sermonMessage}}}
  `,
});

const generateSmallGroupGuideFlow = ai.defineFlow(
  {
    name: 'generateSmallGroupGuideFlow',
    inputSchema: GenerateSmallGroupGuideInputSchema,
    outputSchema: GenerateSmallGroupGuideOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
