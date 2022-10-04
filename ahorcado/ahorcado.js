
class JuegoAhorcado{
    constructor (params) {
        this.palabraAdivinar = "Manteca";
    }


    get palabra(){
        return this.palabraAdivinar
    }

    compararIntento(palabraIngresada){
        return this.palabraAdivinar === palabraIngresada
    }

    compararLetra(letraIngresada){
        
        let posiciones = []

        let idx = this.palabraAdivinar.indexOf(letraIngresada);
        
        while (idx != -1) {
            posiciones.push(idx);
          idx = this.palabraAdivinar.indexOf(letraIngresada, idx + 1);
        }
        if (posiciones.length === 0)
        {
            posiciones.push(-1)
        }

        return posiciones;
    }

}


export default JuegoAhorcado;
