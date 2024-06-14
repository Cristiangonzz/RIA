# Laboratorio - Parte 2 Taller de Aplicaciones de Internet Ricas

## Integrantes

- Cristian González
- Wueisman Rivero
- Facundo Alvarez de Ron

## Descripción

Este proyecto consiste en el desarrollo de una aplicación web para la visualización y seguimiento de partidos de fútbol. La aplicación permite a los usuarios consultar una lista de partidos, ver detalles específicos de cada equipo, y las comentencias en las que participan y revisar los resultados detallados de los partidos pasados. Además, ofrece la funcionalidad de filtrado por fecha para mostrar partidos dentro de un rango específico de días.

## Historias de Usuario

**1. Visualización de Lista de Partidos por Fecha**:

Como usuario, quiero ver una lista de partidos de fútbol que ocurran en una fecha específica o en un rango de fechas dentro de los próximos 10 días.

#### Criterios de Aceptación:

- La página principal muestra automáticamente los partidos del día actual, con su estado.
- Si selecciono una fecha específica o un rango de fechas, la lista se actualiza mostrando los partidos correspondientes.
- Los inputs para seleccionar las fechas están validados, impidiendo filtrar si las fechas no están definidas correctamente (por ejemplo, si la fecha 'desde' es mayor que la fecha 'hasta').

**2. Detalle de Equipo:**

Como usuario, quiero poder hacer clic en un equipo en la lista de partidos para ver detalles específicos del equipo.

#### Criterios de Aceptación:

- Al hacer clic en la foto o nombre de un equipo en la lista de partidos, soy redirigido a una página de detalle que muestra información detallada del equipo.
- La información incluye nombre del equipo, país, página web (si está disponible), entrenador, lista de jugadores, etc.

**3. Visualización de Resultado Detallado de Partido:**

Como usuario, quiero poder ver el resultado detallado de un partido al hacer clic en un botón de "Ver Detalle".

#### Criterios de Aceptación:

- En la lista de partidos, cada partido tiene un botón "Ver Detalle".
- Al hacer clic en este botón, soy redirigido a una página que muestra el resultado específico del partido seleccionado.
- Además del resultado, se muestran datos relevantes de la temporada como el inicio y fin, y si la temporada ha finalizado, se indica quién fue el ganador.

**4. Ver Listado de Competencias**

Como usuario, quiero poder ver un listado de todas las competencias disponibles, mostrando únicamente su nombre y logo. También deseo tener la opción de ver el detalle completo de cada competencia y el listado de equipos participantes.

#### Criterios de Aceptación:

- Mostrar una lista de competencias disponibles, cada una con su nombre y logo.
- Ofrecer un botón para ver el detalle completo de cada competencia.
- Ofrecer un botón para ver el listado de equipos participantes en cada competencia.
- Al hacer clic en el botón "Ver detalle" de una competencia específica, redirigir al caso de uso "Ver Detalle de una Competencia".
- Al hacer clic en el botón "Ver Equipos", navegar al caso de uso "Ver Equipos de una Competencia"

**5. Ver Detalle de una Competencia:**

Como usuario, quiero poder ver los detalles específicos de una competencia seleccionada, incluyendo su nombre, fechas de inicio y fin de la temporada actual, y las últimas temporadas asociadas a esa competencia. Además, deseo poder ver los partidos de cada temporada desde un botón disponible en cada item temporada.

#### Criterios de Aceptación:

- Mostrar el nombre completo de la competencia.
- Mostrar las fechas de inicio y fin de la competencia.
- Mostrar una lista de las últimas temporadas asociadas a la competencia.
- Para cada temporada, mostrar un botón que permita al usuario ver los partidos asociados a esa temporada.
- Al hacer clic en el botón de una temporada, redirigir al caso de uso: "Ver Partidos de una Competencia/Temporada"

**6. Ver Partidos de una Competencia/Temporada:**

Como usuario, quiero poder ver el listado de partidos de una competencia y temporada específica, incluyendo detalles como las fechas, equipos participantes y resultados.

#### Criterios de Aceptación:

- Mostrar un listado de partidos programados para una determinada competencia y temporada, incluyendo detalles como las fechas, equipos participantes y resultados (si están disponibles).

**7. Ver Equipos de una Competencia**

Como usuario, quiero poder ver el listado de equipos que participan en una competencia específica, mostrando solo su nombre y logo.

#### Criterios de Aceptación:

- Mostrar un listado de equipos participantes en esa competencia, cada uno con su nombre y logo.
- Mostrar un boton que rediriga al caso de uso "Detalle de Equipo".

