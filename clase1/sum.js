


const sum = (numeros) =>{

    const expression = /\d+/g;

    let separador = numeros.match(/^\/\/;\n$/)
    console.log(separador)
    
    const array2 = numeros.match(expression)


    if(array2 === null) return 0;
   
    let suma = 0;

    array2.map(numero =>{
               
        suma += parseInt(numero);
          
  
    })
    
    return suma;

}

console.log(sum("//;\n23,2\n3"))

export default sum;