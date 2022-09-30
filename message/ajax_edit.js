//Funcion (PUT) Editar o Actualizar registro de la tabla Gastos
function editar_Informacion(){
    if(!validarCampo($("#message_e"))){
        alert("Debe ingresar el message");
        return;
    }

    let myData={
        id:$("#id_e").val(),
        messagetext:$('#message_e').val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
	
	if (confirm("Está seguro de editar el registro:  " + id + "  ??")){
		
		$.ajax({
			url: "https://g7f004a497121b6-dbc3reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
			type: "PUT",
			data:dataToSend,
			contentType:"application/JSON",
			datatype:"JSON",
			success:function(respuesta){
				$("#DataResult").empty();

				consultar_todo();
				alert("se ha realizado la Actualicion del registro correctamente")
                $('#Mimodal2').modal('hide');
			}
		});
	}
}