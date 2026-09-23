¿Qué problema resuelve Factory?
El evitar que haya muchos new ,utilizados para crear objetos, repartidos por el código, facilitando el trabajo a la hora de tener que editarlo en caso de que haya algun error o cambio dentro del código.


¿Qué ventaja tiene respecto a utilizar new directamente por toda la aplicación?
Que encapsulas todas las creaciones de objetos en llamadas a la factory, haciendo que todos los objetos se creen de la misma forma y evitando usar new


¿Qué tendría que ocurrir si mañana añadimos WhatsAppNotification?
Solo tendrás que añadir dos o tres lineas de código en Factory para dar la opcion de creacion de WhatsAppNotification y llamar a la función de crear mediante la factory desde donde quieras en el código.


¿Quién tiene la responsabilidad de crear los objetos?
La clase Factory, llamada desde el resto de clases


¿Qué ventaja proporciona Factory respecto al acoplamiento?
Promueve que los cambios en las clases que se crean no rompen ni afectan al resto del codigo.
