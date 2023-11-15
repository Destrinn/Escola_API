
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const express = require('express');
const { consultarAluno, cadastrarAluno, notaDoAluno, excluirAluno, listarAlunos } = require('./controladores/alunos');
const verificarInformacoes = require('./intermediarios/verificadores');
const rotas = express();



rotas.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
rotas.use(express.json());

rotas.get('/', (req, res) => {
    return res.json('raulzin the tchola')
})
rotas.get('/alunos', listarAlunos)
rotas.get('/alunos/consulta/:id', consultarAluno);
rotas.post('/alunos/cadastro', verificarInformacoes, cadastrarAluno);
rotas.put('/alunos/notas/:id', notaDoAluno);
rotas.delete('/alunos/cadastro/delete/:id', excluirAluno);

rotas.listen(3000);





/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Retorna a lista de todos os alunos cadastrados no banco de dados.
 *     responses:
 *       202:
 *         description: Quando o status code 200 é retornado, a rota retorna com sucesso a lista de todos os alunos cadastrados em formato JSON.
 *              
 */

/**

/**
 * @swagger
 * /alunos/consulta/{id}:
 *  get:
 *   summary: Consulta informações de um aluno pelo ID
 *   description: Esta rota retorna informações de um aluno com base no ID fornecido.
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *       description: O ID do aluno.
 *   responses:
 *     '200':
 *       description: Requisição bem-sucedida
 *     '404':
 *       description: Aluno não encontrado
*/

/**
* @swagger
* /alunos/cadastro:
*    post:
*      summary: Cadastra um novo aluno
*      description: Esta rota permite cadastrar um novo aluno com base nas informações fornecidas no body.
*      requestBody:
*        required: true
*      responses:
*        '200':
*          description: Cadastro bem-sucedido
*        '500':
*          description: Erro do sistema
*/

/**
 * @swagger
 * /alunos/notas/{id}:
 *   put:
 *     summary: Esta rota atualiza a nota de um aluno em um determinado semestre.
 *     responses:
 *       202:
 *         description: a rota retorna os detalhes do aluno com a nota atualizada em formato JSON
 *       404:
 *         description: Quando o status code 404 é retornado, significa que o aluno não foi encontrado ou o semestre informado não é válido
 *       500:
 *         description: ocorreu um erro no sistema durante o processo de atualização da nota
 */



/**
 * @swagger
 * /alunos/cadastro/delete/id:
 *   delete:
 *     summary: Esta rota exclui um aluno com base em seu ID.
 *     responses:
 *       202:
 *         description: Quando o status code 200 é retornado, a rota indica que o aluno foi excluído com sucesso.
 *       404:
 *          description: Quando o status code 404 é retornado, significa que o aluno não foi encontrado
 *       500:
 *          description: Quando o status code 500 é retornado, ocorreu um erro no sistema durante o processo de exclusão.
 */

