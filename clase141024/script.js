//FUNCIONES 
/*function hello(){
    console.log('Hola Js'); 
    console.log('Hola html'); 
    console.log('Hola css'); 
}
hello();
hello();
hello();
hello();*/

//retorno de una funcion 
/*
function hello (){
    return "Hola Js"; 
}
const result = hello(); 
console.log(result);*/ 
//hello(); 

/*function hello(){
    return "Hola Js1"; 
}
//const result = hello(); 
console.log(hello()); */

//retorna valor del objeto 
/*
function hello (){
    return{
        nombre: 'Raul'
    }
}
console.log(hello()); */
//funcion que retorna a otra funcion
/*
function hello (){
    return function(){
        return "Hola JS"
    }
}
console.log(hello()()); */

//---USO DE PARAMETROS EN FUNCIONES---
/*

function hellpconJS(name){
    return 'Hola' + name 
}
console.log('roman'); 
console.log('Raul'); 
console.log('Reyes'); 
console.log('Roberto'); 
console.log(´Rorro);
//pasar mas de un parametro a la funcion 

function hellpconJS(x,y){
return x/y; 
}
console.log(hellpconJS(10,20)); 
console.log(hellpconJS(10,80));

//CONTROL DE ERRORES EN PARAMETROS 
function hellpconJS(x,y=0){
    return x+y; 
    }
    console.log(hellpconJS(10)); 
    */

    //OBJETOS
    const user = {
        nombre : 'Ashley',
        apellidoM : 'Velazquez', 
        edad: 17, 
        domicilio: {
            ciudad: 'edomex', 
            calle: 'si', 
            numero: 167, 
        },
    amigos:['Moreno' , 'fernando'],
    activo: true,
    sendMensaje: function (){
        return 'enviando msj'
    }  
    }
    //alert ciudad, calle, numero..
    //consola, los amigos
    //alert activo o dado de baja 
    //consola nombre, apellidos, edo civil 
    //alert (estado del mensaje)

    alert(`${user.domicilio.ciudad},${user.domicilio.calle}${user.domicilio.numero}`)
    console.log(user.amigos); 
    alert(user.activo)
    console.log(`${user.nombre}${user.apellidoM},${user.estadocivil}`); 
    alert(user.sendMensaje())

