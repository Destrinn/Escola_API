const express = require('express');
const { consultarAluno, cadastrarAluno, notaDoAluno, excluirAluno, listarAlunos } = require('./controladores/alunos');
const rotas = express();



rotas.use(express.json());

rotas.get('/alunos', listarAlunos)
rotas.get('/alunos/consulta/:id', consultarAluno);
rotas.post('/alunos/cadastro', cadastrarAluno);
rotas.put('/alunos/notas/:id', notaDoAluno);
rotas.delete('/alunos/cadastro/delete/:id', excluirAluno);

rotas.listen(3000);
