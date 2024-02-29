import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_USER_TOKEN: z.string(),
  VITE_INSTANCE_ID: z.string(),
  VITE_INSTANCE_TOKEN: z.string(),
});

export const env = envSchema.parse(import.meta.env);