const chamadoService = require('../services/chamadoService');

function criar(req, res){
    console.log("1 - CONTROLLER recebeu", req.body);
    const chamado = chamadoService.criar(req.body);
    res.status(201).json(chamado)
}

function listar(req, res) {
    const chamados = chamadoService.listar();

    return res.status(200).json(chamados);
}

function buscarPorId(req, res) {
    const chamado = chamadoService.buscarPorId(
        req.params.id
    );

    if (!chamado) {
        return res.status(404).json({
            erro: "Chamado não encontrado."
        });
    }

    return res.status(200).json(chamado);
}


module.exports = { 
    criar,
    listar,
    buscarPorId
}