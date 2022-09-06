let p = 0; // declaracion de p 

class Pila {

    arr = [];

    apilar(dato) {
        return this.arr.push(dato); // funcion push, añade un dato al tope 
    }

    desapilar() {
        return this.arr.pop(); // la funcion pop, elimina el ultimo valor de un dato
    }

    tope() {

        return this.arr.at(-1); // tambien se podria usar arr[i-1] pero en este caso no esta dentro de un for
    }

    vacia() {

        return this.arr.length + 1 === 0; // remplaza el if,  .lenth vemos los espacio en memoria. si cambia el espacio en memoria se agrego un dato


    }

    getMostrar() {
        console.log(this.arr, '\n');
    }

};

let Pilas = new Pila();


load = () => {
    p = (Math.floor(Math.random() * 10));
    console.log('Datos a Ingresar en la pila:', p);
    return p;
}

Pilaas = () => {
    for (let i = 0; i < p; i++) {
        Pilas.apilar((Math.floor(Math.random() * 10)));

    }
}
load();
Pilaas();

Pilas.getMostrar(); // muesta la pila 
Pilas.desapilar(); // quita el ultimo numero (el tope)
console.log(Pilas.tope()); // muesta el numeor del tope 
console.log(Pilas.vacia(), '\n'); // muesta  true si esta vacia*/
Pilas.getMostrar(); //muestra nuevamente los datos de la pila
