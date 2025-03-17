// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Arrancamos hoy 16 de marzo, si. un poco tarde
//esta tarea me ha llevado toda la tarde del domingo

let listaAmigos=[];
let numeroMaximo= 0;

function agregarAmigo() {
    // Obtener el valor del input amigo
    let nombreIngresado = document.getElementById("amigo").value;
   
   
    if (nombreIngresado.trim() !== "") {
        alert("Nombre no valido");
         } else {
         // Agregar a la lista (array)
    listaAmigos.push(nombreIngresado);
        }
    // Mostrar en la lista HTML
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML += "<li>" + nombreIngresado + "</li>";
    
    // Limpiar la caja (el input)
    document.getElementById("amigo").value = "";

    numeroMaximo++

    console.log(listaAmigos);
   
    console.log (numeroMaximo);

    if (numeroMaximo ==5) {
        alert("Máximo 5 Amigos, pulse Sortear Amigo");
    } else {
        return;
    }  
   
}