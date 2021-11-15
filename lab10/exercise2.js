
class User{
    constructor(name){
        this.name =name

    }
    logger(){

    }
} 

class DecoratedUser{
    constructor(user,address,city){
        this.user = user;
        this.name = user.name;
        this.address = address;
        this.city=city;
    }
    logger(){
       console.log(this.name + ' ' +  this.city + " " + this.address); 
    }
}
const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();
