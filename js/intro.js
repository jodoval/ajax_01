function recogerTareas(){
  $.ajax({
    url: "cargar-tareas.php",
    type: "post",
    dataType: "html",
    success: function (filas){
      $("#tareas").html(filas);
    }


  });
}



$("#guardar").click(function(){
  var $texto= $("#texto").val();
  var $estado= $("#estado").val();
  var $usuario_id=$("#usuario_id").val();
  $.ajax({
    url: "guardar-tareas.php",
    type: "post",
    data: {
      texto:$texto,
      estado:$estado,
      usuario_id:$usuario_id
    },
    success: function (){
      recogerTareas();
       recogerTareasJson();
    }


  });
})


$(document).on("click",".borrar",function(){
         var $id=$(this).data("id");
         $.ajax({
           url: "borrar-tareas.php",
           type: "post",
           data: {
             id:$id
           },

           success: function (){
             recogerTareas();
              recogerTareasJson();
           }
         });



});




function recogerTareasJson(){
  $.ajax({
    url: "cargar-tareas-json.php",
    type: "post",
    dataType: "json",
    success: function (tareas){
      $("#tareas-json").html("");
      for (var i = 0; i < tareas.length; i++) {

          $("#tareas-json").append("<tr>");
            $("#tareas-json").append("<td>"+tareas[i].id+"</td>");
            $("#tareas-json").append("<td>"+tareas[i].texto+"</td>");
            $("#tareas-json").append("<td>"+tareas[i].estado+"</td>");
            $("#tareas-json").append("<td>"+tareas[i].usuario_id+"</td>");
            $("#tareas-json").append("<td><a href='#' class='borrar' data-id='"+tareas[i].id+"'>Borrar</a></td>");
                $("#tareas-json").append("<tr>");
    }
 }

  });
}

recogerTareas();
setInterval(recogerTareas,30000);
recogerTareasJson();
setInterval(recogerTareasJson,30000);
