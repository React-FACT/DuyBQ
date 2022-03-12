require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');
const { registerController } = require('./src/configs/controller.config');
const swaggerJSDoc = require('swagger-jsdoc');
const { createConnection } = require('./src/configs/db.config');
const { passport } = require('./src/configs/auth.config');

const host = process.env.HOST;
const port = process.env.PORT;

const server = express();
const corsOptions = {
    origin: process.env.NODE_ENV === 'development' ? process.env.HTTP_DEV : process.env.HTTP_PRODUCTION,
    credentials: true,
    optionSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.use(passport.initialize());

try {
    // register Controller
    registerController(server);

    // Create connection to database(MySQL)
    createConnection(
        process.env.MYSQL_HOST,
        process.env.MYSQL_PORT,
        process.env.MYSQL_DB,
        process.env.MYSQL_USERNAME,
        process.env.MYSQL_PASSWORD
    );

    // Swagger Configuration
    const swaggerOptions = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Training Resher From 01-2022 to 04-2022',
                version: '1.0.0',
            },
        },
        apis: ['./src/routes/*.js'],
    };

    const swaggerDocs = swaggerJSDoc(swaggerOptions);

    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    server.listen(port, () => {
        console.log(`Example app listening at http://${host}:${port}`);
    });
} catch (err) {
    throw err;
}