/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
  /* let array = [ ]
   for(let prop in objeto){
      array.push([prop, objeto[prop]])
   }
   return array
}*/     let arrayDeArray = []
        let clave = Object.keys(objeto)
        let valor = Object.values(objeto)
         
        for(let i = 0; i < clave.length; i++){
         arrayDeArray.push([clave[i] , valor[i]])
        
        }  
         return arrayDeArray
}    
deObjetoAarray(objeto = {
     miguel : 35,
     vani : 34
})  
//console.log(deObjetoAarray(objeto))



function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   objeto = {}
   string = string.split("").sort()

   for(let i = 0; i < string.length; i++){
      if(string[i] !== string[i - 1]){ 
      objeto[string[i]] = 1
   } else { 
      objeto[string[i]] += 1
   }
}  
     return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayúscula = ""
   let minúscula = ""
   for(let i = 0; i < string.length; i++){
      if(string[i].toUpperCase() === string[i]){
         mayúscula += string[i]
      } else {
         minúscula += string[i]
      }

   }
   return mayúscula + minúscula
}   capToFront("soy MIGUEL")
//console.log(capToFront("soy MIGUEL"))

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let fraseSeparada = frase.split(" ")
   let palabrasSeparadas = fraseSeparada.map((palabra => palabra.split("").reverse().join("")))
   let fraseAlInverso = palabrasSeparadas.join(" ")

   return fraseAlInverso
} asAmirror("hola lito")
console.log(asAmirror("hola lito"))

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let capicua = numero.toString().split("").reverse().join("")
   if(numero == capicua){
      return "Es capicua"
   } else {
      return "No es capicua"
}
} capicua(353)
console.log(capicua(353))

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
  return string.replace(/[abc]/g, "")
} 


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
    return arrayOfStrings.sort((a, b) => a.length - b.length)
   

}sortArray( ["You", "are", "beautiful", "looking"])
console.log(sortArray( ["You", "are", "beautiful", "looking"]))

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arrayEnComun = [ ]
   for(let i = 0; i < array1.length; i++ ){
      if(array2.includes(array1[i])){
         arrayEnComun.push(array1[i]) 
        
   }   
}       return arrayEnComun 
 }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
