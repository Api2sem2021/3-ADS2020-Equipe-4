
function cadastrar(){
    var nome = $("#nome").val();
    var cpf = $("#cpf").val();
    var email = $("#email").val();
    var telefone = $("#telefone").val();
    var curriculo = $("#curriculo").val();

    $.ajax({
        type: "POST",
        url: "../../../esw_backend/src/main/java/com/fatec/esw/resources/CandidatoResource.java/cadastrar",
        data: {
            id: null,
            nome: nome,
            cpf: cpf,
            email: email,
            telefone: telefone,
            curriculo: curriculo
        },
        dataType: "JSON",
        success: function (msg) {
            if (msg) {
                alert("Cadastrado com sucesso!");
                location.reload(true);
            } else {
                alert("Não foi possível cadastrar!");
            }
        }
      });
}
