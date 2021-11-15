
class Regular{
    constructor(){
        this.range = [50, 100];
        this.age = 1;
    }
}
class Enegry{
    constructor(color){
        this.range = [5, 40];
        this.age = 10;
        this.color = color
    }
}

class Factory{
    createBulb(bulb,color){
        let bul;
        if(bulb === "regular"){
            bul = new Regular()
        }else if(bulb === "energy"){
          bul = new Enegry(color)
        }
       return bul;   
    }
    

    
}
const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}