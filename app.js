// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//arreglo para almacenar nombres.
let nombreAmigo = [];

function agregarAmigo(){
//Capturar valor del campo
    let amigo = document.getElementById("amigo").value;

    /*Validar si el campo no está vacío
    .trim() es para eliminar espacias adelante y atras del texto*/
    if(amigo.trim() === ""){
        //si esta vacio, se muestra error.
        alert("Por favor, ingrese un nombre.");
    }else{
        //si no esta vacio, se agrega al arreglo.
        nombreAmigo.push(amigo);

        //Limpiamos el campo.
        document.getElementById("amigo").value = "";

        //actualizar la lista de amigos en HTML.
        actualizarListaAmigos();
    }
}

// Función para actualizar lista en la interfaz

function actualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    //Limpiamos la lista existente
    lista.innerHTML = "";

    //Añadimos cada amigo a la lista
    nombreAmigo.forEach(function(amigo){
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    })
}

//Función para sellecionar amigo aleatorio.

function sortearAmigo(){
    //validar que el array no este vacio.
    if(nombreAmigo.length === 0){
        alert("No hay amigos para sortear");
        }else{
            //generar un número aleatorio entre 0 y el último índice del arreglo.
            let indiceAleatorio = Math.floor(Math.random() * nombreAmigo.length);
            //seleccionar el amigo en el índice aleatorio.
            let amigoSorteado = nombreAmigo.splice(indiceAleatorio,1)[0];
            //mostrar el amigo sorteado.
            document.getElementById("resultadoSorteo").innerHTML = `El amigo secreto que te toco es ${amigoSorteado}`;
            //Actualizar la lista visible.
            actualizarListaAmigos();
    }
}
