'use server';

/**
 * @fileOverview A flow that generates a task list for ministry events based on the event's date and time.
 *
 * - generateTaskList - A function that generates a task list for a ministry event.
 * - GenerateTaskListInput - The input type for the generateTaskList function.
 * - GenerateTaskListOutput - The return type for the generateTaskList function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTaskListInputSchema = z.object({
  eventDescription: z.string().describe('Description of the ministry event.'),
  eventDateTime: z.string().describe('The date and time of the event (e.g., 2024-08-20T19:00:00).'),
});
export type GenerateTaskListInput = z.infer<typeof GenerateTaskListInputSchema>;

const GenerateTaskListOutputSchema = z.object({
  taskList: z.array(z.string()).describe('A list of tasks required for the event.'),
});
export type GenerateTaskListOutput = z.infer<typeof GenerateTaskListOutputSchema>;

export async function generateTaskList(input: GenerateTaskListInput): Promise<GenerateTaskListOutput> {
  return generateTaskListFlow(input);
}

const prompt = ai.definePrompt({
  name: 'taskListPrompt',
  input: {schema: GenerateTaskListInputSchema},
  output: {schema: GenerateTaskListOutputSchema},
  prompt: `You are an expert ministry assistant. Based on the event description and date/time, create a detailed task list to ensure a successful event.\n\nEvent Description: {{{eventDescription}}}\nEvent Date/Time: {{{eventDateTime}}}\n\nTask List:`,
});

const generateTaskListFlow = ai.defineFlow(
  {
    name: 'generateTaskListFlow',
    inputSchema: GenerateTaskListInputSchema,
    outputSchema: GenerateTaskListOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
