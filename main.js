// Essa função serve para pegar os Dados cadastrados no formulário e salvar na local storage //

function cadastroPacientes(){
    var nome_cad = document.getElementById("nome_cad");
    var nasc_cad = document.getElementById("nasc_cad");
    var cpf_cad = document.getElementById("cpf_cad");
    var sex_cad = document.getElementById("sex_cad");
    var end_cad = document.getElementById("end_cad");
    var stat_cad = document.getElementById("stat_cad");

    var dados = JSON.parse(localStorage.getItem("dadosPacientes"));

    if(dados == null){
      localStorage.setItem("dadosPacientes", "[]");
      dados = [];
    }

    var auxRegistro = {
      Nome: nome_cad.value,
      DataNascimento: nasc_cad.value,
      CPF: cpf_cad.value,
      Sexo: sex_cad.value,
      Endereço: end_cad.value,
      Status: stat_cad.value
    }
  
    dados.push(auxRegistro);

    localStorage.setItem("dadosPacientes", JSON.stringify(dados));
    alert("Cadastro concluído!")

    nome_cad.value = "";
    nasc_cad.value = "";
    cpf_cad.value = "";
    sex_cad.value = "";
    end_cad.value = "";
    stat_cad.value = "";

  }

  // A função termina aqui //

// Esse código é uma máscara para após 3 digitos do CPF colocar um ., depois de outros 3 outro . e no final um - //

const cpf = document.querySelector('#cpf_cad');

cpf.addEventListener('keypress', () => {
    let inputlenght = cpf.value.length

    if (inputlenght == 3 || inputlenght == 7) {
        cpf.value += '.'
    }
    else if (inputlenght == 11){
        cpf.value += '-'
    }

})

// Acaba aqui a máscara de CPF //

// Verifica se o CPF já foi inserido //

for(let cpf_validate of JSON.parse(localStorage.getItem("dadosPacientes"))){
  if(cpf_validate.CPF == cpf.value){
      alert("CPF já cadastrado!")
        document.getElementById("#cpf_cad").value = "";
    }
    else{
        cadastroPacientes();
    }
}

// Fim da verificação //

// Já essa máscara, serve para colocar / para separar a data de nascimento, com dia, mês e ano //

const datanasc = document.querySelector('#nasc_cad');

datanasc.addEventListener('keypress', () => {
    let inputlenght = datanasc.value.length

    if (inputlenght == 2 || inputlenght == 5) {
        datanasc.value += '/'
    }

})

// Acaba aqui a máscara de Data de Nascimento //

// Essa máscara serve para não permitir que digitemos números no campo nome //
 
var inputNome = document.querySelector("#nome_cad");
nome_cad.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

// Acaba aqui a máscara de Nome //

/* No teste diz que pode ser feito com local storage, porém, depois de diversas pesquisas que fiz,
conclui que não há como fazer alterações de formulários já enviados no local storage, portanto,
é inviável fazer alterações em pacientes já cadastrados, pois não há suporte para isso no método utilizado. */
