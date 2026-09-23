# Evaluación inicial - Patrones TypeScript

Nombre: Diego
Apellidos: Justo García
Curso: 2SI
Fecha: 22/09/2026

## Patrones implementados

| Patrón     | Implementado | Entendido |
| Singleton  | Sí           | Sí |
| Factory    | Sí           | Sí |
| DAO        | No           | Sí |
| Dependency 
  Injection  | Sí           | Sí |

## Reflexión final
### 1. ¿Qué patrón te ha resultado más sencillo?
El Singleton porque es el mas "directo" a la hora de hacerlo en codigo, que una vez lo sabes hacer no tiene mucha perdida.

### 2. ¿Cuál te ha resultado más complicado?
El DAO, en javascript no sabria hacerlo.

### 3. ¿Cuál utilizarías con más frecuencia?
Utilizaría Factory, que me permite tener todo mas organizado sin tener los new perdidos por medio del codigo.

### 4. ¿Qué patrón o concepto crees que será especialmente útil en desarrollo móvil?
Dependency Injection será especialmente útil para sustituir servicios de red, almacenamiento o autenticación durante las pruebas y para adaptar la aplicación a distintas plataformas.

### 5. ¿Qué patrón crees que aparecerá con frecuencia cuando trabajemos con NestJS?
Dependency Injection, porque NestJS utiliza un contenedor que crea los proveedores y los inyecta en los constructores de los servicios y controladores.