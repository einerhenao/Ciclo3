
function guardarInformacion(){
		
    if(!validarCampo($("#message"))){
        alert("Debe ingresar el message");
        return;
    }

    $.ajax({
        url: 'https://g7f004a497121b6-dbc3reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
        
        data:{
            messagetext: $("#message").val(),
        },
        
        type: 'POST',
        
        dataType: 'json',
        
                
        success:function(json){		
        },
        
        error: function(xhr, status){
            if(xhr.status == 200){
                console.log("registro guardado con exito");
            }
            else{
                console.log("Favor revise que los datos esten correctos");
            }
        },
        
        complete: function(xhr, status){
            alert('La peticion al servidor ha sido procesada con exito,' + xhr.status);
           
            //location.reload();
            consultar_todo();
            limpiar_formulario();
            $('#Mimodal').modal('hide');

        },	

    });
}