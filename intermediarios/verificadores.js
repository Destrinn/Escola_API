const verificarInformacoes = (req, res, next) => {
    const { nome, idade, nome_do_professor, numero_da_sala } = req.body;

    if (!nome) {
        return res.status(401).json({ mensagem: 'o nome é um campo obrigatório' })
    }
    if (!idade) {
        return res.status(401).json({ mensagem: 'o idade é um campo obrigatório' })
    }
    if (!nome_do_professor) {
        return res.status(401).json({ mensagem: 'o nome do professor é um campo obrigatório' })
    }
    if (!numero_da_sala) {
        return res.status(401).json({ mensagem: 'o numero da sala é um campo obrigatório' })
    }
    return next()
}

module.exports = verificarInformacoes