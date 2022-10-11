
class JuegoAhorcado{
    constructor (params) {
        this.palabraAdivinar = "manteca";
        this.vidas = 3;
        this.historial = [];
    }


    get vidasRestantes() {
        return this.vidas;
    }

    get palabra(){
        return this.palabraAdivinar
    }

    get estadoActual() {
        return null;
    }

    
    arriegarLetra(letraIngresada) {
        return this.palabraAdivinar.includes(letraIngresada.toLowerCase())
    }

    arriesgarPalabra(palabraIngresada){
        return this.palabraAdivinar === palabraIngresada.toLowerCase()
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

   



}


export default JuegoAhorcado;


