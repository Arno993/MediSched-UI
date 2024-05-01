export const requireEnvVar = (envVar: string, value?: string) => {
  if (!value) {
    throw new Error(`Required environment variable '${envVar}' not defined.`);
  }

  return value;
};
