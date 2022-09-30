//evento o funcion clic para abrir modal de crear registros
$(document).on('click', '#open_modal1', function(){
	//Al presionar clic en el boton muestra el modal
	$('#Mimodal').modal('show');
	//estilos css al modal
	$("#modal-header").css("background-color","#2B9743");
	$("#modal-header").css("color","white");
	$("#close").css("color","white");		
});

////evento o funcion clic para abrir modal cuando presione el boton de guardar registros
$(document).on('click', '#s1', function(){	
	//Al presionar clic en el boton muestra el modal
	$('#Mimodal').modal('show');
});

$(document).on('click', '#s2', function(){	
	//Al presionar clic en el boton muestra el modal
	$('#Mimodal2').modal('show');
});

//Funciones para el boton editar y envio de informacion al modal editar
$(document).on('click', '#btnEdit', function(){ //evento clic en el boton de html
	//Al presionar clic en el boton muestra el modal
	$('#Mimodal2').modal('show');
	//Relaciona los datos de las columnas a variables
	fila = $(this).closest('tr'); 
	id = parseInt(fila.find('td:eq(0)').text());
	brand = fila.find('td:eq(1)').text();
	rooms = parseInt(fila.find('td:eq(2)').text());
	category_id = parseInt(fila.find('td:eq(3)').text());
	name = fila.find('td:eq(4)').text();
	//Inserta los datos de la columnas en los campos
	$('#id_e').val(id);
	$('#brand_e').val(brand);
	$('#rooms_e').val(rooms);
	$('#category_id_e').val(category_id);
	$('#name_e').val(name);
	//estilos css al modal
	$("#modal-header2").css("background-color","#3459F5");
	$("#modal-header2").css("color","white");
	$("#close2").css("color","white");
});

//Funciones para el boton detalles y envio de informacion al modal detalles
$(document).on('click', '#btnDetail', function(){
	//Al presionar clic en el boton muestra el modal
	$('#Mimodal3').modal('show');
	//Relaciona los datos de las columnas a variables
	fila = $(this).closest('tr');
	id = parseInt(fila.find('td:eq(0)').text());
	brand = fila.find('td:eq(1)').text();
	rooms = parseInt(fila.find('td:eq(2)').text());
	category_id = parseInt(fila.find('td:eq(3)').text());
	name = fila.find('td:eq(4)').text();
	//Inserta los datos de la columnas en los campos
	$('#id_d').val(id);
	$('#brand_d').val(brand);
	$('#rooms_d').val(rooms);
	$('#category_id_d').val(category_id);
	$('#name_d').val(name);
	//estilos css al modal
	$("#modal-header3").css("background-color","#23D7E8");
	$("#modal-header3").css("color","white");
	$("#close3").css("color","white");
});

//Funcion para recargar la pagina
function actualizar(){
	location.reload(true);
}

//funcion para cargar la pagina y traiga la lista de todos los datos de la tabla
function f1(){
	console.log("Funcion cargada al inicio");
	consultar_todo()
}

//Cargar la pagina en la funcion f1
window.onload = f1;

//Limpiar campos de formulario
function limpiar_formulario(){	
	var campoTextoId = document.getElementById("id");
	var campoTextoBrand = document.getElementById("brand");
	var campoTextoRooms = document.getElementById("rooms");
	var campoTextoCategory = document.getElementById("category_id");
	var campoTextoName = document.getElementById("name");
			
	campoTextoId.value = "";
	campoTextoBrand.value = "";
	campoTextoRooms.value = "";
	campoTextoCategory.value = "";
	campoTextoName.value = "";		
}

//funcion para validar si el campo esta vacio
function validarCampo(campoTexto){
	if(campoTexto.val() != ""){
		return true;
	}
	else{
		return false;
	}
}

//Funcion Ajax para buscar registro por id
function consultaID(id){
	if(!validarCampo(id)){
		alert("Debe ingresar ID valido a buscar"+id.attr("id"));
	}
	else{
		$.ajax({
				url: 'https://g7f004a497121b6-dbc3reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin/:id'+ id.val(),
				type: 'GET',
				dataType: 'json',
				success: function(json){
					filas = "";
					if (json.items.length > 0){
						console.log(json);
						$("#DataResult").empty();
						filas += "<tr>";
						filas += "<th>" + [0+1] + "</th>";
						filas += "<td>" + json.items[0].id + "</td>";
						filas += "<td>" + json.items[0].brand + "</td>";
						filas += "<td>" + json.items[0].rooms + "</td>";
						filas += "<td>" + json.items[0].category_id + "</td>";
						filas += "<td>" + json.items[0].name + "</td>";
						filas += "<td> <button class='btn btn-primary'  id='open_modal' title='EDIT'><ion-icon name='pencil'></ion-icon></button>";
						filas += `<a href="" class="btn btn-success" title="DETAILS"><ion-icon name="eye"></ion-icon></a>`;
						filas += "<button class='btn btn-danger' title='DELETE' onclick='borrar_registro("+json.items[0].id+")'><ion-icon name='remove'></ion-icon></button>";
						filas += "</td>";
						filas += "</tr>";
						$("#DataResult").append(filas)
					}
					else{
						alert("El registro con ID: "+ id.val() + "No existe")
					}
					
				},

				error: function(xhr, status){
					alert('ha ocurrido un problema, Error: ' + xhr.status);
				},
				
				complete: function(xhr, status){
					alert('La peticion ha sido realizada,' + xhr.status);
					
				}		

		});
	}
}
