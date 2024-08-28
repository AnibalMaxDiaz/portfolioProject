// 1-. Ejercicio que devuelve el numero menor y mayor de un array



   let array = [2, 5 ,7, 15, -5, -100, 55];
   function mayorYmenor(arr){
      let menor = arr[0];
      let mayor = arr[0];
      for(numero of arr){
          menor = menor < numero ? menor : numero;
          mayor = mayor > numero ? mayor : numero;
      }
      return[menor, mayor];
   }
   let numeros = mayorYmenor(array);
   console.log(numeros)


// Funcion para que el boton muestre un texto

 function miFuncion(){
     const element = document.getElementById("text");
     element.innerHTML=("You are Awesome!");
 }

// Muestra un texto en el id text

 const element2 = document.getElementById("text2");
 element2.innerHTML = "Agregando texto a la etiqueta P desde el script";

// Mostrar cuantos numeros positivos hay en el array

let array2 = [2, 5 ,7, 15, -5, -100, 55];
function cuantosPositivos(arra){
    let positivos = 0;
    for (let index of arra) {
        if (index > 0) {
            positivos ++;
        }
    }
    return "Hay " + positivos + " numeros positivos"
}
resultado = cuantosPositivos(array2);
console.log (resultado);
