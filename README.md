# SynergyPc Backend

## Puesta en marcha del proyecto

### Instalar dependencias y compilar el proyecto

```bash
npm install && npm run build
```

### Mantener la rama actualizada con master

Para evitar conflictos y mantener la rama en la que estás trabajando sincronizada con los últimos cambios en main, es importante actualizar regularmente. Esto se recomienda hacerlo antes de empezar a trabajar y al finalizar el día.

Pasos para hacer merge de main a la rama actual:

```bash
# Paso 1. Asegúrate de estar en la rama actual
git checkout tu-rama

# Paso 2. Traer los últimos cambios del remoto
git pull

# Paso 3. Hacer merge de main a la rama actual
git merge origin/main

# Paso 4. Resolver conflictos si los hay

# Paso 5. Instalar dependencias, compilar y correr tests
npm install && npm run build && npm test

# Paso 6. Resolver problemas si los hay y repetir el paso 5

```

## Levantar el servidor de desarrollo

Para iniciar el servidor en modo desarrollo, utiliza el siguiente comando:

```bash
npm run start:dev
```

## Proceso de trabajo

### Consideraciones para los commits

- Los commits deben estar en inglés y describir brevemente los cambios realizados.
- Evita commits grandes que cambien muchas cosas a la vez. Opta por commits pequeños y específicos.
- Antes de hacer push, revisa los mensajes de commit para asegurarte de que son claros y descriptivos.

### Consideraciones para las ramas

- No hagas push directamente a main. Todos los cambios deben ir a través de un Pull Request (PR).
- Usa ramas de vida corta que duren un par de días como máximo.
- Crea ramas desde main o desde una rama relacionada que aún no haya sido fusionada.
- Nombra las ramas en kebab-case con el formato [tipo]-[descripción]:
  - tipo puede ser:
    - `feature`: para agregar funcionalidad nueva.
    - `fix`: para corregir errores.
    - `chore`: para mantenimiento, configuración o documentación.
  - Ejemplos válidos:
    - `feature-add-user-authentication`
    - `fix-checkout-bug`
    - `chore-update-readme`

### Consideraciones para los Pull Requests

- Los PRs deben tener un título corto y descriptivo.
- Divide los cambios grandes en varios PRs más pequeños si es posible.
- Asegúrate de que el PR pase todas las pruebas antes de solicitar revisión.
- Asigna al menos un revisor para que apruebe los cambios antes de fusionar.

### Reglas de código y revisiones

#### Organización del código

- Usa nombres descriptivos y consistentes para variables, funciones y clases.
- Elimina código comentado o innecesario.
- No uses console.log en producción; depende de los logs configurados o de herramientas de depuración.

#### Limpieza y estructura

- Evita duplicar código; abstrae funcionalidades comunes en métodos reutilizables.
- Organiza el código para que sea fácil de entender y modificar.