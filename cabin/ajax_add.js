
function guardarInformacion(){
		
    if(!validarCampo($("#brand"))){
        alert("Debe ingresar el brand");
        return;
    }
    
    if(!validarCampo($("#rooms"))){
        alert("Debe ingresar un rooms");
        return;
    }	

    if(!validarCampo($("#category_id"))){
        alert("Debe ingresar un category_id");
        return;
    }	

    if(!validarCampo($("#name"))){
        alert("Debe ingresar un name");
        return;
    }	
    
    $.ajax({
        url: 'https://g7f004a497121b6-dbc3reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin',
        
        data:{
            brand: $("#brand").val(),
            rooms: $("#rooms").val(),			
            category_id: $("#category_id").val(),
            name: $("#name").val()			
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