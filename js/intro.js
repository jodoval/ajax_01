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
