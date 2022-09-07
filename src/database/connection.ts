import { typeOrmConfig } from '@config';
import { DataSource } from 'typeorm';

const typeOrmConnection = {
    async create(callback?: (dataSource: DataSource) => void): Promise<void> {
        try {
            const connection = new DataSource(typeOrmConfig);
            await connection.initialize();
            console.log("🚀 ~ file: connection.ts ~ line 13 ~ create ~", "DB connect is successfully!");
            if (callback) {
                callback(connection);
            }
        } catch (error) {
            throw new Error(`ERROR: Creating test db connection: ${error}`);
        }
    },
};

export default typeOrmConnection;
