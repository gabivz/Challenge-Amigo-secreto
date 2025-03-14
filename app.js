// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
    Explicamos codigo de la funcion 1 paso a paso: 
    
    1. En la primera linea de codigo agregamos un array vacio 
    
    2. Creamos una funcion para agregar nombres de amigos a nuestra pagina. Dentro de nuestra funcion creamos una variable de tipo var, que lo que hace es capturar 
    el valor de lo que le ingresemos sin importar su tipo de dato y amoldar esa variable, en este caso a un string. traemos el campo input del html a nuestro codigo js
    haciendo que en la variable "campoEntrada" se encuentre la conexion "document.getElementById" (esto hace que se vincule la etiqueta html que nosotros queramos
    a nuestro js para poder manipularla libremente), para llamar especificamente al input que queremos traer en nuestro js insertamos el id que tiene (osea "amigo").

    paso 2. creamos otra variable "nombreUsuario" y dentro de esta va a estar los nombres que escribamos en nuestro campo input, le agregamos el metodo .trim.

    paso 3. Creamos una condicional if que lo que va a hacer es que si no se ingreso un valor en la variable "nombreUsuario" la pagina va a saltar un cartel diciendo: 
    "Por favor, inserte un nombre". El metodo .trim verifica si hay espacios al principio o al final del texto (tabulaciones) y las elimina pora hacer la entrada
    de la informacion mas clara, limpia y posteriormente se retorna el valor con return.

    paso 4. llamamos a la lista amigos y con el metodo .push empujamos el valor ingresado en la variable "nombreUsuario" al array.

    5. una vez escrito el nombre e ingresarlo se borra el texto del campo input

    6. llamamos a la funcion para actualizar la lista.


    */

  let amigos = []; // Arreglo vacío para almacenar los amigos

function agregarAmigo() {
    var campoEntrada = document.getElementById("amigo"); // Obtener el input correctamente
    var nombreUsuario = campoEntrada.value.trim(); // Obtener el valor y sacar espacios innecesarios

    if (nombreUsuario === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si el campo está vacío
    }

    amigos.push(nombreUsuario); // Agregar el nombre al array
    campoEntrada.value = ""; // Limpiar el campo de entrada

    mostrarAmigos(); // Llamar a la función para actualizar la lista en la interfaz
}

/* 

    Explicamos la funcion 2 paso a paso: 

    1. Creamos una funcion que va a hacer ejecutada al presionar el boton añadir (osea creamos un evento). Hacemos esto llamando a la etiqueta button escribiendo 
    el evento onclick que es "mostrarAmigos".

    2. Creamos una variable constante que se llame "lista" y dentro de esta ingresamos el vinculo a una de las etiquetas html que va a hacer el primer <ul>,
    (osea la lista que va a mostrar los nombres de nuestros amigos ingresados en el input) para hacer esto simplemente agregamos el id del <ul>.

    2.  llamamos a la variable lista e ingresamos el metodo innetHTML para ingresarle "" que va a hacer que se borre el valor ingresado para que se muestre limpiamente
    los nuevos elementos.

    3. creamos un bucle for, dentro de el creamos la variable i que se va a iniciar con el valor 0, escribimos que si amigos es menor a 1 se va a sumar de 1 en 1 
    ( i < amigos.length; i++)

    4. creamos la constante "nuevoElemento" y dentro de esta creamos un vinculo al html que tambien va a crear un elemento nuevo en la lista <ul> que va a aparecer 
    como un <li> (esto va a hacer que por cada vez que se ingrese un amigo nuevo se cree un nuevo elemento <li> en nuestra lista <ul>: 
    <ul>
    <li></li>
    </ul>)

    5. llamamos a la variable "nuevoElemento" la cual le vamos a dar el metodo de .textContent que establece ese nombre como el texto del nuevo <li> creado. Dentro de 
    la variable vamos a ignresar el nombre del amigo en la posicion i (osea como empieza en la posicion 0 porque i vale 0 lo que va a pasar es que el nombre
    agregado va a estar en la posicion 0 y asi va incrementando las posiciones mientras mas nombres se vayan agregando).

    6. Finalmente llamamos a la variable "lista" y le ingresamos el metodo .appendChil e ingresamos dentro de este la variable "nuevoElemento"

*/

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos"); // Obtener la lista del HTML

    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        const nuevoElemento = document.createElement("li"); // Crear un nuevo <li>
        nuevoElemento.textContent = amigos[i]; // Asignarle el nombre del amigo
        lista.appendChild(nuevoElemento); // Agregarlo a la lista
    }
}


function sortearAmigo() {
    // Validar si hay amigos en la lista
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos para sortear.";
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en el elemento HTML con id 'resultado'
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}
