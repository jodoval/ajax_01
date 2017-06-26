<?php
$texto=$_POST['texto'];
$estado=$_POST['estado'];
$usuario_id=$_POST['usuario_id'];
$conexion=new mysqli('localhost','root','','gestion_tareas');
$resultado=$conexion->query ("INSERT INTO tareas VALUES ('','$texto','$estado','$usuario_id')");
$conexion->close();
