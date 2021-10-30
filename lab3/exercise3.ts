class Car {
    name:string;
    acceleration:number;
    constructor(name:string,) {
        this.name = name;
        this.acceleration = 0;
    }
    honk():void {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed:number) {
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk(); 
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration);
