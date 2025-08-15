import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(3001),
});

const { data, error } = envSchema.safeParse(process.env);

if (error) {
  const errors = Object.keys(z.treeifyError(error).properties ?? {});

  throw new Error(
    `You must define the ${errors.join(', ')} enviroment variables`
  );
}

export const serverConfig = data;
