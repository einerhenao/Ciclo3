function consultar_todo(){
    $.ajax({
        url:"https://g7f004a497121b6-dbc3reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"json",
        
        error: function(xhr, status){
            alert('ha ocurrido un problema, intentalo nuevamente, ' + xhr.status);
        },
        
        complete: function(xhr, status){
            console.log('Resultado de comprobacion -- cod. estado: ' + xhr.status);
        },	
        
        success:function(json){
            //console.log(respuesta);
            //crearRespuestaGastos(respuesta.items)
            
            $("#DataResult").empty();
            filas = "";
            for (i=0; i<json.items.length; i++){
                filas += "<tr>";
                filas += "<th>" + [i+1] + "</th>";
                filas += "<td>" + json.items[i].id + "</td>";
                filas += "<td>" + json.items[i].name + "</td>";
                filas += "<td>" + json.items[i].email + "</td>";
                filas += "<td>" + json.items[i].age + "</td>";
                filas += "<td> <button class='btn btn-info' id='btnDetail' title='DETAILS'><ion-icon name='eye'></ion-icon></button><a> </a>";
                filas += `<button class='btn btn-primary' id='btnEdit' title='EDIT'><ion-icon name='pencil'></ion-icon></button><a> </a>`;
                filas += "<button class='btn btn-danger' id='btnDelete' title='DELETE'><ion-icon name='remove'></ion-icon></button>";
                //filas += "<button class='btn btn-danger' title='DELETE' onclick='borrar_registro("+json.items[i].id+")'><ion-icon name='remove'></ion-icon></button>";
                filas += "</td>";//se agrega el boton y este tiene la funcion borrar registro:<ion-icon name="eye-outline"></ion-icon>
                filas += "</tr>";
            }
            $("#DataResult").html(filas);
            console.log(json);
            
            
        }

    });
}
