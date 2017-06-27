<?php
$conexion=new mysqli('localhost','root','','gestion_tareas');
$resultado=$conexion->query ("SELECT * FROM tareas");
$tareas=array();
while ($fila=$resultado->fetch_assoc()){
    array_push($tareas,$fila);

}

echo json_encode($tareas);
