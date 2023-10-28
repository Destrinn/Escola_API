const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'API RestFul Escola_Nuvem',
            version: '1.0.0',
            description: 'Documentação da API RESTful simulando as funcionalidades CRUD usando Swagger',
        },
        basePath: '/',
    },
    apis: ['./index.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
