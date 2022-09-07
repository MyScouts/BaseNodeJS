import app from '@app';
import { PORT } from '@config'
import typeOrmConnection from '@database/connection';


const handleConnection = async () => {
    // run express application on given port
    app.listen(PORT, () => {
        return console.log(
            `Server is listening on ${PORT}
          `
        );
    });
};

typeOrmConnection.create(handleConnection)