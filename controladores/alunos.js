const pool = require('../Banco de dados/conexao')

const listarAlunos = async (req, res) => {
    const query = 'select * from alunos'
    try {
        const consulta = await pool.query(query)
        return res.status(200).json(consulta.rows)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro do Sistema' })
    }
}

const consultarAluno = async (req, res) => {
    const { id } = req.params;
    const query = 'select * from alunos where id = $1'
    try {
        const consulta = await pool.query(query, [id])
        if (consulta.rowCount < 1) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado' })
        }
        return res.status(200).json(consulta.rows)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: 'Erro do Sistema', aviso: error.message })
    }
}

const cadastrarAluno = async (req, res) => {
    const { nome, idade, nome_do_professor, numero_da_sala } = req.body;
    const query = 'insert into alunos (nome, idade, nome_do_professor, numero_da_sala) values ($1, $2, $3, $4) returning *';
    const params = [nome, idade, nome_do_professor, numero_da_sala]
    try {
        const cadastro = await pool.query(query, params)
        return res.status(200).json(cadastro.rows)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro do sistema' })
    }
}

const notaDoAluno = async (req, res) => {
    const { semestre, nota } = req.body;
    const { id } = req.params;
    const params = [id, nota]
    let query = undefined;

    if (semestre == 1) {
        query = 'update alunos set nota_do_primeiro_semestre = $2 where id = $1 returning *'
    } else if (semestre == 2) {
        query = 'update alunos set nota_do_primeiro_semestre = $2 where id = $1 returning *'
    } else {
        return res.status(404).json({ mensagem: "Insira um semestre valido" })
    }

    try {
        const validarAluno = await pool.query('select * from alunos where id = $1', [id])
        const alterarNota = await pool.query(query, params);
        if (validarAluno.rowCount < 1) {
            return res.status(404).json({ mensagem: "Aluno não encontrado" })
        }
        return res.status(202).json(alterarNota.rows[0])
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: "Erro de sistema" })
    }

}


const excluirAluno = async (req, res) => {
    const { id } = req.params;
    const query = 'delete from alunos where id = $1'
    try {
        const consulta = await pool.query(query, [id])
        if (consulta.rowCount < 1) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado' })
        }
        return res.status(200).json(consulta.rows)
    } catch (error) {
        // console.log(error.message) 
        return res.status(500).json({ mensagem: 'Erro do Sistema' })
    }
}


module.exports = {
    listarAlunos,
    consultarAluno,
    cadastrarAluno,
    notaDoAluno,
    excluirAluno
}