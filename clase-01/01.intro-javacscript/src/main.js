import './style.css'

console.log("Nivel informativo");
console.warn("Nivel de precaución");
console.error("Nivel de error");

const objeto = {
  nombre: 'Priscila',
  apellido: 'Redondo',
  edad: 24,
  isTeacher: false,
  saludar: function() {
    console.log('Hola soy', this.nombre, this.apellido);
    
  }
}

console.log(objeto);
objeto.saludar()




