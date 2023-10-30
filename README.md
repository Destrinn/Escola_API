# Escola Nuvem API

## Descrição
Este é um projeto de API em Node.js que fornece funcionalidades para gerenciar alunos de uma escola. A API permite listar alunos, consultar informações de um aluno, cadastrar novos alunos, atualizar as notas dos alunos e excluir alunos do banco de dados.

## Rotas

### Listar Alunos
- **Método**: GET
- **Rota**: /alunos
- **Descrição**: Esta rota retorna uma lista de todos os alunos cadastrados na escola.

### Consultar Aluno
- **Método**: GET
- **Rota**: /alunos/consulta/:id
- **Descrição**: Esta rota permite consultar informações detalhadas de um aluno com base no seu ID.

### Cadastrar Aluno
- **Método**: POST
- **Rota**: /alunos/cadastro
- **Descrição**: Esta rota permite cadastrar um novo aluno na escola. É necessário fornecer o nome, idade, nome do professor e número da sala do aluno.

### Atualizar Nota do Aluno
- **Método**: PUT
- **Rota**: /alunos/notas/:id
- **Descrição**: Esta rota permite atualizar as notas do aluno para um determinado semestre (1 ou 2). É necessário fornecer o semestre e a nota desejada.

### Excluir Aluno
- **Método**: DELETE
- **Rota**: /alunos/cadastro/delete/:id
- **Descrição**: Esta rota permite excluir um aluno da escola com base no seu ID.

## Banco de Dados

O projeto utiliza um banco de dados PostgreSQL com as seguintes tabelas:

### Tabela "alunos"
- `id`: Identificador único do aluno (chave primária).
- `nome`: Nome do aluno.
- `idade`: Idade do aluno.
- `nota_do_primeiro_semestre`: Nota do aluno no primeiro semestre.
- `nota_do_segundo_semestre`: Nota do aluno no segundo semestre.
- `nome_do_professor`: Nome do professor responsável pelo aluno (referência à tabela "professores").
- `numero_da_sala`: Número da sala em que o aluno está matriculado.

### Tabela "professores"
- `id`: Identificador único do professor (chave primária).
- `nome`: Nome do professor.
- `disciplina`: Disciplina ministrada pelo professor.

A tabela "professores" possui uma restrição de unicidade no campo "nome".
