¿Qué significa DAO?
Significa Data Access Object


¿Cuál es su responsabilidad principal?
Se encarga de encapsular las operaciones de la base de datos para consultar, insertar, actualizar y eliminar.


¿Qué relación tiene DAO con una base de datos?
Un DAO actúa como intermediario entre el programa y la base de datos, tambien permite tener una sintaxis ordenada al convertir las consultas en métodos.


¿Qué operaciones aparecen habitualmente en un DAO?
Las que mas se suelen reptir son seleccionar todo, seleccionar por id, insert, update y delete, esas son las mas comunes.


¿Qué diferencia existe entre DAO y Repository?
El DAO se preocupa de cómo acceder a los datos: consultas, inserciones, actualizaciones...

El Repository se preocupa de qué datos necesita la aplicación y ofrece métodos mas personalizados por asi decirlo, al contrario del DAO que usa metodos mas generales.
