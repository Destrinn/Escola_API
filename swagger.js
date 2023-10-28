const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Minha API RESTful',
            version: '1.0.0',
            description: 'Documentação da API RESTful usando Swagger',
        },
        basePath: '/',
    },
    apis: ['./index.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
