class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    let generacion = "";
    if (this.anioNacimiento >= 1939 && this.anioNacimiento <= 1948) {
      generacion = "Silent Generation. Esta es una generacion ubicada en un contexto de conflictos belicos. Su rasgo mas caracteristico es que se han acostumbrado a la austeridad y son personas muy trabajadoras, pues han tenido una vida complicada y han sido educadas en la cultura del esfuerzo y del sacrificio.";
      
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      generacion = "Baby Boomers. Esta es una generacion ubicada en un contexto de paz y explosion demografica. Su rasgo mas caracteristico es el sentido de ambicion. Son una generación acostumbrada a la independencia económica y a la toma de decisiones, pero siempre apegados a los valores.";
      
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      generacion = "Generacion X. Esta es una generacion ubicada en el contexto de la crisis del 73 y son los que vieron el nacimiento de la Internet y demás avances tecnologicos. Su rasgo mas caracteristico es su obsesion por el exito.";

    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      generacion = "Generacion Y. Tambien conocidos como Millenials, esta es una generacion ubicada en el contexto del auge de la digitalizacion. Su rasgo mas caracteristico es ser muy adaptados a la tecnologia. Sin embargo, tambien los caracteriza una cierta frustracion ya que el mundo, con motivo de la crisis económica, les exige una mayor preparación para optar a un puesto de trabajo, donde cada vez la competencia se hace mayor.";
      
    } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      generacion = "<b>Generacion Z</b>. Tambien conocidos como Centenials, esta es una generacion ubicada en el contexto de la expansion masiva de la Internet. Su rasgo mas caracteristico es que son autenticos nativos digitales, ya que usan la Internet desde niños. También se les considera más conscientes y comprometidos con temas sociales y medioambientales. Sin embargo, tambien se caracterizan por su irreverencia.";
    
    } else {
      generacion = "No es posible encontrar la generacion.";
    }
    return generacion
  }

  
    esMayorDeEdad() {
      return this.edad >= 18
    }
  
  }

  function crearPersona(){
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let dni = document.getElementById("dni").value
    let sexo = document.getElementById("sexo").value
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    // Aqui calculamos el año de nacimiento estableciendo la edad
    let fechaAhora = new Date()
    let anioAhora = fechaAhora.getFullYear()
    let anioNacimiento = anioAhora - edad

    let persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento)
    // Aqui se muestra el mensaje de que la persona ha sido creada
    let mensajePersona = `Se ha creado a la persona ${persona.nombre} exitosamente. Año de nacimiento: ${persona.anioNacimiento}`
    alert(mensajePersona)
  }

  function mostrarGeneracion(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    let sexo = document.getElementById("sexo").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

   // Aqui tambien calculamos el año de nacimiento estableciendo la edad
    let fechaAhora = new Date();
    let anioAhora = fechaAhora.getFullYear();
    let anioNacimiento = anioAhora - edad;

    let persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);

    let generacion = persona.mostrarGeneracion();

   // Aqui mostramos la generación correspondiente
    let mensajeGeneracion = `La persona ${persona.nombre} pertenece a la generación ${generacion}.`;
     alert(mensajeGeneracion);
     }

    function esMayorDeEdad() {
     let nombre = document.getElementById("nombre").value;
     let edad = document.getElementById("edad").value;
     let dni = document.getElementById("dni").value;
     let sexo = document.getElementById("sexo").value;
     let peso = document.getElementById("peso").value;
     let altura = document.getElementById("altura").value;

     let persona = new Persona(nombre, edad, dni, sexo, peso, altura);

     let esMayorDeEdad = persona.esMayorDeEdad();

   // Aqui determinamos si la persona es mayor de edad o no
    if (esMayorDeEdad) {
     let mensajeMaydeEdad = `La persona ${persona.nombre} es mayor de edad.`;
      alert(mensajeMaydeEdad);
    } else {
    let mensajeMaydeEdad = `La persona ${persona.nombre} no es mayor de edad.`;
      alert(mensajeMaydeEdad);
}

}


  
