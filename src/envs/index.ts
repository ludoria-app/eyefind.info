const requiredEnvVars = ['NEXT_PUBLIC_WEATHER_API'];

const validateEnvVars = () => {
  const missingVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

  if (missingVars.length > 0) {
    // eslint-disable-next-line no-console
    console.warn('⚠️ Environment variables validation failed:');
    // eslint-disable-next-line no-console
    console.warn(`Missing required environment variables: ${missingVars.join(', ')}`);
    // eslint-disable-next-line no-console
    console.warn('Please check your .env file and make sure all required variables are set.');
    // Don't throw error in development
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Environment variables validation failed');
    }
  }
};

// Run validation immediately when the config is imported
validateEnvVars();

export const envs = {
  WEATHER_API_URL: process.env.NEXT_PUBLIC_WEATHER_API,
};
