<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Introducción AJAX</title>
  </head>
  <body>
    <div>
      <input type="text" id="texto" placeholder="Introduce el texto">
        <input type="text" id="estado" placeholder="Introduce el estado">
          <input type="text" id="usuario_id" placeholder="Introduce el ID del usuario">
          <button type="button" id="guardar">Guardar</button>
    </div>
    <br>
    <br>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Texto</th>
          <th>Estado</th>
          <th>Usuario ID</th>
          <th>Acción</th>
        </tr>
      </thead>
    <tbody id="tareas">

    </tbody>


    </table>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="js/intro.min.js" ></script>


  </body>
</html>
