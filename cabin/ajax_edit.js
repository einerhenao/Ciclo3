//Funcion (PUT) Editar o Actualizar registro de la tabla Gastos
function editar_Informacion(){
    if(!validarCampo($("#brand_e"))){
        alert("Debe ingresar el brand");
        return;
    }
    
    if(!validarCampo($("#rooms_e"))){
        alert("Debe ingresar un rooms");
        return;
    }	

    if(!validarCampo($("#category_id_e"))){
        alert("Debe ingresar un category_id_e");
        return;
    }	

    if(!validarCampo($("#name_e"))){
        alert("Debe ingresar un name");
        return;
    }
    let myData={
        id:$("#id_e").val(),
        brand:$('#brand_e').val(),
		rooms:$('#rooms_e').val(),
		category_id:$('#category_id_e').val(),
		name:$('#name_e').val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
	
	if (confirm("Está seguro de editar el registro:  " + id + "  ??")){
		
		$.ajax({
			url: "https://g7f004a497121b6-dbc3reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin",
			type: "PUT",
			data:dataToSend,
			contentType:"application/JSON",
			datatype:"JSON",
			success:function(respuesta){
				$("#DataResult").empty();

				consultar_todo();
				alert("se ha realizado la Actualicion del registro correctamente");
                $('#Mimodal2').modal('hide');
			}
		});
	}
}