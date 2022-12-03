Asturias Foods & Drinks <br>
El Objetivo del Proyecto es ayudar a que las personas cumplan con la cuarentena y puedan pedir su comida, bebida preferida, su desayuno o su merienda, sin necesidad de moverse de su casa .-
¿Como iniciar el Proyecto? 🚀 <br>
En caso de que quieras hacer pruebas, Abajo vamos a detallar las instrucciones que te permitirán iniciar el proyecto en un entorno de desarrollo, totalmente funcional de forma local.
Paso 1°: en la consola de git (o cualquier otra) deberás ejecutar el comando "npm install" tanto en la ruta de la carpeta "frontend" como en la de la carpeta "backend " para así instalar las dependencias necesarias en ambos lados.
Paso 2°: Instalación del Proyecto🔧 <br>
Abre el proyecto en tu editor de código preferido y vas a identificar el archivo llamado  "env.example" , vas a tener que borrar ".example" para que quede así  ".env". Suponemos que ya conoces lo que es una variable de entorno, al sacarle la extensión example el archivo .env éste quedaría listo para que hicieras los cambios correspondientes.
Por ejemplo <br>
Donde Dice: <br>
PORT= Aquí vas poner el puerto que configuraste en tu BackEnd.
Por ej: Si configuraste el puerto 3001 la variable quedaría así<br> 
PORT= 3001
Donde Dice: <br>
DB_HOST= Aquí deberás colocar la URL de tu BackEnd. 
Por ej: localhost si estás en etapa de desarrollo o la url de tu servidor en caso de encontrarte en producción. <br>
DB_HOST= http://localhost
y asi hasta finalizar con todos los items <br>
Paso 3°: Si ya finalizaste con el archivo ".env" en ambas carpetas, entonces solo deberías iniciar el Back y el Front con los siguientes comandos.<br>
BackEnd: <br>
npm run dev
FrontEnd: <br>
npm start
Y listo. Solo falta que realices las pruebes que creas necesarias<br>
-Fin de la Explicación- <br>
Construido con 🛠️ <br>
Node JS <br>
Express <br>
Autores ✒️<br>
FrontEnd:<br>
Marco Baiad <br>
Martin Sandander <br>
BackEnd: <br>
Andres Perlo