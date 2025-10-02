import './style.css';


// ! Callbacks
// 

console.warn('// ! Callbacks');
// Una función que se pasa como argumento a otra función

const texto1 = () => {
    console.log("Soy el texto 1")
}

console.log(texto1); //  REFERENCIA FUNCIÓN -> Mostrando la referencia de la función.
texto1() // Ejecutando, invocando, llamando a la función

const prueba = (callback) => {
    console.log(callback) // la referencia de la función texto1
    console.log('Otra cosa')
    console.log('------')
    console.log('------')
    console.log('Otra cosa más')
    callback()
}

//prueba(texto1)

function v1() {
    const btnUno = document.querySelector('#btn-1')
    const btnDos = document.querySelector('#btn-2')
    const btnTres = document.querySelector('#btn-3')
    const btnCuatro = document.querySelector('#btn-4')

    console.log(btnUno)
    console.log(btnDos)
    console.log(btnTres)
    console.log(btnCuatro)

    btnUno.addEventListener('click', () => {
        btnUno.style.backgroundColor = 'crimson'
    })
    btnDos.addEventListener('click', () => {
        btnDos.style.backgroundColor = 'gray'
    })
    btnTres.addEventListener('click', () => {
        btnTres.style.backgroundColor = 'lightgreen'
    })
    btnCuatro.addEventListener('click', () => {
        btnCuatro.style.backgroundColor = '#5f85eb'
    })
}

// v1()

function v2() {
    const btnUno = document.querySelector('#btn-1')
    const btnDos = document.querySelector('#btn-2')
    const btnTres = document.querySelector('#btn-3')
    const btnCuatro = document.querySelector('#btn-4')

    console.log(btnUno)
    console.log(btnDos)
    console.log(btnTres)
    console.log(btnCuatro)

    btnUno.addEventListener('click', () => {
        btnUno.style.backgroundColor = 'crimson'
    })
    btnDos.addEventListener('click', () => {
        btnDos.style.backgroundColor = 'gray'
    })
    btnTres.addEventListener('click', () => {
        btnTres.style.backgroundColor = 'lightgreen'
    })
    btnCuatro.addEventListener('click', () => {
        btnCuatro.style.backgroundColor = '#5f85eb'
    })
}

// v2()


function v3() {
    const botones = document.querySelectorAll('div button')


    const arrayColores = ['crimson', 'rebeccapurple', 'darkblue', 'darkorange']

    botones.forEach( (boton, i) => {
        boton.addEventListener( 'click', () => {
            boton.style.backgroundColor = arrayColores[i]
        })
    });
}

// v3()

function v4() {
    const contenedor = document.querySelector('div')

    contenedor.addEventListener( 'click', function(evento) {

        if ( evento.target.localName !== 'div' ) {
            evento.target.style.backgroundColor = evento.target.dataset.color
        }
    })
}

v4()