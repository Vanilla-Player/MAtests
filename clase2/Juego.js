class Juego {
    constructor (params) {
        this.tiradas = [];
    }

    tirar(pinos) {
        this.tiradas.push(pinos);
    }

    get score() {
        let score = 0;
        let indexTirada = 0;

        for (let turno = 0; turno < 10; turno++)
        {
            let scoreTirada = this.tiradas[indexTirada] + this.tiradas[indexTirada+1]
            
            score += scoreTirada;
            if (scoreTirada === 10 && this.tiradas[indexTirada]!== 10)
            {
                score += this.tiradas[indexTirada+2]; 
            } 

            if(scoreTirada === 10 && this.tiradas[indexTirada] === 10){
                score += this.tiradas[indexTirada+2] + this.tiradas[indexTirada+3];
            }

            indexTirada+=2;
        }
        return score;
    }

    tirarVarios(tiradas, pinos) {
        for (let i = 0; i < tiradas; i++)
        {
            this.tirar(pinos);
        }
    }
    
    
    
}

export default Juego;



// const tiradas = [5,1,5,5,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// let bonus = 0
// let scoreTIRADA = 0
// let scoreTOTAL = 0


// tiradas.map((tirada, index) =>{         
//     scoreTIRADA += tirada
//     if(index) 

// })

//     // 1 4 4 6
//     //  5   19
//     // 5 5 1 0 -> 12

// for(let i = 0; i<turnos; i++){
//     tiradas.push(0);
// }