class Wagon {
    constructor(capacity){
        this.capacity = capacity; //um inteiro
        this.passengers = []; // um array
    }

    getAvailableSeatCount(){
        /*Retorna o número de assentos vazios, 
        determinado pela capacidade que foi estipulada quando 
        a carroça foi criada comparado com o número de passageiros a bordo no momento.
        */

        return this.capacity - this.passengers.length
    }
    join(name){
        /* 
        Adicione um viajante à carroça se tiver espaço. 
        Se a carroça já estiver cheia, não o adicione.
        */

        if(this.capacity > this.passengers.length){
            //incluir novo passageiro
            this.passengers.push(name)
        }

    }

    shouldQuarantine(){
       for(let i = 0; i < this.passengers.length; i++){
           console.log(this.passengers)
           if(this.passengers[i].isHelthy === false){
               return true
           }

       }

       return false
    }

    totalFood(){
        let result = []
        this.passengers.forEach(passenger => result.push(passenger.amountOfFood))

        return result.reduce((a,b) => a + b)
    }
}