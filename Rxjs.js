window.onload=function(){
    const {Observable,of,from,fromEvent} = rxjs;
    const {map,filter,tap}= rxjs.operators;

    const obs = Observable.create((observer) => {
        le
     
        observer.next(w)
        observer.complete()

    })
    obs 
        .pipe(
            tap(console.log)
        )
        .subscribe(console.log,null,() => console.log(`yo`))
}
