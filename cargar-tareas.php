<?php
$conexion=new mysqli('localhost','root','','gestion_tareas');
$resultado=$conexion->query ("SELECT * FROM tareas");

while ($fila=$resultado->fetch_assoc()){
  echo '<tr>';
  echo '<td>'.$fila['id'].'</td>';
  echo '<td>'.$fila['texto'].'</td>';
  echo '<td>'.$fila['estado'].'</td>';
  echo '<td>'.$fila['usuario_id'].'</td>';
  echo '</tr>';
}
