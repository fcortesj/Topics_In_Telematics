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

### Correr Test

Al tener PostMan instalado y la aplicacion corriendo, se importara el archivo en el directorio test.
Luego se pueden correr los dos request en la coleccion y revisar el resultado de las pruebas.
