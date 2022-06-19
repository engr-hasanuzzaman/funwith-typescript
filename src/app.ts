// import express from 'express';
import express from'express';
import config from 'config';
import connect from './utils/connection';

const port = config.get<string>('port');
const app = express();
app.listen(port, () => {
    connect();
    console.log("Application is running on port " + port);
});