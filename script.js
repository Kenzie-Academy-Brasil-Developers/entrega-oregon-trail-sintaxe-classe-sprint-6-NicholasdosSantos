class Traveler {
    
    constructor (name, amountOfFood, isHelthy){
        this.name = name;
        this.amountOfFood = amountOfFood; // inicia com 1
        this.isHelthy = isHelthy; // inicia true
    }

    hunt(){
       return this.amountOfFood * 2
    }

    eat(){
        if (this.amountOfFood > 0){
           return this.amountOfFood - 1
        }else{
           return this.isHelthy = false
        }
    }
}

class Wagon {
    constructor(capacity, passengers){
        this.capacity = capacity;
        this.passengers = passengers;
    }

    getAvailableSeatCount(){
        /*Retorna o número de assentos vazios, 
        determinado pela capacidade que foi estipulada quando 
        a carroça foi criada comparado com o número de passageiros a bordo no momento.
        */

        return this.capacity - this.passengers.length
    }
    join(){
        /* 
        Adicione um viajante à carroça se tiver espaço. 
        Se a carroça já estiver cheia, não o adicione.
        */

        if(this.capacity > this.passengers.length){
            //incluir novo passageiro
        }else{
            //não incluir novo passageiro
        }

    }

    shouldQuarantine(){
        this.passengers.forEach(passenger => passenger.isHelthy === false ? true : false)

    }

    totalFood(){
        let result = []
        this.passengers.forEach(passenger => result.push(passenger.amountOfFood))

        return result.reduce((a,b) => a + b)
    }
}