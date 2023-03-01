

// function crearPersona(nombre,apellido) {
//     return {nombre,apellido};
// }
const crearPersona=(nombre,apellido)=>( {nombre,apellido});


const persona=crearPersona("Héctor","Puga");

console.log(persona);


function imprimeArgumentos(){

    console.log(arguments);
}


const imprimeArgumentos2=(edad,...arguments)=>{

    // console.log({edad,arguments});

    return arguments;
}


const argumentos=imprimeArgumentos2(10,true,false,'Héctor','Hola');

console.log({argumentos});

const [casado,vivo,nombre,saludo]=argumentos

console.log({casado,vivo,nombre,saludo});

const {apellido: nuevoApellido}=crearPersona("Héctor","Puga");

console.log({nuevoApellido});


const tony={

    nombre:'Tony Start',
    codeName:"Iron Man",
    vivo:false,
    // edad:40,
    trajes:['Mark I','Mark V','HulkBuster'],
    
  
};


// const imprimePropiedades=(personaje)=>{
// console.log("nombre:",personaje.nombre);
// console.log("codeName:",personaje.codeName);
// console.log("vivo:",personaje.vivo);
// console.log("edad:",personaje.edad);
// console.log("trajes:",personaje.trajes);
// };


const imprimePropiedades=({nombre,codeName,vivo,edad=15,trajes})=>{

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
    
    
    };



    

imprimePropiedades(tony);
