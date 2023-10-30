const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'API Rest - Escola',
            version: '1.0.0',
            description: 'Esta API fornece funcionalidades relacionadas a um sistema de gestão de alunos em uma escola.',
        },
        basePath: '',
    },
    apis: ['./index.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

