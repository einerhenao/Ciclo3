//Funcion (PUT) Editar o Actualizar registro de la tabla Gastos
function editar_Informacion(){
    if(!validarCampo($("#name_e"))){
        alert("Debe ingresar el name");
        return;
    }
    
    if(!validarCampo($("#email_e"))){
        alert("Debe ingresar un email");
        return;
    }	

    if(!validarCampo($("#age_e"))){
        alert("Debe ingresar un age");
        return;
    }	

    let myData={
        id:$("#id_e").val(),
        name:$('#name_e').val(),
		email:$('#email_e').val(),
		age:$('#age_e').val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
	
	if (confirm("Está seguro de editar el registro:  " + id + "  ??")){
		
		$.ajax({
			url: "https://g7f004a497121b6-dbc3reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
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