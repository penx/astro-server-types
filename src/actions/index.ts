import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';

export const server = {
  getGreeting: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async (input) => {
      console.log('globalThis.onmessage', globalThis.onmessage);
      console.log('Request', Request);
      return `Hello, ${input.name}!`;
    },
  }),
};
