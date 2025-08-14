

function EnviarFormulario() {
    // Pegar os valores digitados no input
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const nascimento = document.getElementById("nascimento").value;
    const rg = document.getElementById("rg").value;
    const cpf = document.getElementById("cpf").value;
    const nacionalidade = document.getElementById("nacionalidade").value;
    const naturalidade = document.getElementById("naturalidade").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const tipoderacao = document.getElementById("tipoderacao").value;

    // Mostrar no console
    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
    console.log("Nascimento:", nascimento);
    console.log("RG:", rg);
    console.log("CPF:", cpf);
    console.log("Nacionalidade:", nacionalidade);
    console.log("Naturalidade:", naturalidade);
    console.log("Altura:", altura);
    console.log("Peso:", peso);
    console.log("Tipo de ração:", tipoderacao);
   
}