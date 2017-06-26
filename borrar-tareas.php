<?php

$id=$_POST['id'];
$conexion=new mysqli('localhost','root','','gestion_tareas');
$resultado=$conexion->query ("DELETE FROM tareas WHERE id='$id' LIMIT 1");
$conexion->close();
