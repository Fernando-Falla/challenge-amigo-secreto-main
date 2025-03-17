// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Arrancamos hoy 16 de marzo, si. un poco tarde
//esta tarea me ha llevado toda la tarde del domingo

let listadoAmigos=[];
let numeroMaximo= 0;

function agregarAmigo() {
    // Obtener el valor del input amigo
    let nombreIngresado = document.getElementById("amigo").value;
   
   
    if (nombreIngresado.trim().length === 0) {
        alert("Nombre no valido");
        numeroMaximo--
       } else {
     
    
        // Agregar a la lista (array)
    listadoAmigos.push(nombreIngresado.trim());
      }
    
              
        // Seleccionamos el elemento ul del HTML
        const lista = document.getElementById("listaAmigos");
        
        // Limpiamos el contenido previo
        lista.innerHTML = "";
        
        // Bucle for tradicional para recorrer listadoAmigos
        for (let i = 0; i < listadoAmigos.length; i++) {
           // lista.innerHTML += `<li>${listadoAmigos[i]}</li>`;
           lista.innerHTML += "<li>" + listadoAmigos[i] + "</li>";
          
        }
    

    // Limpiar la caja (el input)
    document.getElementById("amigo").value = "";

    //Opcion a implementar
    numeroMaximo++

    console.log(listadoAmigos);
   
    console.log (numeroMaximo);

    if (numeroMaximo ==5) {
        alert("Máximo 5 Amigos, pulse Sortear Amigo");
    } else {
        return;
    }  
   
}

