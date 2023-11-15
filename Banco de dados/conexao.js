const pg = require('pg');
const swaggerJSDoc = require('swagger-jsdoc');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'locao200',
    database: 'escola_nuvem'
});

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





module.exports = { pool, swaggerSpec };