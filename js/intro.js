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
recogerTareas();
setInterval(recogerTareas,30000);


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
    success:recogerTareas

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

           success: recogerTareas
         }); 



});
