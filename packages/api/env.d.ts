declare namespace NodeJS {
  interface ProcessEnv {
    TS_NODE_PROJECT: string;
    PORT: string;
    CLIENT_APP_URL: string;
    DATABASE_URL: string;
    REDIS_URL: string;
    SESSION_SECRET: string;
    DOMAIN_URL: string;
    EMAIL_USER: string;
    EMAIL_PASSWORD: string;
    TOKEN_SECRET: string;
  }
}