function editar (idalumno, nombre, apellido, telefono, correo, idcarrera){
    $(".registrar").hide();
    $(".editar").show();
    $("#idalumno").hide();
    $("#form-alumnos").attr("action", `/editarAlumno/${idalumno}`)
    $("#idalumno").val(idalumno);
    $("#nombreE").val(nombre);
    $("#apellidoE").val(apellido);
    $("#telefonoE").val(telefono);
    $("#correoE").val(correo);
    $("#idcarreraE").val(idcarrera);
}

$(function(){
    $(".editar").hide();
})