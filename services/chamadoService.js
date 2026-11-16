const { suporteN1 } = require('../handlers/suporteHandler');

const chamadoRepository = require(
    '../repositories/chamadoRepository'
);

function criar(dados) {
    console.log("2 - SERVICE recebeu!", dados);

    const prioridades = ["normal", "media", "alta"];

    if (!dados || !prioridades.includes(dados.prioridade)) {
        throw new Error("Prioridade inválida.");
    }

    if (!dados.titulo || !dados.especialidade) {
        throw new Error(
            "Título e especialidade são obrigatórios."
        );
    }

    const chamado = {
        titulo: dados.titulo,
        prioridade: dados.prioridade,
        especialidade: dados.especialidade,
        status: "aberto"
    };

    chamado.responsavel = suporteN1(chamado);

    if (!chamado.responsavel) {
        throw new Error(
            "Nenhum técnico encontrado para a especialidade."
        );
    }

    console.log("3 - SERVICE criou:", chamado);

    return chamadoRepository.salvar(chamado);
}

function listar() {
    return chamadoRepository.listar();
}

function buscarPorId(id) {
    return chamadoRepository.buscarPorId(id);
}

module.exports = {
    criar,
    listar,
    buscarPorId
};