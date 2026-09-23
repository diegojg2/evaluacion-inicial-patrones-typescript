¿Qué es una dependencia?
Una dependencia es cuando una clase necesita a otra clase para funcionar. Por ejemplo, UserService necesita NotificationService para poder enviar mensajes.


¿Qué significa inyectar una dependencia?
Significa inyectarle a la clase desde fuera lo que necesita, normalmente usando el constructor, en vez de hacer un new dentro de la clase.


¿Qué diferencia existe entre crear una dependencia con new y recibirla mediante el constructor?
Si UserService hace un new EmailService(), siempre dependerá de EmailService. Si recibe el servicio por el constructor, se le puede pasar otro servicio diferente que haga lo mismo.


¿Qué problema genera un alto acoplamiento?
Hace que el código sea más difícil de cambiar, porque las clases dependen demasiado unas de otras. Si cambias una clase, puedes romper otras que dependan de ella.


¿Qué ventaja proporciona Dependency Injection para realizar pruebas?
Permite pasar elementos falsos para hacer las pruebas. Así podemos probar UserService sin tener que enviar correos de verdad.


¿Por qué este concepto es especialmente importante en frameworks como NestJS?
