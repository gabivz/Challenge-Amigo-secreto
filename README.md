# 🎲 Sorteo de Amigos  

Este es un proyecto simple en JavaScript que permite agregar amigos a una lista para despues poder seleccionar uno aleatoriamente.   

---

Características: 
. Permite agregar amigos dinámicamente a una lista.  
. Muestra la lista actualizada en la interfaz.  
. Selecciona un amigo al azar con un solo clic.  
. Usa alertas para mostrar mensajes y el resultado del sorteo.  

---

Cómo usarlo paso a paso:  
1. Abrimos el archivo `index.html` en un navegador.  
2. Escribimos un nombre en el campo de entrada y presionamos "Agregar Amigo".  
3. Repetimos el paso 2 para añadir más amigos.  
4. Hace clic en "Sortear Amigo" para seleccionar uno aleatoriamente.  
5. El resultado se va a demostrar en una alerta.  

---

Tecnologías Utilizadas
- HTML: Para la estructura de la página.  
- CSS: Se pueden agregar estilos para mejorar la apariencia.  
- JavaScript: Para la lógica de agregar amigos y hacer el sorteo.  

---

Código Principal

 `script.js`  
```javascript
let amigos = []; // Arreglo vacío para almacenar los amigos

function agregarAmigo() {
    var campoEntrada = document.getElementById("amigo"); 
    var nombreUsuario = campoEntrada.value.trim(); 

    if (nombreUsuario === "") {
        alert("Por favor, inserte un nombre.");
        return; 
    }

    amigos.push(nombreUsuario); 
    campoEntrada.value = ""; 

    mostrarAmigos(); 
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        const nuevoElemento = document.createElement("li"); 
        nuevoElemento.textContent = amigos[i]; 
        lista.appendChild(nuevoElemento); 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    alert(`El amigo sorteado es: ${amigoSorteado}`);
}
