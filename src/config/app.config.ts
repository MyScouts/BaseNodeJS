import { config } from 'dotenv';
config({ path: `./environments/.env.${process.env.ENV || 'dev'}` });

// If .env wasn't provided then exit
if (!process.env.PORT) {
    console.error('==> Please check your .env');
    process.exit(1);
}

export const {
    PORT,
    TYPEORM_HOST,
    TYPEORM_USERNAME,
    TYPEORM_PASSWORD,
    TYPEORM_DATABASE,
    TYPEORM_PORT,
    TYPEORM_SYNCHRONIZE,
    TYPEORM_LOGGING,
    TYPEORM_MIGRATIONS_RUN,
    PRODUCTION_ENV,
    TYPEORM_TYPE
} = process.env