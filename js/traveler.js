class Traveler {
    
    constructor (name){
        this._name = name; //Uma string
        this._amountOfFood = 1; // inicia com 1
        this._isHelthy = true; // inicia true
    }
    
    get name(){
        return this._name;
    }

    get amountOfFood(){
        return this._amountOfFood;
    }

    get isHelthy(){
        return this._isHelthy;
    }

    set name(name){
        this._name = name;
    }

    set amountOfFood(amountOfFood){
        this._amountOfFood = amountOfFood;
    }

    set isHelthy(isHelthy){
        this._isHelthy = isHelthy;
    }

    hunt(){
       return this._amountOfFood += 2
    }

    eat(){
        if (this._amountOfFood > 0){
           return this._amountOfFood -= 1
        }else{
           return this._isHelthy = false
        }
    }
}    