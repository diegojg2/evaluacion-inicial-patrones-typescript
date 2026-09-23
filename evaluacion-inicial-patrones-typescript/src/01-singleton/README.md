¿Qué problema intenta resolver Singleton?
Garantizar que una clase solo tenga una instancia durante toda la ejecución de la aplicación y tener un metodo que te permita acceder a su estado como el getInstance


¿Por qué suele utilizarse un constructor private?
Para impedir que otras clases creen instancias directamente usando new. La clase misma es la que controla cuándo y cómo se crea su única instancia.


¿Cómo se obtiene una instancia de la clase?
Usando algun metodo como getInstance(), que cree la instancia la primera vez que se usa y después devuelva siempre la misma, sin crearla mas veces.


¿Qué ocurriría si pudiéramos utilizar new libremente?
Se podrían crear todas las instancias de la clase que quisiesemos, perdiendo asi la utilidad del singleton.


Pon un ejemplo real donde utilizarías Singleton.
En algun programa en el que se necesite hablar con una base de datos, ya que una vez la creas no querrás crear más, querrás consultarla.

¿Qué inconveniente puede tener abusar de Singleton?
Puede crear un estado difícil de controlar y probar, aumentando el acoplamiento entre clases.

