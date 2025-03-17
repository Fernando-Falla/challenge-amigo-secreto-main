// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Arrancamos hoy 16 de marzo, si. un poco tarde


let listadoAmigos=[];
let numeroMaximo= 0;
let estocast = 0;

function agregarAmigo() {
    // Obtener el valor del input amigo
    let nombreIngresado = document.getElementById("amigo").value;
   
   
    if (nombreIngresado.trim().length === 0) {
        alert("Nombre no valido");
       // numeroMaximo--
      
        //Verificar que el nombre no se repeta

    } else if(listadoAmigos.includes(nombreIngresado.trim())){
          alert("El Nombre ya esta en la lista"); 
        }
         // Agregar a la lista (array)
        else {
       
        listadoAmigos.push(nombreIngresado.trim());
      }
    
    actualizarLista() 
 
    // Limpiar la caja (el input)
    document.getElementById("amigo").value = "";

    // Opcion a implementar
    // numeroMaximo++

    console.log(listadoAmigos);
   
    console.log (numeroMaximo);

    // if (numeroMaximo >5) {
      //  alert("Máximo 5 Amigos, pulse Sortear Amigo");
   // } else {
      //  return;
}  
   


function actualizarLista() {        
    // Seleccionamos el elemento ul del HTML
    const lista = document.getElementById("listaAmigos");
    
    // Limpiamos el contenido previo
    lista.innerHTML = "";
        
    // Bucle for tradicional para recorrer listadoAmigos
    for (let i = 0; i < listadoAmigos.length; i++) {
       // lista.innerHTML += `<li>${listadoAmigos[i]}</li>`;
       lista.innerHTML += "<li>" + listadoAmigos[i] + "</li>";
      
    }
}


function sortearAmigo() {

    if(listadoAmigos.length === 0){
        alert('No hay amigos para el sorteo')
        resultado.innerHTML = "";
        return
    }else{
        // Generar un numero aleatorio
    let estocast = parseInt(Math.floor(Math.random() * listadoAmigos.length));
    let amigoSecreto = listadoAmigos[estocast];

    // Mostrar el amigo sorteado
    let resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo seleccionado es: ${amigoSecreto}`;

    // Eliminar el amigo de la lista
       listadoAmigos.splice(estocast, 1);
        console.log(listadoAmigos);
    // Actualizar la lista en pantalla
       actualizarLista();
    }

}