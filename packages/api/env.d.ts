declare namespace NodeJS {
  interface ProcessEnv {
    TS_NODE_PROJECT: string;
    NODE_ENV: string;
    PORT: string;
    CLIENT_APP_URL: string;
    DATABASE_URL: string;
    REDIS_URL: string;
    SESSION_SECRET: string;
    DOMAIN_URL: string;
    EMAIL_USER: string;
    EMAIL_PASSWORD: string;
    EMAIL_CONTACT_ADDRESS: string;
    EMAIL_BRAND_NAME: string;
    TOKEN_SECRET: string;
    S3_BUCKET_NAME: string;
  }
}