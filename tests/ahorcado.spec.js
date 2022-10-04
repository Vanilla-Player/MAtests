import JuegoAhorcado from "../ahorcado/ahorcado.js";


 describe("Tests del ahorcado", ()=>{

    let juego;

    beforeEach(() => {
        juego = new JuegoAhorcado();
      });

    test("Validar que se cree una palabra", ()=>{
        
        let palabraAdivinar = juego.palabra;

        expect(palabraAdivinar).toBeDefined()
    })

    test("Ingresar palabra correcta",()=>{

        const intentoPalabra = "Manteca";
        const valido = juego.compararIntento(intentoPalabra);


        expect(valido).toBeTruthy();
        
    })

    test("Ingresar palabra incorrecta",()=>{

        const intentoPalabra = "keso";
        const valido = juego.compararIntento(intentoPalabra);

        expect(valido).toBeFalsy();
        
    })

    test("Ingresar letra contenida en la palabra",()=>{

        const intentoLetra = "M";
        const contenida = juego.compararLetra(intentoLetra);
        expect(contenida).not.toBe(-1);
    })
    
    test("Ingresar letra no contenida en la palabra",()=>{
        
        const intentoLetra = "k";
        const contenida = juego.compararLetra(intentoLetra)[0];
        expect(contenida).toBe(-1);
    })
  
    test("Devolver posicion de una letra contenida en la palabra",()=>{

        const intentoLetra = "n"
        const posicion = juego.compararLetra(intentoLetra)[0];

        expect(posicion).toBe(2);
    })

    test("Devolver posiciones de una letra contenida multiples veces en la palabra", ()=>{

        const intentoLetra = "a"
        const posiciones = juego.compararLetra(intentoLetra)
        
        expect(posiciones).toEqual([1,6])
    })

    test("Diferenciar la letra ingresada si es mayuscula o minuscula", ()=>{

        const intentoLetra = "A"
        const posiciones = juego.compararLetra(intentoLetra)
        
        expect(posiciones).toEqual([1,6])
    })

 })
