

let a = 10;
let b = a;
a = 30;
console.log({ a, b });


let juan = { nombre: 'Juan' };

let ana = { ...juan };

ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';

    console.log("cambiNombre: ",persona);

    return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

// Arreglos

const frutas=['Manzana','Pera','Piña'];
console.time('slice');

const otraFrutas=frutas.slice();

console.timeEnd('slice');


console.time('spreed');

const otraFrutas2=[...frutas];

console.timeEnd('spreed');

otraFrutas.push('Mango');


console.table({frutas,otraFrutas});
