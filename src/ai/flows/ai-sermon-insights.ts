// src/ai/flows/ai-sermon-insights.ts
'use server';
/**
 * @fileOverview AI-powered sermon insights generator.
 *
 * - generateSermonInsights - A function that generates sermon illustrations and talking points based on scripture.
 * - GenerateSermonInsightsInput - The input type for the generateSermonInsights function.
 * - GenerateSermonInsightsOutput - The return type for the generateSermonInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSermonInsightsInputSchema = z.object({
  scripture: z.string().describe('The specific scripture to generate sermon insights from.'),
});
export type GenerateSermonInsightsInput = z.infer<typeof GenerateSermonInsightsInputSchema>;

const GenerateSermonInsightsOutputSchema = z.object({
  illustrations: z.array(z.string()).describe('An array of sermon illustrations.'),
  talkingPoints: z.array(z.string()).describe('An array of talking points for the sermon.'),
});
export type GenerateSermonInsightsOutput = z.infer<typeof GenerateSermonInsightsOutputSchema>;

export async function generateSermonInsights(input: GenerateSermonInsightsInput): Promise<GenerateSermonInsightsOutput> {
  return generateSermonInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSermonInsightsPrompt',
  input: {schema: GenerateSermonInsightsInputSchema},
  output: {schema: GenerateSermonInsightsOutputSchema},
  prompt: `You are an expert in biblical interpretation and sermon preparation.

  Based on the provided scripture, generate relevant sermon illustrations and talking points.

  Scripture: {{{scripture}}}

  Illustrations:
  - (A compelling illustration related to the scripture)
  - (Another compelling illustration related to the scripture)

  Talking Points:
  - (Key talking point derived from the scripture)
  - (Another key talking point derived from the scripture)
  `,
});

const generateSermonInsightsFlow = ai.defineFlow(
  {
    name: 'generateSermonInsightsFlow',
    inputSchema: GenerateSermonInsightsInputSchema,
    outputSchema: GenerateSermonInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
