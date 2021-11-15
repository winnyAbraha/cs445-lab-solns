
class Subject{
    observer = {}
    on(event,func){
        if(!this.observer[event]){
            this.observer[event]=[]
        }
        return this.observer[event].push(func)
    }
    emit(event,msg){
    this.observer[event].forEach(ele => ele(msg) );
    }
}
const sub = new Subject(); 
sub.on('eat', console.log); 
function foo(msg) {
    console.log('foo: ' + msg);
} 
sub.on('eat', foo); 
sub.on('study', foo);
 sub.emit('eat', 'Corn');


