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

    mostrarGeneracion(anioNac) {
        let rasgoCaracteristico = ''
        let generacion = ''

        if (anioNac >= 1994 && anioNac <= 2010) {
            rasgoCaracteristico = 'Irreverencia';
            generacion = 'Z'
        } else if (anioNac >= 1981 && anioNac <= 1993) {
            rasgoCaracteristico = 'Frustración';
            generacion = 'Y'
        } else if (anioNac >= 1969 && anioNac <= 1980) {
            rasgoCaracteristico = 'Obsesión por el éxito'
            generacion = 'X'
        } else if (anioNac >= 1949 && anioNac <= 1968) {
            rasgoCaracteristico = 'Ambición';
            generacion = 'Baby Boom'
        } else if (anioNac >= 1930 && anioNac <= 1948) {
            rasgoCaracteristico = 'Austeridad';
            generacion = 'Silent Generation (los niños de la posguerra)'
        } else {
            document.writeln("Ingresaste una opción inválida")
        }

        return document.writeln(`<p>Los nacidos en ${anioNac} tienen como rasgo característico: "${rasgoCaracteristico}" y pertenecen a la Generación: "${generacion}"</p>`)
    }

    esMayorDeEdad(edad){
        if (edad>=18){
            return document.writeln(`<p>La persona es mayor de Edad</p>`)
        }else{
            return document.writeln(`<p>La persona es menor de Edad</p>`)

        }
    }

    mostrarDatos(){
        document.writeln(`<h3>Datos de la Persona:</h3>
            <ul>
            <li>Nombre: ${this.getNombre}</li>
            <li>Edad: ${this.getEdad}</li>
            <li>DNI: ${this.getDni}</li>
            <li>Sexo: ${this.getSexo}</li>
            <li>Peso: ${this.getPeso}</li>
            <li>Altura: ${this.getAltura}</li>
            <li>Año de Nacimiento: ${this.getAnioNac}</li>
            </ul>`)
    }

    generaDNI(){
        const dniAleatorio = Math.floor(Math.random() * 100000000);
        return document.writeln(`<p>El DNI generado aleatoriamente es: ${dniAleatorio}`)
    }


}

// nuevo objeto
const persona = new Persona('Valentina Iramain', 53, '22414369', 'F', '55 kg', 1.60, 1972);
console.log(persona)

persona.mostrarGeneracion(persona.getAnioNac)
persona.esMayorDeEdad(persona.getEdad)
persona.mostrarDatos()
persona.generaDNI()