## Arquitectura del Proyecto

El proyecto está desarrollado utilizando Angular y Bootstrap como tecnologías principales.

### Tecnologías Utilizadas

- **Angular**: Framework de desarrollo frontend basado en TypeScript. Angular proporciona una estructura robusta y modular para la construcción de aplicaciones web SPA (Single Page Application). Se utiliza para manejar la lógica de la aplicación, el enrutamiento y la interacción con la API.

- **Bootstrap**: Framework CSS para el diseño responsivo de interfaces de usuario. Bootstrap ofrece componentes y estilos predefinidos que aseguran una apariencia coherente y adaptativa en diferentes dispositivos.

### Estructura del Proyecto

El proyecto Angular está organizado en diferentes módulos y componentes que manejan distintas partes de la aplicación:

- **Componentes**: Se han desarrollado componentes reutilizables para la lista de partidos, detalles del equipo, resultados de partidos, entre otros.

- **Servicios**: Se utilizan servicios para la integración con la API de Football Data, gestionando las solicitudes HTTP y la manipulación de datos.

- **Enrutamiento**: Angular Router se emplea para la navegación dentro de la aplicación, permitiendo a los usuarios acceder a diferentes vistas como la lista de partidos, detalles del equipo y resultados de partidos.

### Mock ups y Mapa de navegaciòn

 <a href="https://docs.google.com/presentation/d/1e4L3DaeFMoLBliqJ5mjC-JxfS3-iIFnJmnQzkET2GTQ/edit?usp=drive_link">*** MOCKUP ***</a>

 - **Mapa de navegación**

![Mapa de navegación](https://github.com/Cristiangonzz/RIA/blob/main/images/navegacion.jpg)

## API Utilizada

La aplicación hace uso de la API de Football Data para obtener datos actualizados de partidos de fútbol y detalles de equipos.

#### Detalles de la API

- Nombre: Football Data API
- Descripción: La API de Football Data ofrece datos detallados sobre partidos, equipos, jugadores y competiciones de fútbol en tiempo real. Permite acceder a resultados históricos, estadísticas de equipos y alineaciones, entre otros datos relevantes.
- Documentación: [Documentación de Football Data API](https://www.football-data.org/documentation/quickstart)

#### Endpoints Utilizados

1. **Endpoint para Mostrar un Partido Específico:**

   - **Descripción**: Muestra detalles específicos de un partido mediante su identificador único.
   - **Endpoint**: `/v4/matches/{id}`
   - **Método HTTP**: GET

2. **Endpoint para Listar Partidos:**

   - **Descripción**: Lista partidos de fútbol a través de una serie de competiciones, filtrando por fechas y estado.
   - **Endpoint**: `/v4/matches`
   - **Parámetros**: `competitions={competitionIds}`, `ids={matchIds}`, `dateFrom={DATE}`, `dateTo={DATE}`, `status={STATUS}`
   - **Método HTTP**: GET

3. **Endpoint para Mostrar un Equipo Específico:**

   - **Descripción**: Muestra detalles específicos de un equipo mediante su identificador único.
   - **Endpoint**: `/v4/teams/{id}`
   - **Método HTTP**: GET

4. **Endpoint para Listar Todas las Competencias Disponibles:**

   - **Descripción**: Lista todas las competencias disponibles en el sistema.
   - **Endpoint**: /v4/competitions/
   - **Método HTTP**: GET

5. **Endpoint para Mostrar Detalles de una Competencia Específica:**

   - **Descripción**: Muestra detalles completos de una competencia específica mediante su ID.
   - **Endpoint**: /v4/competitions/{id}
   - **Método HTTP**: GET

6. **Endpoint para Listar todos los Partidos de una Competencia Específicas:**

   - **Descripción**: Lista todos los partidos para una competencia particular, identificada por su ID.
   - **Endpoint**: /v4/competitions/{id}/matches
   - **Parámetros**: `dateFrom={DATE}`, `dateTo={DATE}`, `stage={STAGE}`, `status={STATUS}`, `matchday={MATCHDAY}`, `group={GROUP}`, `season={YEAR}`
   - **Método HTTP**: GET

7. **Endpoint para Listar Todos los Equipos de una Competencia Específica:**
   - **Descripción**: Lista todos los equipos que participan en una competencia específica identificada por su ID.
   - **Endpoint**: /v4/competitions/{id}/teams
   - **Parámetros** season={YEAR}
   - **Método HTTP**: GET

## Configuración e Instalación

TODO
