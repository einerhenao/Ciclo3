/*function borrar_registro(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    
    
    if (confirm("Está seguro de eliminar el registro:  " + idElemento + "  ??")){
    
        $.ajax({
            url:"https://g7f004a497121b6-dbc3reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin",
            type:"DELETE",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            
            success:function(respuesta){
                $("#DataResult").empty();
                //limpiar_formulario();
                consultar_todo();
                //location.reload();
                alert("El registro se ha Eliminado correctamente.")
                
                
            }
        });
    }
}*/


$(document).on('click', '#btnDelete', function(){
    $('#Mimodal4').modal('show');
    fila = $(this).closest('tr');
    id = parseInt(fila.find('td:eq(0)').text());
    //$('#id_de').val(id);
    $("#modal-header4").css("background-color","#D43D3D");
    $("#modal-header4").css("color","white");
    $("#close4").css("color","white");
});
    $(document).on('click', '#btnDelete2', function(){
    let myData={
        id:id
    };
    let dataToSend=JSON.stringify(myData);
    
    
   if (confirm("Está seguro de eliminar el registro:  " + id + "  ??")){
    
        $.ajax({
            url:"https://g7f004a497121b6-dbc3reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
            type:"DELETE",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            
            success:function(respuesta){
                $("#DataResult").empty();
                //limpiar_formulario();
                
                //location.reload();
                alert("El registro se ha Eliminado correctamente.")
                $('#Mimodal4').modal('hide');
                consultar_todo();
                
            }
        });
    }

});

