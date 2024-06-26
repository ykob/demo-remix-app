import { createEnv } from '@t3-oss/env-core';
import { config } from 'dotenv';
import { z } from 'zod';

config();

export const env = createEnv({
  server: {
    JWT_ACCESS_SECRET: z.string(),
    JWT_REFRESH_SECRET: z.string(),
  },
  runtimeEnv: process.env,
});
