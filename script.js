class Vehicle {
    constructor(make, model, year){
        this.a = make
        this.b = model
        this.c = year
    }
    honk(){
        return "Beep"
    }
    toString(){
        return 'This vehicle is a ${this.a} ${this.b} from ${this.c}.'
    }
}

class Car extends Vehicle{
    contructor(make, model, year){
        super(make, model, year)
        numWheels = 4
    }
}

class Motorcycle extends Vehicle{
    contructor(make, model, year){
        super(make, model, year)
        numWheels = 2
    }
    revEngine(){
        return "VROOM!!!"
    }
}

class Garage {
    contructor(capacity){
        vehicles = []
        this.capacity = capacity
    }

    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!"
        }

        if(this.vehicles.length > this.capacity){
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle)
        return "Vehicle added!"

    }


}