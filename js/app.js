class Persona {
    // Defino cada propiedad privada
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNac;
    constructor(nombrep, edadp, dnip, sexop, pesop, alturap, anioNacp) {
        this.#nombre = nombrep;
        this.#edad = edadp;
        this.#dni = dnip;
        this.#sexo = sexop;
        this.#peso = pesop;
        this.#altura = alturap;
        this.#anioNac = anioNacp;
    }

    // propiedades computadas: se usan cuando tengo propiedades privadas
    //get = leer un valor
    get getNombre() {
        return this.#nombre
    }
    get getEdad() {
        return this.#edad
    }
    get getDni() {
        return this.#dni
    }
    get getSexo() {
        return this.#sexo
    }
    get getPeso() {
        return this.#peso
    }
    get getAltura() {
        return this.#altura
    }
    get getAnioNac() {
        return this.#anioNac
    }

    //set = modificar valor. siempre tiene parametros
    set setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    set setEdad(nuevaEdad) {
        this.#edad = nuevaEdad
    }
    set setDni(nuevoDni) {
        this.#dni = nuevoDni
    }
    set setSexo(nuevoSexo) {
        this.#sexo = nuevoSexo
    }
    set setPeso(nuevoPeso) {
        this.#peso = nuevoPeso
    }
    set setAltura(nuevaAltura) {
        this.#altura = nuevaAltura
    }
    set setAnioNac(nuevoAnioNac) {
        this.#anioNac = nuevoAnioNac
    }

    //metodos
    mostrarGeneracion() {
        const anio = nuevaPersona.getAnioNac
        rasgoCaracteristico = '';
        generacion = '';
        let textoAlertGeneracion = document.getElementById('alertGeneracion')

        if (anio >= 1994 && anio <= 2010) {

            rasgoCaracteristico = 'Irreverencia';
            generacion = 'Z'
        } else if (anio >= 1981 && anio <= 1993) {
            rasgoCaracteristico = 'Frustración';
            generacion = 'Y'
        } else if (anio >= 1969 && anio <= 1980) {
            rasgoCaracteristico = 'Obsesión por el éxito'
            generacion = 'X'
        } else if (anio >= 1949 && anio <= 1968) {
            rasgoCaracteristico = 'Ambición';
            generacion = 'Baby Boom'
        } else if (anio >= 1930 && anio <= 1948) {
            rasgoCaracteristico = 'Austeridad';
            generacion = 'Silent Generation (los niños de la posguerra)'
        } else {
            rasgoCaracteristico = 'Desconocido';
            generacion = 'Desconocida'
        }

        textoAlertGeneracion.classList.remove('d-none')
        textoAlertGeneracion.textContent = `Rasgo Característico: ${rasgoCaracteristico} - Generación: ${generacion}`
        return
    }


    esMayorDeEdad() {
        let textoAlertMayor = document.getElementById('alertMayordeEdad')
        textoAlertMayor.classList.remove('d-none')

        if (this.getEdad >= 18) {
            textoAlertMayor.textContent = `La Persona es mayor de Edad`
        } else {
            textoAlertMayor.textContent = `La Persona es mayor de Edad`
        }
        return
    }

    mostrarDatos() {
        console.log('muestra datos')
        let textoMostrar = document.getElementById('alertMostrarDatos')
        textoMostrar.classList.remove('d-none')
        textoMostrar.textContent = `Nombre: ${this.getNombre} - Edad: ${this.getEdad} - DNI: ${this.getDni} - Sexo: ${this.getSexo} - Peso: ${this.getPeso} kg - Altura: ${this.getAltura} cm - Año de Nacimiento: ${this.getAnioNac}`
    }
}

// funciones
function crearPersona(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value
    const edad = document.getElementById('edad').value
    const dni = document.getElementById('dni').value
    const sexo = document.getElementById('sexo').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const anioNac = document.getElementById('anioNac').value


    nuevaPersona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNac)
    console.log(nuevaPersona)
}



//--------------------------------------------------------------------------

// nueva persona: toma datos del formulario para crearPersona
const persona = document.getElementById('formPersona')

let rasgoCaracteristico = ''
let generacion = ''

let nuevaPersona = null
// boton enviar del formulario
persona.addEventListener('submit', crearPersona)
console.log(nuevaPersona)


// eventos de botones
document.getElementById('btnMostrarGeneracion').addEventListener('click', () => {
    if (nuevaPersona) {
        nuevaPersona.mostrarGeneracion()
    }
});

document.getElementById('btnEsMayorDeEdad').addEventListener('click', () => {
    if (nuevaPersona) {
        nuevaPersona.esMayorDeEdad()
    };
});

document.getElementById('btnMostrarDatos').addEventListener('click', () => {
    if (nuevaPersona) {
        nuevaPersona.mostrarDatos();
    }
});