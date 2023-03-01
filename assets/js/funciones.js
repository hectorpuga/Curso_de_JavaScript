function saludar(nombre){
// console.log(arguments);
    // console.log("Hola "+nombre);

    return [1,2,3,4];

    console.log("Soy un codigo que esta despues del return");
}

const saludar2=function(nombre){
    console.log("Hola "+nombre);
};

const saludarFlecha=()=>{
    console.log('Hola flecha');

};

const saludarFlecha2=nombre=>{
    console.log('Hola '+nombre);
};

const retornoDeSaludar=saludar("Hector",40,true,'Costa Rica');

// console.log(retornoDeSaludar[0],retornoDeSaludar[1]);
// saludar2("Hector");

// saludarFlecha();
// saludarFlecha2('Melissa');



function sumar(a,b){

    return a+b;
}

// const sumar2=(a,b)=>{
//     return a+b;
// };


const sumar2=(a,b)=>a+b;

// function getAleatorio(){
//     return Math.random();
// };

const getAleatorio=()=> Math.random();

console.log(getAleatorio());

