
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const express = require('express');
const { consultarAluno, cadastrarAluno, notaDoAluno, excluirAluno, listarAlunos } = require('./controladores/alunos');
const rotas = express();



rotas.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
rotas.use(express.json());

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Retorna a lista de usuários.
 *     responses:
 *       202:
 *         description: Lista de usuários.
 */
rotas.get('/alunos', listarAlunos)

/**
 * @swagger
 * /alunos/consulta/:id:
 *   get:
 *     summary: Retorna o aluno com base no ID fornecido.
 *     responses:
 *       202:
 *         description: Perfil do aluno.
 */
rotas.get('/alunos/consulta/:id', consultarAluno);

/**
 * @swagger
 * /alunos/cadastro:
 *   post:
 *     summary: Cadastra um aluno no banco de dados.
 *     responses:
 *       202:
 *         description: Inserir cadastro de aluno.
 */
rotas.post('/alunos/cadastro', cadastrarAluno);

/**
 * @swagger
 * /alunos/notas/:id:
 *   put:
 *     summary: Altera a nota do aluno.
 *     responses:
 *       202:
 *         description: De acordo com o semestre fornecido no body é alterado a nota do aluno no semestre
 */
rotas.put('/alunos/notas/:id', notaDoAluno);

/**
 * @swagger
 * /alunos/cadastro/delete/id:
 *   delete:
 *     summary: Exclui um aluno do banco de dados.
 *     responses:
 *       202:
 *         description: Com base no ID do aluno é possivel excluir os registros do mesmo.
 */
rotas.delete('/alunos/cadastro/delete/:id', excluirAluno);

rotas.listen(3000);





