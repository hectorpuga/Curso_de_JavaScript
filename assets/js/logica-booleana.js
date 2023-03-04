

const regresaTrue=()=>{

    console.log("Regresa true");
    return true;
};

const regresaFalse=()=>{
    console.log("Regresa false");
    return false;

};

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());


console.warn('And');


console.log(true&& true);
console.log(true && !false);

console.log("===================");
console.log(regresaFalse()&&regresaTrue());
console.log(regresaTrue()&&regresaFalse());

console.log("========&&===========");

regresaFalse()&&regresaTrue();
console.log('4 condiciones',true&&true&&true&&false);

console.log("OR");

console.log(true || false);
console.log(false || false);

console.log(regresaTrue()|| regresaFalse());

console.log('4 condiciones',true||true||true||false);


console.warn("Asignaciones");