function editar (idcarrera, nomcarrera, descripcion){
    $(".registrar").hide();
    $(".editar").show();
    $("#idcarrera").hide();
    $("#form-carreras").attr("action", `/editarCarrera/${idcarrera}`)
    $("#idcarrera").val(idcarrera);
    $("#nombrecarreraE").val(nomcarrera);
    $("#descripcionE").val(descripcion);
}

$(function(){
    $(".editar").hide();
})