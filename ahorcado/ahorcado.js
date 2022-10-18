
class JuegoAhorcado{
    constructor (params) {
        this.palabraAdivinar = "manteca";
        this.vidas = 3;
        this.estado = {
            letrasJugadas: [],
            letrasIncorrectas: [],
            letrasCorrectas: [],
            ultimaJugada: "",
            
        };
    }


    get vidasRestantes() {
        return this.vidas;
    }

    get palabra(){
        return this.palabraAdivinar
    }

    get estadoActual() {
        return this.estado;
    }

    inicializarEstado() {
        this.palabraAdivinar.split("").map((letra) => {
            this.estado.letrasCorrectas.push("_");
        })
    }

    
    arriegarLetra(letraIngresada) {
        let letra = letraIngresada.toLowerCase();

        if(this.vidas === 0) return;
        
        this.estado.letrasJugadas.push(letra);
        this.estado.ultimaJugada = "letra";


        if (!this.contieneLetra(letra))
        {
            this.estado.letrasIncorrectas.push(letra)
            this.vidas--;
        }

        this.remplazarLetraEnPalabraCorrecta(letra);

    }

    arriesgarPalabra(palabraIngresada){



        if(this.vidas === 0) return;
        
        
        this.estado.ultimaJugada = "palabra";


        if(!this.compararPalabra(palabraIngresada)){
            this.vidas = 0;
            return
        }



    }

    contieneLetra(letra) {
        return this.palabraAdivinar.includes(letra);
    }

    remplazarLetraEnPalabraCorrecta(letra)
    {
        // Metodo el que reemplaza los guiones de la palabra en el caso que sea correcta
        let indexs = this.compararLetra(letra);

        indexs.map( (pos) => {
            this.estado.letrasCorrectas[pos] = letra;
        })
    }
    
    compararLetra(letraIngresada){
        
        let posiciones = []
        let letraIngresadaMinuscula = letraIngresada.toLowerCase();

        let idx = this.palabraAdivinar.indexOf(letraIngresadaMinuscula);
        
        while (idx != -1) {
            posiciones.push(idx);
          idx = this.palabraAdivinar.indexOf(letraIngresadaMinuscula, idx + 1);
        }
        if (posiciones.length === 0)
        {
            posiciones.push(-1)
        }

        return posiciones;
    }

    compararPalabra(palabraIngresada){
    return this.palabraAdivinar === palabraIngresada.toLowerCase()
   }



}


export default JuegoAhorcado;


