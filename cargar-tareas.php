<?php
$conexion=new mysqli('localhost','root','','gestion_tareas');
$resultado=$conexion->query ("SELECT * FROM tareas");

while ($fila=$resultado->fetch_assoc()){
  echo '<tr>';
  echo '<td>'.$fila['id'].'</td>';
  echo '<td>'.$fila['texto'].'</td>';
  echo '<td>'.$fila['estado'].'</td>';
  echo '<td>'.$fila['usuario_id'].'</td>';
  echo '<td>';
    echo '<a href="#" class="borrar" data-id="'.$fila['id']. '">Borrar</a>';
  echo '</td>';
  echo '</tr>';
}
