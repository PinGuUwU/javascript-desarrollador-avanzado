import './style.css';


// API Productos

//  GET -> R:READ (cRud) -> /productos
//  POST -> C:CREATE (Crud) -> /productos + el nuevo producto
//  PUT -> U:UPDATE (crUd) -> /productos/id + el producto editado
//  DELETE -> D:DELETE (cruD) -> /productos/id

// const miPromesa = new Promise( () => {} )
    
// ! Promesa que siempre se cumple    
// const miPromesa = new Promise( (resolve, reject) => {
//     resolve('se cumplió')
// } )

// ! Promesa que no se cumple
// const miPromesa = new Promise( (resolve, reject) => {
//     reject('No se cumplió') //Nunca se va a cumplir
// })

const miPromesa = new Promise( (resolve, reject) => {
    const exito = false

    if ( exito ) {
        resolve('Todo salio bien -> se cumplió')
    } else {
        reject('Algo salió mal -> no se cumplió')
    }
})



console.log(miPromesa);





