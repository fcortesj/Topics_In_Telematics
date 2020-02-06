# Proyecto 1

Proyecto basado en deteccion del clima usando sensores externos.
La aplicacion consta con un Front y Back. Adicionalmente, contiene unas pruebas realizadas en Postman.

## Iniciando

Primero clonemos el repositorio
```bash
https://github.com/fcortesj/Topics_In_Telematics.git
```

### Prerequisitos

Al momento de usar la aplicacion son necesarias ciertas cosas.

- Python3 (Recomendado la ultima version)
- pip (Packet Manager de Python3)
- Node (Especificamente npm y Angular Cli)
- PostMan

### Instacion

Back-End: Para instalar lo necesario en el back-end desde el directorio raiz, primero corremos:
```bash
cd server
```
Una vez en el directorio del back-end realizamos los siguientes comandos:
```bash
pip install Flask Flask-PyMongo flask-restful pymongo flask-cors
```
Regresamos al directorio base y ahora vamos a instalar lo necesario para el front-end, por lo que nos movemos al directorio:
```bash
cd app
```
En el directorio ya que poseemos npm y angular CLI ejecutamos, para instalar todas las dependecias:
```bash
npm install
```

## Uso

- Corriendo el Back-End desde directorio raiz:
```bash
cd server
py server.py (o tambien) python3 server.py
```
En este caso el back-end se ejecutara en la direccion http://localhost:5000/

- Corriendo el Front-End desde directorio raiz:
```bash
cd app
ng serve
(para abrir automaticamente)
ng serve -o
```
En este caso el front-end se ejecutara en la direccion http://localhost:4200/

#### Una vez dentro de la aplicacion ingresar al boton menu arriba a la izquiera, apra observar las opciones como Log In o Main Menu

### Correr Test

Al tener PostMan instalado y la aplicacion corriendo, se importara el archivo en el directorio test.
Luego se pueden correr los dos request en la coleccion y revisar el resultado de las pruebas.

### Preguntas Taller

¿CUAL ES LA PROBLEMÁTICA QUE QUIERE RESOLVER?
Se desea desarrollar una aplicación IoT web de registro de datos sobre unos sensores utilizando un framework web moderno, orientado a una distribución de visualización y procesamiento.

¿CUALES SON LOS REQUISITOS FUNCIONALES DE LA APP?
Registro periódico de datos de usuario, temperatura, humedad y GPS desde un dispositivo Arduino.
Los datos deben ser almacenados en vía API REST en una base de datos.
Los datos almacenados en la base de datos, serán procesados y visualizados mediante una aplicación Web conectada al Backend Mediante API Rest.
Debe poseer integración con Git

¿CUALES SON LOS REQUISITOS NO FUNCIONALES DE LA APP?
Autenticación de usuarios  utilizando API Google para el ingreso del mismo
Utilización de autenticación vía API Key
El sistema podrá procesar request de post y get en menos de 5 segundos, ya que serán medidos con pruebas de PostMan
La aplicación debe poseer un diseño ‘Responsive’
La aplicación será desarrollada para cualquier  plataforma (Windows, Linux y Macintosh.)
Se utilizará una base de datos no relacional

¿QUÉ TECNOLOGÍA DE DESARROLLO UTILIZÓ?

EN EL BACKEND?
Python3, Flask RestFUL, PyMongo, Flask PyMongo

EN EL FRONTEND?
Node -> Angular

¿CUALES SON Y CUAL ES LA ESPECIFICACIÓN DE LOS SERVICIOS API REST DEL BACKEND?
La Api REST de la aplicación debe contener dos servicios, un POST el cual es el servicio que se utilizará para ingresar (crear) un nuevo registro del sensor. Su estructura es para ingresar los datos correspondientes a la base de datos. Por otro lado, el segundo servicio es un GET el cual es el servicio de consulta (y lectura), que devolverá todos los registros contenidos en la base de datos no relacional.

¿CÓMO REALIZÓ LA AUTENTICACIÓN DE LOS SERVICIOS API REST?
Para la autenticación de usuario en el front se utilizó la API de Google para registrarse con una cuenta Gmail, esto se logró con la implementación de una dependencia en angular llamada angularx-social-login.
Para la autenticación de los servicios en la API Rest se utilizó una api Key pública, la cual genera 32 caracteres alfanuméricos que registran al sensor al momento de ingresar sus datos a la base de datos. Esto se logra con la implementación de las librerias de Python3 random y string.

¿CUALES SON LAS PRINCIPALES DIFICULTADES QUE TUVO AL DESARROLLAR EL PROYECTO?

POR DESCONOCIMIENTO DE LA TECNOLOGÍA?
El desconocimiento de la tecnología siempre es una de las mayores dificultades al momento de desarrollar, en este caso el desconocimiento  de una api de google en el front end y en la utilización de pymongo fueron los principales impedimentos en este proyecto. Por un lado era la primera vez que integraba este servicio, por lo que se indago de las dependencias necesarias para su uso. Por otro lado, se estudió las bases de datos no relacionales, específicamente utilizando mongo. Una vez identificada, se estudió sobre las dependencias para integrarlas a Python3 por lo que se llegó a pymongo. 

¿QUÉ CONCEPTOS O FUNDAMENTOS NO SABE PARA PODER DESARROLLAR ESTE PROYECTO?
No se conocía el concepto de API REST y por otro lado la autenticación de servicios. Esto se estudió por medio de cursos y tutoriales, los cuales anunciaban el concepto y su uso en el proyecto.

¿QUÉ HABILIDADES DE DESARROLLO LE FALTAN PARA PODER TERMINAR EL PROYECTO?
Falta un poco más de creatividad al momento de elegir las tecnologías, ya que se usan las tecnologías con las que se posee más experiencia como Angular y Python. Sin embargo, la búsqueda de nuevas herramientas conlleva a nuevo conocimiento.

¿QUÉ OTRAS COSAS LE FALTÓ PARA PODER DESARROLLAR EL PROYECTO 1?
Conocimientos en servicios de autenticación, ya que era primera vez que los integraba en una aplicación.

¿CUALES FUERON LOS PRINCIPALES APRENDIZAJES DEL PROYECTO 1?
En este caso dejando aparte los conocimientos anteriores, se aprendió a desarrollar una aplicación con persistencia no relacional, usando mongo. Por otro lado, se aprendió sobre los servicios de autenticación, como el api key y api de registro (Google Api). Finalmente, estos conocimientos llevaron a cabo la elaboración de una aplicación con registro por medio de apis y con persistencia de datos relacionados a un api key capturados en el back-end.
