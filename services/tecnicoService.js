const tecnicos = [
    {
        nome:"João da Silva",
        especialidade:"redes"
    },
    {
        nome:"John Connor",
        especialidade:"software" 
    },
    {
        nome:"Maria dos Santos",
        especialidade:"hardware"
    }

];

function buscaPorEspecialidade(especialidade){
    return tecnicos.find(tecnico=>{
        return tecnico.especialidade === especialidade;
    });
}

module.exports = {
    buscaPorEspecialidade
};



